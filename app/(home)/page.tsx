import { buttonVariants } from "@/components/ui/button";
import { Card } from "fumadocs-ui/components/card";
import { Airplay, Lock, MonitorSmartphone } from "lucide-react";
import Link from "next/link";
import { ScreenshotComposite } from "./components";
export default function HomePage() {
	return (
		<main className="h-full">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
				<div className="space-y-8 flex flex-col lg:flex-row gap-8">
					<div className="flex flex-col gap-4">
						<h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
							Stream containers
							<br />
							anywhere, anytime.
						</h1>
						<p className="text-lg sm:text-xl text-fd-muted-foreground max-w-3xl">
							A container streaming platform that allows you to run applications in isolated containers from anywhere.
							Built with performance and security in mind.
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
					<div className="relative size-full">
						<ScreenshotComposite />
					</div>
				</div>
			</div>
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
