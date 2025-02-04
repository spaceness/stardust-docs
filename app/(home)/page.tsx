import { buttonVariants } from "@/components/ui/button";
import { Card } from "fumadocs-ui/components/card";
import { Airplay, Lock, MonitorSmartphone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import stardustHome from "@/app/_images/home.png";
import stardustView from "@/app/_images/view.png";
export default function HomePage() {
	return (
		<main className="h-full mt-8">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
				<div className="space-y-8 flex gap-2">
					<div className="flex flex-col gap-4">
						<h1 className="text-6xl font-extrabold tracking-tight leading-tight">
							Stream containers
							<br />
							anywhere, anytime.
						</h1>
						<p className="text-xl text-fd-muted-foreground max-w-3xl">
							A container streaming platform that allows you to run your applications seamlessly across any device.
							Built for developers who want powerful deployment without complexity.
						</p>
						<div className="flex gap-2">
							<Link href="/docs/install" className={buttonVariants({ variant: "default" })}>
								Get Started
							</Link>
							<Link href="/docs" type="button" className={buttonVariants({ variant: "outline" })}>
								View Docs
							</Link>
						</div>
					</div>
					<div className="relative px-2 size-1/2">
						<Image
							src={stardustHome}
							alt="Stardust workspaces dashboard screenshot"
							className="border border-fd-primary/60 duration-300 hover:border-fd-primary rounded-md object-scale-down"
						/>
						<Image
							src={stardustView}
							alt="Stardust session screenshot"
							className="border border-fd-primary/60 duration-300 hover:border-fd-primary rounded-md absolute top-20 left-20 object-scale-down"
						/>
					</div>
				</div>
			</div>

			{/* Feature Section */}
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
					{[
						{
							title: "Cross-Platform",
							description: "Access your workspaces from any device with a web browser.",
							Icon: MonitorSmartphone,
						},
						{
							title: "Real-time Streaming",
							description: "Experience low-latency container streaming with optimized performance.",
							Icon: Airplay,
						},
						{
							title: "Secure & Isolated",
							description: "Run your applications in isolated and secure containers.",
							Icon: Lock,
						},
					].map((feature) => (
						<Card
							key={feature.title}
							title={feature.title}
							description={feature.description}
							icon={<feature.Icon className="size-6" />}
						/>
					))}
				</div>
			</div>
		</main>
	);
}
