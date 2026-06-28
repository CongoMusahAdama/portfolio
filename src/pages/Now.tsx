import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { nowBooks, nowFavourites, nowLately } from "@/data/nowPage";
import { ChefHat, Circle, Film, Mic } from "lucide-react";

const sectionLabel = "font-mono text-xs text-muted-foreground";
const bodyText = "text-sm leading-relaxed text-foreground/80";

const FavouriteIcon = ({ type }: { type: string }) => {
  if (type === "football") {
    return (
      <Circle
        className="h-[18px] w-[18px] shrink-0 text-foreground/70 invert opacity-80 dark:invert"
        strokeWidth={1.5}
      />
    );
  }
  if (type === "film") {
    return (
      <Film className="h-[18px] w-[18px] shrink-0 text-foreground/70" strokeWidth={1.5} />
    );
  }
  if (type === "podcast") {
    return (
      <Mic className="h-[18px] w-[18px] shrink-0 text-foreground/70" strokeWidth={1.5} />
    );
  }
  return (
    <ChefHat className="h-[18px] w-[18px] shrink-0 text-foreground/70" strokeWidth={1.5} />
  );
};

const Now = () => (
  <div className="min-h-screen overflow-x-hidden bg-background">
    <Header />

    <main className="mx-auto flex min-h-screen w-full max-w-[800px] flex-col px-5 pb-16 pt-[max(6.5rem,calc(env(safe-area-inset-top)+5rem))] sm:px-8 sm:pb-24 sm:pt-32">
      <div className="mt-8 flex-1 sm:mt-12">
        <div className="max-w-xl space-y-10">
          <p className={sectionLabel}>Now · Updated June 2026</p>

          <dl className="space-y-8">
            <div className="space-y-1">
              <dt className={sectionLabel}>Building</dt>
              <dd className={bodyText}>
                <span className="text-brand-orange">MantroOps</span>{" "}
                <span className="text-muted-foreground">(CMMS)</span> — an engineering
                operations platform for firms in Ghana and similar markets. One base for
                assets, maintenance, work orders, approvals, and reporting — with ML/AI
                that predicts what may fail and prescribes how teams should respond.
              </dd>
            </div>

            <div className="space-y-1">
              <dt className={sectionLabel}>Growing</dt>
              <dd className={bodyText}>
                Tech entrepreneurship — leading product on my agri-tech startup and other
                ventures. Panel discussions and community through webinars and founder
                conversations.
              </dd>
            </div>

            <div className="space-y-2">
              <dt className={sectionLabel}>Reading</dt>
              <dd className={`space-y-3 ${bodyText}`}>
                {nowBooks.map((book) => (
                  <div key={book.title} className="flex items-center gap-3">
                    {book.cover ? (
                      <img
                        src={book.cover}
                        alt=""
                        width={30}
                        height={38}
                        className="h-[38px] w-[30px] shrink-0 rounded-sm object-cover"
                      />
                    ) : (
                      <div className="flex h-[38px] w-[30px] shrink-0 items-center justify-center rounded-sm bg-emerald-900/40 text-[9px] font-mono text-emerald-200/80">
                        Qur&apos;an
                      </div>
                    )}
                    <div>
                      <p>{book.title}</p>
                      <p className="font-mono text-xs text-muted-foreground">{book.meta}</p>
                    </div>
                  </div>
                ))}
              </dd>
            </div>

            <div className="space-y-1">
              <dt className={sectionLabel}>Based in</dt>
              <dd className={bodyText}>Takoradi, Ghana — 4.90° N, 1.76° W</dd>
            </div>

            <div className="space-y-2">
              <dt className={sectionLabel}>Favourites</dt>
              <dd className={`space-y-2 ${bodyText}`}>
                {nowFavourites.map((item) => (
                  <div key={item.label} className="flex items-center gap-2">
                    {"image" in item ? (
                      <img
                        src={item.image}
                        alt=""
                        width={18}
                        height={18}
                        className="h-[18px] w-[18px] shrink-0 object-contain"
                      />
                    ) : (
                      <FavouriteIcon type={item.icon} />
                    )}
                    <span>{item.label}</span>
                  </div>
                ))}
              </dd>
            </div>

            <div className="space-y-3">
              <dt className={sectionLabel}>Lately</dt>
              <dd className={`space-y-3 ${bodyText}`}>
                {nowLately.map((track) => (
                  <div key={track.num} className="flex items-center gap-3">
                    <span className="w-5 shrink-0 font-mono text-xs text-muted-foreground">
                      {track.num}
                    </span>
                    <img
                      src={track.cover}
                      alt=""
                      width={36}
                      height={36}
                      className="h-9 w-9 shrink-0 rounded-sm object-cover"
                    />
                    <div>
                      <p>{track.title}</p>
                      <p className="font-mono text-xs text-muted-foreground">{track.artist}</p>
                    </div>
                  </div>
                ))}
              </dd>
            </div>
          </dl>
        </div>
      </div>

      <footer className="mt-24 space-y-4 border-t border-border pt-8 sm:mt-32">
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          <a
            href="https://github.com/CongoMusahAdama"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/congo-musah-ad-deen-766bb3224/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://twitter.com/1real_vee"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            X
          </a>
          <a
            href="https://dev.to/congomusah"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            Blog
          </a>
        </div>
        <p className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()}{" "}
          <span className="text-foreground">Congo Musah Adama</span> · Takoradi, Ghana
        </p>
      </footer>
    </main>

    <ScrollToTop />
  </div>
);

export default Now;
