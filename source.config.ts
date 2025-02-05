import { defineConfig, defineDocs } from "fumadocs-mdx/config";
export default defineConfig({
	lastModifiedTime: "git",
	mdxOptions: {
		rehypeCodeOptions: {
			themes: {
				light: "catppuccin-latte",
				dark: "catppuccin-mocha",
			},
		},
	},
});
export const { docs, meta } = defineDocs({
	dir: "content/docs",
});
