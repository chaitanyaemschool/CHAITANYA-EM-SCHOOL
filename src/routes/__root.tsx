import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { Toaster } from "sonner";
import { MouseSpotlight } from "@/components/mouse-spotlight";
import { LogoLoader } from "@/components/logo-loader";
import { FloatingDock } from "@/components/floating-dock";
import { LenisProvider } from "@/components/lenis-provider";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    // Error reporting removed
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { httpEquiv: "Cache-Control", content: "no-cache, no-store, must-revalidate" },
      { httpEquiv: "Pragma", content: "no-cache" },
      { httpEquiv: "Expires", content: "0" },
      { title: "Chaitanya EM High School | Chekkapalli" },
      {
        name: "description",
        content: "Dare to dream, care to achieve — Chaitanya EM High School, Chekkapalli. Nurturing young minds from Nursery to Grade 10 with quality education, the LEAD curriculum and IIT Foundation.",
      },
      { name: "author", content: "Chaitanya EM High School" },
      { property: "og:title", content: "Chaitanya EM High School | Chekkapalli" },
      {
        property: "og:description",
        content: "Dare to dream, care to achieve — Chaitanya EM High School, Chekkapalli. Nurturing young minds from Nursery to Grade 10 with quality education, the LEAD curriculum and IIT Foundation.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.chaitanyaemhighschool.com/" },
      { property: "og:site_name", content: "Chaitanya EM High School" },
      { property: "og:image", content: "https://www.chaitanyaemhighschool.com/logo-crest.jpeg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Chaitanya EM High School | Chekkapalli" },
      {
        name: "twitter:description",
        content: "Dare to dream, care to achieve — nurturing young minds from Nursery to Grade 10.",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/logo-crest.jpeg", type: "image/jpeg" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          name: "Chaitanya EM High School",
          url: "https://www.chaitanyaemhighschool.com/",
          logo: "https://www.chaitanyaemhighschool.com/logo-crest.jpeg",
          slogan: "Dare to dream, care to achieve",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Chekkapalli",
            addressRegion: "Andhra Pradesh",
            addressCountry: "IN",
          },
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        <style dangerouslySetInnerHTML={{ __html: `
          body:not(.loader-finished) #app-content {
            opacity: 0;
            visibility: hidden;
          }
          body.loader-finished #app-content {
            opacity: 1;
            visibility: visible;
            transition: opacity 0.8s ease-in-out;
          }
        `}} />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isAdmin = pathname.startsWith("/admin");

  return (
    <LenisProvider>
      <QueryClientProvider client={queryClient}>
        <LogoLoader />
        <div id="app-content">
          <Outlet />
          {!isAdmin && <FloatingDock />}
          <MouseSpotlight />
        </div>
        <Toaster position="top-center" richColors closeButton />
      </QueryClientProvider>
    </LenisProvider>
  );
}
