import { getPage, getPages } from "@/app/source";
import type { Metadata } from "next";
import { DocsPage, DocsBody } from "fumadocs-ui/page";
import { Card, Cards } from "fumadocs-ui/components/card";
import { notFound } from "next/navigation";
import { ExternalLinkIcon } from "lucide-react";
import {ImageZoom} from "fumadocs-ui/components/image-zoom";
import React from "react";
export default async function Page({
  params,
}: {
  params: { slug?: string[] };
}) {
  const page = getPage(params.slug);

  if (page == null) {
    notFound();
  }

  const MDX = page.data.exports.default;
  const path = `content/docs/${page.file.path}`;

  return (
    <DocsPage
      toc={page.data.exports.toc}
      lastUpdate={page.data.exports.lastModified}
      tableOfContent={{
        footer: (
          <a
            href={`https://github.com/spaceness/stardust-docs/tree/main/${path}`}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center text-xs text-muted-foreground hover:text-foreground"
          >
            Edit on GitHub <ExternalLinkIcon className="ml-1 size-3" />
          </a>
        ),
      }}
    >
      <DocsBody>
        <h1>{page.data.title}</h1>
        <MDX
          components={{
            Card: (props) => <Card {...props} />,
            Cards: (props) => <Cards {...props} />,
            // @ts-expect-error
            img: (props) => <ImageZoom {...props} />,
          }}
        />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return getPages().map((page) => ({
    slug: page.slugs,
  }));
}

export function generateMetadata({ params }: { params: { slug?: string[] } }) {
  const page = getPage(params.slug);

  if (page == null) notFound();
  const imageParams = new URLSearchParams();
  const description = page.data.description ?? "";
  imageParams.set("title", page.data.title);
  imageParams.set("description", description);

  const image = {
    alt: "Banner",
    url: `/api/og?${imageParams.toString()}`,
    width: 1200,
    height: 630,
  };
  return {
    title: page.data.title,
    description: page.data.description,
    openGraph: {
      url: `/docs/${page.slugs.join("/")}`,
      images: image,
    },
  } satisfies Metadata;
}
