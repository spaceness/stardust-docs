import { getPage, getPages } from "@/app/source";
import { createTypeTable } from "fumadocs-typescript/ui";
import { Card, Cards } from "fumadocs-ui/components/card";
import { CodeBlock, Pre } from "fumadocs-ui/components/codeblock";
import { ImageZoom } from "fumadocs-ui/components/image-zoom";
import { Step, Steps } from "fumadocs-ui/components/steps";
import { Tab, Tabs } from "fumadocs-ui/components/tabs";
import { DocsBody, DocsPage } from "fumadocs-ui/page";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import React from "react";
export default async function Page(props: {
	params: Promise<{ slug?: string[] }>;
}) {
	const params = await props.params;
	const page = getPage(params.slug);

	if (!page) notFound();

	const { body: MDX, toc, lastModified } = page.data;
	const path = `content/docs/${page.file.path}`;

	return (
		<DocsPage
			toc={toc}
			lastUpdate={lastModified}
			editOnGithub={{
				repo: "stardust-docs",
				owner: "spaceness",
				sha: "main",
				path,
			}}
			tableOfContent={{
				style: "clerk",
			}}
		>
			<DocsBody>
				<h1>{page.data.title}</h1>
				<MDX
					components={{
						AutoTypeTable: createTypeTable().AutoTypeTable,
						Card: (props) => <Card {...props} />,
						Cards: (props) => <Cards {...props} />,
						Step: (props) => <Step {...props} />,
						Steps: (props) => <Steps {...props} />,
						Tab: (props) => <Tab {...props} />,
						Tabs: (props) => <Tabs {...props} />,
						img: (props) => <ImageZoom {...props} />,
						pre: ({ ref: _ref, ...props }) => (
							<CodeBlock {...props}>
								<Pre>{props.children}</Pre>
							</CodeBlock>
						),
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

export async function generateMetadata(props: { params: Promise<{ slug?: string[] }> }) {
	const params = await props.params;
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
