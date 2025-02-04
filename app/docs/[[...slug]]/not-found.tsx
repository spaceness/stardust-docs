"use client";

import { buttonVariants } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function notFound() {
	const router = useRouter();
	return (
		<div className="flex h-screen w-full justify-center items-center flex-col gap-4">
			<h1 className="text-fd-primary font-bold text-4xl">404</h1>
			<h2>Page not found</h2>
			<button
				type="button"
				// biome-ignore lint: doesnt make sense to use a <a> elm
				role="link"
				onClick={router.back}
				className={buttonVariants({
					variant: "outline",
					className: "rounded-full bg-fd-background",
				})}
			>
				<ChevronLeft className="mr-2" />
				Go back
			</button>
		</div>
	);
}
