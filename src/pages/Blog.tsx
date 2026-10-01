import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { ArrowUpRight, Heart, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { HandKicker, PixelHeading, UnderlineLink } from "@/components/canvas/Canvas";
import { cn } from "@/lib/utils";
import { DEVTO_PROFILE_URL, fetchArticles, formatPostDate, type DevToArticleSummary } from "@/lib/devto";

const cardColors = ["#b5ddf0", "#efdca4", "#f2bfcd", "#a6d9bb", "#5fbee6", "#e3a92f"];

const PostMeta = ({ post, className = "" }: { post: DevToArticleSummary; className?: string }) => (
  <p className={cn("flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] opacity-70", className)}>
    <span>{formatPostDate(post.published_at)}</span>
    <span aria-hidden>·</span>
    <span>{Math.max(1, post.reading_time_minutes)} min read</span>
    {post.public_reactions_count > 0 && (
      <span className="inline-flex items-center gap-1">
        <Heart className="h-3 w-3" /> {post.public_reactions_count}
      </span>
    )}
    {post.comments_count > 0 && (
      <span className="inline-flex items-center gap-1">
        <MessageCircle className="h-3 w-3" /> {post.comments_count}
      </span>
    )}
  </p>
);

const Tags = ({ tags }: { tags: string[] }) =>
  tags.length ? (
    <div className="flex flex-wrap gap-1.5">
      {tags.slice(0, 4).map((tag) => (
        <span key={tag} className="border border-current px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-[0.1em] opacity-80">
          #{tag}
        </span>
      ))}
    </div>
  ) : null;

const Cover = ({ post, color, className }: { post: DevToArticleSummary; color: string; className: string }) =>
  post.cover_image ? (
    <img src={post.cover_image} alt="" loading="lazy" className={`${className} object-cover`} />
  ) : (
    <div className={`${className} flex items-center justify-center p-6`} style={{ background: color }}>
      <span className="line-clamp-3 text-center font-pixel text-2xl font-bold leading-tight text-on-color sm:text-3xl">
        {post.title}
      </span>
    </div>
  );

const FeaturedPost = ({ post }: { post: DevToArticleSummary }) => (
  <Link
    to={`/blog/${post.slug}`}
    className="group grid overflow-hidden border-2 border-ink bg-c-dark text-white hard-shadow-lg transition-transform duration-300 hover:-translate-y-1 md:grid-cols-[1.15fr_1fr]"
  >
    <Cover post={post} color="#5fbee6" className="aspect-[16/9] w-full md:aspect-auto md:h-full md:min-h-[320px]" />
    <div className="flex flex-col justify-center gap-4 p-6 md:p-10">
      <span className="w-fit bg-c-yellow px-2 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-on-color">
        Latest post
      </span>
      <h2 className="text-2xl font-semibold leading-tight tracking-tight md:text-4xl">{post.title}</h2>
      <p className="line-clamp-3 text-sm leading-relaxed text-white/70 md:text-base">{post.description}</p>
      <PostMeta post={post} />
      <Tags tags={post.tag_list} />
      <span className="mt-2 inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-c-blue">
        Read the post <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </div>
  </Link>
);

const PostCard = ({ post, index }: { post: DevToArticleSummary; index: number }) => {
  const color = cardColors[index % cardColors.length];
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: (index % 3) * 0.06, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link
        to={`/blog/${post.slug}`}
        className="group flex h-full overflow-hidden border-2 border-ink bg-paper text-ink transition-transform duration-300 hover:-translate-y-1 hover:hard-shadow sm:flex-col"
      >
        {post.cover_image ? (
          <img
            src={post.cover_image}
            alt=""
            loading="lazy"
            className="w-28 shrink-0 border-r-2 border-ink object-cover sm:aspect-[16/9] sm:w-full sm:border-b-2 sm:border-r-0"
          />
        ) : (
          <div
            className="flex w-28 shrink-0 items-center justify-center border-r-2 border-ink p-3 sm:aspect-[16/9] sm:w-full sm:border-b-2 sm:border-r-0 sm:p-6"
            style={{ background: color }}
          >
            <span aria-hidden className="font-pixel text-5xl font-bold leading-none text-on-color sm:hidden">
              {post.title.trim().charAt(0)}
            </span>
            <span className="hidden sm:block">
              <span className="line-clamp-3 text-center font-pixel text-3xl font-bold leading-tight text-on-color">
                {post.title}
              </span>
            </span>
          </div>
        )}
        <div className="flex min-w-0 flex-1 flex-col gap-2 p-4 sm:gap-3 sm:p-5">
          <PostMeta post={post} className="text-[10px] sm:text-[11px]" />
          <h3 className="line-clamp-3 text-[15px] font-semibold leading-snug tracking-tight sm:line-clamp-none sm:text-lg">
            {post.title}
          </h3>
          {post.description && (
            <p className="hidden text-sm leading-relaxed text-ink/65 sm:line-clamp-2">{post.description}</p>
          )}
          <div className="mt-auto hidden pt-2 sm:block">
            <Tags tags={post.tag_list} />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

const Skeleton = () => (
  <div className="space-y-8">
    <div className="h-[320px] animate-pulse border-2 border-ink/20 bg-ink/5" />
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {[0, 1, 2].map((i) => (
        <div key={i} className="h-[320px] animate-pulse border-2 border-ink/20 bg-ink/5" />
      ))}
    </div>
  </div>
);

const Blog = () => {
  const { data: posts, isLoading, isError } = useQuery({
    queryKey: ["devto-articles"],
    queryFn: fetchArticles,
    staleTime: 10 * 60 * 1000,
  });

  const [latest, ...rest] = posts ?? [];

  return (
    <div className="min-h-screen overflow-x-clip">
      <Header />

      <main className="mx-auto w-full max-w-6xl px-5 pb-20 pt-14 sm:px-8 md:pt-20">
        <div className="mb-14 flex flex-col items-center text-center md:mb-20">
          <HandKicker>notes from the build</HandKicker>
          <PixelHeading as="h1" lines={["BLOG"]} className="mt-3 text-[clamp(4.5rem,20vw,11rem)]" />
          <p className="mt-5 max-w-lg text-sm leading-relaxed text-ink/70 md:text-base">
            Writing on systems, products, AI and the lessons in between.
          </p>
        </div>

        {isLoading && <Skeleton />}

        {isError && (
          <div className="mx-auto max-w-md border-2 border-ink bg-paper p-8 text-center">
            <p className="mb-4 text-ink/80">Couldn't load posts right now.</p>
            <UnderlineLink href={DEVTO_PROFILE_URL}>Read them on dev.to</UnderlineLink>
          </div>
        )}

        {latest && (
          <div className="space-y-10 md:space-y-14">
            <FeaturedPost post={latest} />
            {rest.length > 0 && (
              <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
                {rest.map((post, index) => (
                  <PostCard key={post.id} post={post} index={index} />
                ))}
              </div>
            )}
          </div>
        )}
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Blog;
