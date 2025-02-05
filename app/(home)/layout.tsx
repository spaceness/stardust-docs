import spacenessIcon from "@/app/_images/spaceness.png";
import { buttonVariants } from "@/components/ui/button";
import Link from "fumadocs-core/link";
import { HomeLayout } from "fumadocs-ui/layouts/home";
import Image from "next/image";
import type { ReactNode } from "react";
import { layoutOptions } from "../layout-options";
export default function Layout({ children }: { children: ReactNode }) {
	return (
		<HomeLayout {...layoutOptions}>
			{children}
			<footer className="text-center text-fd-muted-foreground text-sm flex justify-center items-center flex-col gap-4">
				<Image src={spacenessIcon} alt="Spaceness" width={100} height={100} className="max-md:hidden" />
				<section>
					Stardust is a{" "}
					<Link
						href="https://spaceness.team"
						target="_blank"
						className={buttonVariants({ variant: "link", className: "-m-4" })}
					>
						Spaceness
					</Link>{" "}
					project licensed under the AGPL-v3 license.
					<br />
					&copy; {new Date().getFullYear()} Spaceness.
				</section>
			</footer>
		</HomeLayout>
	);
}
