import "tailwindcss/tailwind.css";
import Head from "next/head";
import Link from 'next/link';
import { useMemo } from "react";

import Counter from "../components/Counter";
import { CardData, CardFlex } from "../components/Card";
import { DarkThemeWrapper, DarkToggle } from "../components/DarkTheme";
import { Orientation, IsogridBackground, ScrollHint } from "../components/Aesthetic";

function Banner(){
	const isogridBg = useMemo(() => <IsogridBackground rows={6} cols={6}/>,[]);

	return (<>
	<header className={`relative h-screen pointer-events-none`}>
		<div className={`absolute h-full w-full -z-10 bg-yellow-200`}>{isogridBg}</div>
		<h1 className={`absolute text-5xl md:text-7xl bg-white bg-opacity-70 rounded px-1 inset-x-1 md:right-auto bottom-64 md:bottom-32 md:ml-5`}>TODO: non-cringy tagline</h1>
	</header>
	<div className={`absolute bottom-2 mx-auto inset-x-0 h-20 text-white`}><ScrollHint orientation={Orientation.up}/></div> {/* Positioned relative to original viewport rather than header */}
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
			<section className={`text-center min-h-screen transition-colors bg-white text-black dark:bg-black dark:text-white`}>
				<h1 className={`text-5xl py-4 font-bold font-comic`}>UNDER CONSTRUCTION</h1>
					<DarkToggle/>
					<div className={`flex justify-center font-mono`}>
						<CardFlex cards={cards}/>
					</div>
				<Counter/>
			</section>
		</DarkThemeWrapper>
	);
}

function Footer(){
	return (
		<DarkThemeWrapper darkDefault={true}>
			<footer className={`absolute w-full border-t-2 transition-colors border-gray-200 bg-gray-50 text-black dark:border-gray-900 dark:bg-gray-900 dark:text-white`}>
				<span className={`absolute right-1 top-1`}><DarkToggle/></span>
				<p className={`text-lg text-center pt-8 sm:pt-1`}>TODO: footer{' '}
					<Link href="/nextjs">
						<a
							className={`no-underline hover:underline text-center text-blue-400`}
						>Original nextjs template page remade to use tailwindCSS</a>
					</Link>
				</p>
				<p className={`text-sm text-center text-gray-500 py-1`}>© {new Date().getFullYear()} Interpause</p>
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