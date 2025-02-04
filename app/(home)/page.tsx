import landing from "@/app/_images/landing.gif";
import Image from "next/image";
export default function HomePage() {
	return (
		<main className="flex h-full flex-col items-center text-center gap-4 mt-8">
			<div className="text-2xl font-semibold">Stardust, the container streaming platform</div>
			<div className="text-muted-foreground">
				Stardust is a container streaming platform that allows you to stream your containers to any device, anywhere.
			</div>
			<Image src={landing} alt="Stardust" className="justify-self-center w-[80rem] h-[50rem] rounded-lg p-4" />
		</main>
	);
}
