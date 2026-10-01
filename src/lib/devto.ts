import DOMPurify from "dompurify";

export const DEVTO_USERNAMES = ["musah_congoadama_736fd38", "congomusah"];
export const DEVTO_PROFILE_URL = `https://dev.to/${DEVTO_USERNAMES[0]}`;
const API = "https://dev.to/api";

export interface DevToArticleSummary {
  id: number;
  title: string;
  description: string;
  slug: string;
  url: string;
  published_at: string;
  reading_time_minutes: number;
  tag_list: string[];
  cover_image: string | null;
  public_reactions_count: number;
  comments_count: number;
}

export interface DevToArticle extends Omit<DevToArticleSummary, "tag_list"> {
  body_html: string;
  tags: string[];
}

const fetchUserArticles = async (username: string): Promise<DevToArticleSummary[]> => {
  const res = await fetch(`${API}/articles?username=${username}&per_page=100`);
  if (!res.ok) throw new Error(`dev.to responded ${res.status}`);
  return res.json();
};

export const fetchArticles = async (): Promise<DevToArticleSummary[]> => {
  const results = await Promise.allSettled(DEVTO_USERNAMES.map(fetchUserArticles));
  const articles = results.flatMap((result) => (result.status === "fulfilled" ? result.value : []));
  if (!articles.length && results.every((result) => result.status === "rejected")) {
    throw new Error("Couldn't reach dev.to");
  }
  return articles
    .filter((article) => article.title.trim() !== "[Boost]")
    .sort((a, b) => Date.parse(b.published_at) - Date.parse(a.published_at));
};

export const fetchArticle = async (slug: string): Promise<DevToArticle> => {
  for (const username of DEVTO_USERNAMES) {
    const res = await fetch(`${API}/articles/${username}/${encodeURIComponent(slug)}`);
    if (res.ok) return res.json();
  }
  throw new Error("Post not found on dev.to");
};

export const formatPostDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });

const TRUSTED_EMBED = /^https:\/\/(www\.)?(youtube\.com|youtube-nocookie\.com|player\.vimeo\.com|codepen\.io|codesandbox\.io|stackblitz\.com|dev\.to)\//;

let hooksInstalled = false;

export const sanitizeArticleHtml = (html: string) => {
  if (!hooksInstalled) {
    DOMPurify.addHook("afterSanitizeAttributes", (node) => {
      if (node.tagName === "A") {
        const href = node.getAttribute("href") ?? "";
        if (/^https?:\/\//.test(href)) {
          node.setAttribute("target", "_blank");
          node.setAttribute("rel", "noopener noreferrer");
        }
      }
      if (node.tagName === "IFRAME" && !TRUSTED_EMBED.test(node.getAttribute("src") ?? "")) {
        node.remove();
      }
    });
    hooksInstalled = true;
  }
  return DOMPurify.sanitize(html, {
    ADD_TAGS: ["iframe"],
    ADD_ATTR: ["allow", "allowfullscreen", "frameborder", "loading", "target"],
  });
};
