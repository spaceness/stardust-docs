import { DocsLayout } from "fumadocs-ui/layouts/docs";
import type { ReactNode } from "react";
import { layoutOptions } from "../layout-options";
import { pageTree } from "../source";

export default function RootDocsLayout({ children }: { children: ReactNode }) {
	return (
		<DocsLayout {...layoutOptions} tree={pageTree}>
			{children}
		</DocsLayout>
	);
}
