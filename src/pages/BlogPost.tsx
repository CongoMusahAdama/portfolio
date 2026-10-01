import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Heart, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { UnderlineLink } from "@/components/canvas/Canvas";
import {
  DEVTO_PROFILE_URL,
  fetchArticle,
  fetchArticles,
  formatPostDate,
  sanitizeArticleHtml,
} from "@/lib/devto";

const BlogPost = () => {
  const { slug = "" } = useParams();

  const { data: post, isLoading, isError } = useQuery({
    queryKey: ["devto-article", slug],
    queryFn: () => fetchArticle(slug),
    staleTime: 10 * 60 * 1000,
    enabled: Boolean(slug),
  });

  const { data: allPosts } = useQuery({
    queryKey: ["devto-articles"],
    queryFn: fetchArticles,
    staleTime: 10 * 60 * 1000,
  });

  const html = useMemo(() => (post ? sanitizeArticleHtml(post.body_html) : ""), [post]);
  const morePosts = (allPosts ?? []).filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <div className="min-h-screen overflow-x-clip">
      <Header />

      <main className="mx-auto w-full max-w-3xl px-5 pb-20 pt-10 sm:px-8 md:pt-14">
        <Link
          to="/blog"
          className="mb-8 inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-ink/70 transition-colors hover:text-ink"
        >
          <ArrowLeft className="h-4 w-4" /> All posts
        </Link>

        {isLoading && (
          <div className="space-y-4">
            <div className="h-10 w-3/4 animate-pulse bg-ink/10" />
            <div className="h-4 w-1/3 animate-pulse bg-ink/10" />
            <div className="mt-8 aspect-[16/9] w-full animate-pulse bg-ink/10" />
          </div>
        )}

        {isError && (
          <div className="border-2 border-ink bg-paper p-8 text-center">
            <p className="mb-4 text-ink/80">Couldn't load this post.</p>
            <UnderlineLink href={DEVTO_PROFILE_URL}>Read it on dev.to</UnderlineLink>
          </div>
        )}

        {post && (
          <article>
            {post.tags.length > 0 && (
              <div className="mb-5 flex flex-wrap gap-1.5">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-c-cream px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-[0.1em] text-on-color"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            <h1 className="text-3xl font-semibold leading-[1.15] tracking-tight text-ink sm:text-4xl md:text-5xl">
              {post.title}
            </h1>

            <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 border-y border-ink/15 py-4">
              <img
                src="/assets/profile-o.jpg"
                alt=""
                className="h-9 w-9 rounded-full border-2 border-ink object-cover"
              />
              <div className="mr-auto">
                <p className="text-sm font-semibold text-ink">Congo Musah Adams</p>
                <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink/55">
                  {formatPostDate(post.published_at)} · {Math.max(1, post.reading_time_minutes)} min read
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 font-mono text-xs text-ink/60">
                <Heart className="h-3.5 w-3.5" /> {post.public_reactions_count}
              </span>
              <span className="inline-flex items-center gap-1.5 font-mono text-xs text-ink/60">
                <MessageCircle className="h-3.5 w-3.5" /> {post.comments_count}
              </span>
            </div>

            {post.cover_image && (
              <img
                src={post.cover_image}
                alt=""
                className="mt-8 w-full border-2 border-ink object-cover hard-shadow"
              />
            )}

            <div className="blog-prose mt-10" dangerouslySetInnerHTML={{ __html: html }} />

            <div className="mt-14 flex flex-col items-start gap-4 border-2 border-ink bg-c-cream p-6 text-on-color sm:flex-row sm:items-center sm:justify-between">
              <p className="text-base font-medium">Thoughts on this? Join the conversation.</p>
              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-on-color px-4 py-2.5 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-white"
              >
                Comment on dev.to <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </article>
        )}

        {morePosts.length > 0 && (
          <section className="mt-16">
            <p className="mb-5 font-hand text-2xl text-ink">keep reading</p>
            <div className="divide-y divide-ink/15 border-y border-ink/15">
              {morePosts.map((p) => (
                <Link
                  key={p.id}
                  to={`/blog/${p.slug}`}
                  className="group flex items-center justify-between gap-4 py-4 transition-colors hover:bg-ink/5"
                >
                  <div className="min-w-0">
                    <p className="font-semibold leading-snug text-ink">{p.title}</p>
                    <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.12em] text-ink/55">
                      {formatPostDate(p.published_at)} · {Math.max(1, p.reading_time_minutes)} min read
                    </p>
                  </div>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-ink/60 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default BlogPost;
