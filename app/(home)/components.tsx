"use client";
import homeDark from "@/app/_images/home_dark.png";
import homeLight from "@/app/_images/home_light.png";
import viewDark from "@/app/_images/view_dark.png";
import viewLight from "@/app/_images/view_light.png";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";
export function ScreenshotComposite() {
	const { resolvedTheme } = useTheme();
	const [home, setHome] = useState(homeLight);
	const [view, setView] = useState(viewLight);
	useEffect(() => {
		setHome(resolvedTheme === "dark" ? homeDark : homeLight);
		setView(resolvedTheme === "dark" ? viewDark : viewLight);
	}, [resolvedTheme]);
	return (
		<>
			<Image
				src={home}
				alt="Stardust workspaces dashboard screenshot"
				className="border border-fd-primary/60 duration-300 hover:border-fd-primary rounded-md object-scale-down"
			/>
			<Image
				src={view}
				alt="Stardust session screenshot"
				className="border border-fd-primary/60 duration-300 hover:border-fd-primary rounded-md absolute top-20 left-20 object-scale-down"
			/>
		</>
	);
}
