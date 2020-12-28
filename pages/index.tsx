import Head from "next/head";
import Link from 'next/link';
import { useMemo } from "react";
import 'twin.macro';

import Counter from "../components/Counter";
import { CardData, CardFlex } from "../components/Card";
import { DarkThemeWrapper, DarkToggle } from "../components/DarkTheme";
import { Orientation, IsogridBackground, ScrollHint } from "../components/Aesthetic";

function Banner(){
	const isogridBg = useMemo(() => <IsogridBackground rows={6} cols={6}/>,[]);

	return (<>
		<header tw="relative h-screen pointer-events-none">
			<div tw="absolute h-full w-full -z-10 bg-yellow-200">{isogridBg}</div>
			<h1 tw="absolute text-5xl bg-white bg-opacity-70 rounded px-1 inset-x-1 bottom-64 md:(bottom-32 right-auto ml-5 text-7xl)">TODO: non-cringy tagline</h1>
		</header>
		<ScrollHint orientation={Orientation.up} tw="absolute bottom-2 mx-auto inset-x-0 h-20 text-white"/> {/* Positioned relative to original viewport rather than header */}
	</>);
}

const cards:CardData[] = [
	{
		link:"https://github.com/Interpause/interpause-dev",
		title:"Repository",
		body:"See the code for this website by clicking on this card."
	},
	{
		link:"https://github.com/Interpause",
		title:"Github",
		body:"Look at my crappy past projects here."
	},
	{
		link:"https://linkedin.com/in/interpause",
		title:"LinkedIn",
		body:"Please do not follow me on LinkedIn."
	},
	{
		title:"Test",
		body:"Email me at interpause@interpause.dev"
	},
	{
		link:"https://youtube.com/c/Interpause",
		title:"Youtube",
		body:"Don't watch my Youtube channel. TODO: add stream scheldule to site."
	},
	{
		title:"Empty Box",
		body:"May contain counter. Eventually."
	}
];
function Main(){
	return (
		<DarkThemeWrapper darkDefault={true}>
			<section tw="text-center min-h-screen transition-colors bg-white dark:(bg-black text-white)">
				<h1 tw="text-5xl py-4 font-bold font-comic overflow-ellipsis overflow-hidden">UNDER CONSTRUCTION</h1>
					<DarkToggle/>
					<CardFlex cards={cards} tw="font-mono inset-x-0 m-auto"/>
				<Counter/>
			</section>
		</DarkThemeWrapper>
	);
}

function Footer(){
	return (
		<DarkThemeWrapper darkDefault={true}>
			<footer tw="absolute w-full border-t-2 transition-colors border-gray-200 bg-gray-50 dark:(border-gray-900 text-white bg-gray-900)">
				<DarkToggle tw="absolute right-1 top-1"/>
				<p tw="text-lg text-center pt-8 sm:pt-1">TODO: footer{' '}
					<Link href="/nextjs">
						<a tw="no-underline text-center text-blue-400 cursor-pointer hover:underline">Original nextjs template page remade to use tailwindCSS</a>
					</Link>
				</p>
				<p tw="text-sm text-center text-gray-500 py-1">© {new Date().getFullYear()} Interpause</p>
			</footer>
		</DarkThemeWrapper>
	);
}

export default function Index(){
	return (<>
		<Head>
			<title>Interpause | Portfolio</title>
			<meta name="description" content="My personal portfolio website."/>
			<meta name="topic" content="portfolio"/>
			<meta name="keywords" content="interpause, developer, maker"/>
		</Head>
		<Banner/>
		<Main/>
		<Footer/>
	</>)
}