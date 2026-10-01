import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import { PixelHeading } from "@/components/canvas/Canvas";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen overflow-x-clip">
      <Header />
      <main className="mx-auto flex min-h-[70dvh] w-full max-w-lg flex-col items-center justify-center px-5 py-24 text-center">
        <p className="font-hand text-3xl text-ink">oops, wrong folder</p>
        <PixelHeading as="h1" lines={["404"]} className="mt-2 text-[clamp(5rem,24vw,10rem)]" />
        <p className="mt-4 text-base leading-relaxed text-ink/70">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex min-h-[48px] items-center justify-center border-2 border-ink px-8 font-mono text-sm font-semibold uppercase tracking-[0.14em] text-ink transition-colors hover:bg-ink hover:text-canvas"
        >
          Back to home
        </Link>
      </main>
    </div>
  );
};

export default NotFound;
