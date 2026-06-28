import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Header />
      <main className="mx-auto flex min-h-[70dvh] w-full max-w-lg flex-col items-center justify-center px-5 py-24 text-center">
        <p className="font-mono text-xs text-muted-foreground">404</p>
        <h1 className="mt-2 text-3xl sm:text-4xl font-black tracking-tight text-foreground">
          Page not found
        </h1>
        <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex min-h-[48px] items-center justify-center rounded-full bg-brand-orange px-8 text-sm font-bold text-white shadow-lg shadow-brand-orange/20 transition-colors hover:bg-brand-orange/90"
        >
          Back to home
        </Link>
      </main>
    </div>
  );
};

export default NotFound;
