import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";
// edging
export const runtime = "edge";

export async function GET(request: NextRequest) {
	const title = request.nextUrl.searchParams.get("title");
	const description = request.nextUrl.searchParams.get("description");
	const inter = fetch(new URL("./inter.woff", import.meta.url)).then((res) => res.arrayBuffer());
	return new ImageResponse(
		<div
			tw="h-full w-full flex flex-row justify-center items-center"
			style={{ backgroundColor: "#11111b", color: "#cdd6f4" }}
		>
			<section tw="flex flex-col justify-center items-center">
				<img
					width="128"
					height="128"
					alt=""
					tw="rounded-md border-[#cba6f7]"
					// if it works it works
					src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNjYmE2ZjciIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1zcGFya2xlcyI+PHBhdGggZD0iTTkuOTM3IDE1LjVBMiAyIDAgMCAwIDguNSAxNC4wNjNsLTYuMTM1LTEuNTgyYS41LjUgMCAwIDEgMC0uOTYyTDguNSA5LjkzNkEyIDIgMCAwIDAgOS45MzcgOC41bDEuNTgyLTYuMTM1YS41LjUgMCAwIDEgLjk2MyAwTDE0LjA2MyA4LjVBMiAyIDAgMCAwIDE1LjUgOS45MzdsNi4xMzUgMS41ODFhLjUuNSAwIDAgMSAwIC45NjRMMTUuNSAxNC4wNjNhMiAyIDAgMCAwLTEuNDM3IDEuNDM3bC0xLjU4MiA2LjEzNWEuNS41IDAgMCAxLS45NjMgMHoiLz48cGF0aCBkPSJNMjAgM3Y0Ii8+PHBhdGggZD0iTTIyIDVoLTQiLz48cGF0aCBkPSJNNCAxN3YyIi8+PHBhdGggZD0iTTUgMThIMyIvPjwvc3ZnPg=="
				/>
				<p tw="text-4xl">Stardust</p>
			</section>
			<div tw="border-[#313244] h-[50%] border-r border-2 mx-8" />

			<section tw="flex flex-col justify-center items-center">
				<h1 tw="text-6xl font-bold text-[#cba6f7]">{title}</h1>
				<p tw="text-2xl">{description}</p>
			</section>
		</div>,
		{
			width: 1200,
			height: 630,
			fonts: [{ name: "Inter", data: await inter, weight: 300 }],
		},
	);
}
