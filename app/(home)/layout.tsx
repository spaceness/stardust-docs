import { Layout } from "fumadocs-ui/layout";
import type { ReactNode } from "react";
import { layoutOptions } from "../layout-options";

export default function HomeLayout({ children }: { children: ReactNode }) {
  return <Layout {...layoutOptions}>{children}</Layout>;
}
