import Link from "next/link";
import type { ReactNode } from "react";
import { JsonLd } from "@/components/seo/JsonLd";
import { site } from "@/data/site";
import { getBreadcrumbJsonLd } from "@/lib/seo";

interface LegalPageShellProps {
  title: string;
  path: string;
  lastUpdated: string;
  children: ReactNode;
}

export function LegalPageShell({ title, path, lastUpdated, children }: LegalPageShellProps) {
  return (
    <>
      <JsonLd
        data={getBreadcrumbJsonLd([
          { name: "Home", url: site.url },
          { name: title, url: `${site.url}${path}` },
        ])}
      />
      <main className="mx-auto w-full max-w-180 px-[var(--page-gutter)] pt-28 pb-16 mobile:pt-32 tablet:pt-40 tablet:pb-24">
        <nav aria-label="Breadcrumb" className="mb-6 text-body-sm text-fg-subtle">
          <Link href="/" className="hover:text-fg">
            Home
          </Link>{" "}
          <span aria-hidden="true">/</span> {title}
        </nav>
        <h1 className="mb-2 font-display text-display-md text-fg">{title}</h1>
        <p className="mb-10 text-body-sm text-fg-subtle">Last updated: {lastUpdated}</p>
        <article className="prose max-w-none">{children}</article>
      </main>
    </>
  );
}
