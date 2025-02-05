import { Discord, StardustIcon } from "@/components/icons";
import type { DocsLayoutProps } from "fumadocs-ui/layouts/docs";
import { pageTree } from "./source";
export const layoutOptions: Omit<DocsLayoutProps, "children"> = {
	tree: pageTree,
	nav: {
		title: (
			<>
				<StardustIcon className="-mr-4 size-8" />
				<span className="ml-3 font-semibold max-md:hidden text-lg text-nowrap">Stardust</span>
			</>
		),
		transparentMode: "top",
	},
	githubUrl: "https://github.com/spaceness/stardust",
	links: [
		{
			url: "/",
			text: "Home",
		},
		{
			url: "/docs",
			text: "Docs",
		},
		{
			type: "icon",
			text: "Discord",
			url: "https://discord.gg/AsfQ4ZhqHC",
			icon: <Discord />,
			external: true,
		},
	],
};
