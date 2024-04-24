import { pageTree } from "./source";
import { type DocsLayoutProps } from "fumadocs-ui/layout";
import { Sparkles } from "lucide-react";
import Link from "fumadocs-core/link";
const links = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/docs",
    label: "Docs",
  },
];
export const layoutOptions: Omit<DocsLayoutProps, "children"> = {
  tree: pageTree,
  nav: {
    title: (
      <>
        <Sparkles className="max-md:hidden -mr-2" />
        <span className="ml-3 font-semibold max-md:hidden text-lg text-nowrap">
          Stardust
        </span>
      </>
    ),
    children: (
      <>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="hover:text-foreground text-muted-foreground text-sm duration-300"
          >
            {link.label}
          </Link>
        ))}
      </>
    ),
    transparentMode: "top",
    githubUrl: "https://github.com/spaceness/stardust",
  },
};
