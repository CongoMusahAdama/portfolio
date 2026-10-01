import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { HandKicker, LabelTag, PixelHeading, SelectionBox, StickyNote } from "@/components/canvas/Canvas";
import { nowBooks, nowFavourites, nowLately } from "@/data/nowPage";
import { ChefHat, Circle, Film, Mic } from "lucide-react";

const rowLabel = "shrink-0 pt-1 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-ink/50 sm:w-36";
const bodyText = "text-base leading-relaxed text-ink/80";

const FavouriteIcon = ({ type }: { type: string }) => {
  const cls = "h-[18px] w-[18px] shrink-0 text-ink/70";
  if (type === "football") return <Circle className={cls} strokeWidth={1.5} />;
  if (type === "film") return <Film className={cls} strokeWidth={1.5} />;
  if (type === "podcast") return <Mic className={cls} strokeWidth={1.5} />;
  return <ChefHat className={cls} strokeWidth={1.5} />;
};

const Row = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div className="flex flex-col gap-3 px-5 py-6 sm:flex-row sm:gap-6 md:px-8 md:py-7">
    <dt className={rowLabel}>{label}</dt>
    <dd className={`min-w-0 flex-1 ${bodyText}`}>{children}</dd>
  </div>
);

const Now = () => (
  <div className="min-h-screen overflow-x-clip">
    <Header />

    <main className="mx-auto w-full max-w-5xl px-5 pb-20 pt-14 sm:px-8 md:pt-20">
      <div className="relative mb-14 flex flex-col items-center text-center md:mb-20">
        <HandKicker>what i'm up to</HandKicker>
        <PixelHeading as="h1" lines={["NOW"]} className="mt-3 text-[clamp(4.5rem,20vw,11rem)]" />
        <p className="mt-4 flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-ink/60">
          <span className="h-2 w-2 animate-status-pulse rounded-full bg-c-green" />
          Updated June 2026
        </p>
      </div>

      <LabelTag bg="#a6d9bb">Currently</LabelTag>
      <SelectionBox color="#5fb57f" fill="rgb(var(--paper-rgb))">
        <dl className="divide-y divide-ink/10">
          <Row label="Building">
            <div className="space-y-4">
              <p>
                <span className="bg-c-sky px-1 font-semibold text-on-color">Agrilync Nexus</span> — a Ghana-based
                AgriFinTech and advisory platform that connects smallholder farmers with farm investors and partner
                organizations through a structured, transparent finance-first model supported by training, AI-powered
                advisory, and an agent network.
              </p>
              <p>
                <span className="bg-c-rose px-1 font-semibold text-on-color">MantroOps</span>{" "}
                <span className="text-ink/50">(CMMS)</span> — an engineering operations platform for firms in Ghana and
                similar markets. One base for assets, maintenance, work orders, approvals, and reporting — with ML/AI
                that predicts what may fail and prescribes how teams should respond.
              </p>
            </div>
          </Row>

          <Row label="Growing">
            Tech entrepreneurship — leading product on my agri-tech startup and other ventures. Panel discussions and
            community through webinars and founder conversations.
          </Row>

          <Row label="Reading">
            <div className="flex flex-wrap gap-4">
              {nowBooks.map((book) => (
                <div key={book.title} className="flex items-center gap-3">
                  {book.cover ? (
                    <img
                      src={book.cover}
                      alt=""
                      width={34}
                      height={44}
                      className="h-[44px] w-[34px] shrink-0 object-cover shadow-[2px_2px_0_rgba(20,20,20,0.8)]"
                    />
                  ) : (
                    <div className="flex h-[44px] w-[34px] shrink-0 items-center justify-center bg-c-green font-mono text-[9px] text-on-color shadow-[2px_2px_0_rgba(20,20,20,0.8)]">
                      Qur&apos;an
                    </div>
                  )}
                  <div>
                    <p className="font-medium text-ink">{book.title}</p>
                    <p className="font-mono text-xs text-ink/50">{book.meta}</p>
                  </div>
                </div>
              ))}
            </div>
          </Row>

          <Row label="Based in">Takoradi, Ghana — 4.90° N, 1.76° W</Row>

          <Row label="Favourites">
            <div className="flex flex-wrap gap-2">
              {nowFavourites.map((item) => (
                <span key={item.label} className="flex items-center gap-2 border border-ink/25 bg-canvas px-2.5 py-1 text-sm">
                  {"image" in item ? (
                    <img src={item.image} alt="" width={18} height={18} className="h-[18px] w-[18px] shrink-0 object-contain" />
                  ) : (
                    <FavouriteIcon type={item.icon} />
                  )}
                  {item.label}
                </span>
              ))}
            </div>
          </Row>

          <Row label="Lately">
            <div className="space-y-3">
              {nowLately.map((track) => (
                <div key={track.num} className="flex items-center gap-3">
                  <span className="w-5 shrink-0 font-mono text-xs text-ink/50">{track.num}</span>
                  <img src={track.cover} alt="" width={40} height={40} className="h-10 w-10 shrink-0 object-cover" />
                  <div>
                    <p className="font-medium text-ink">{track.title}</p>
                    <p className="font-mono text-xs text-ink/50">{track.artist}</p>
                  </div>
                </div>
              ))}
            </div>
          </Row>
        </dl>
      </SelectionBox>

      <div className="mt-14 flex justify-center">
        <StickyNote bg="#efdca4" rotate={-1.5} className="max-w-sm text-center">
          This is a <span className="font-hand text-2xl">/now</span> page — what I'd tell a friend I haven't seen in a
          year.
        </StickyNote>
      </div>
    </main>

    <Footer />
    <ScrollToTop />
  </div>
);

export default Now;
