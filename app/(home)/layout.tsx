import { HomeLayout } from "fumadocs-ui/layouts/home";
import type { ReactNode } from "react";
import { layoutOptions } from "../layout-options";
export default function Layout({ children }: { children: ReactNode }) {
	return <HomeLayout {...layoutOptions}>{children}</HomeLayout>;
}
