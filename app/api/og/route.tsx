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
			tw="h-full w-full flex items-center justify-center text-[#e4e4e7] flex-col"
			style={{
				backgroundImage: "linear-gradient(to bottom right, #11111b, #1e1e2e)",
			}}
		>
			{/* eslint-disable-next-line @next/next/no-img-element */}
			<img
				width="192"
				height="192"
				tw="mb-8"
				alt=""
				src={
					"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNjZGQ2ZjQiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1zcGFya2xlcyI+PHBhdGggZD0ibTEyIDMtMS45MTIgNS44MTNhMiAyIDAgMCAxLTEuMjc1IDEuMjc1TDMgMTJsNS44MTMgMS45MTJhMiAyIDAgMCAxIDEuMjc1IDEuMjc1TDEyIDIxbDEuOTEyLTUuODEzYTIgMiAwIDAgMSAxLjI3NS0xLjI3NUwyMSAxMmwtNS44MTMtMS45MTJhMiAyIDAgMCAxLTEuMjc1LTEuMjc1TDEyIDNaIi8+PHBhdGggZD0iTTUgM3Y0Ii8+PHBhdGggZD0iTTE5IDE3djQiLz48cGF0aCBkPSJNMyA1aDQiLz48cGF0aCBkPSJNMTcgMTloNCIvPjwvc3ZnPg=="
				}
			/>
			<p tw="text-4xl text-[#cba6f7]">{title}</p>
			<p tw="text-2xl text-[#cdd6f4]">{description}</p>
		</div>,
		{
			width: 1200,
			height: 630,
			fonts: [{ name: "Inter", data: await inter, weight: 300 }],
		},
	);
}
