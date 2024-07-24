import { DocsLayout } from "fumadocs-ui/layout";
import type { ReactNode } from "react";
import { layoutOptions } from "../layout-options";

export default function RootDocsLayout({ children }: { children: ReactNode }) {
	return <DocsLayout {...layoutOptions}>{children}</DocsLayout>;
}
