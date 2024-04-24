import { DocsLayout } from "fumadocs-ui/layout";
import { layoutOptions } from "../layout-options";
import type { ReactNode } from "react";

export default function RootDocsLayout({ children }: { children: ReactNode }) {
  return <DocsLayout {...layoutOptions}>{children}</DocsLayout>;
}
