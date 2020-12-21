import Head from "next/head";
import "tailwindcss/tailwind.css";

import Counter from "../components/Counter";
import CardFlex, {CardData} from "../components/Card";
import { DarkThemeWrapper, DarkToggle } from "../components/DarkTheme";
import { genBg } from "../components/isogrid";
import { useEffect } from "react";

function DownArrow(){
	//TODO took me a while to write, will generalise next time
	return (
		<svg viewBox="0 0 100 155" xmlns="http://www.w3.org/2000/svg" version="1.1" height="100%" width="100%">
			<g>
				<polyline stroke="currentColor" stroke-width="8" stroke-linecap="butt"  fill="none" 
					points="0,0 50,50 100,0"
				></polyline>
				<polyline stroke="currentColor" stroke-width="8" stroke-linecap="butt"  fill="none" 
					points="0,50 50,100 100,50"
				></polyline>
				<animateTransform
					attributeName="transform"
					type="translate"
					values="0 5 ; 0 50"
					calcMode="spline"
					keyTimes="0 ; 1"
					keySplines="0 0 0.5 1"
					dur="1s"
					repeatCount="indefinite"
				/>
				<animate
					attributeName="opacity"
					values="0; 1 ; 0"
					calcMode="spline"
					keyTimes="0 ; 0.3 ; 1"
					keySplines="0.5 0 0.5 1 ; 0.5 0 0.5 1"
					dur="1s"
					repeatCount="indefinite"
				/>
			</g>
		</svg>
	);
}

function Banner(){
	useEffect(() => {
		let bg = genBg({rows:6,cols:6});
		bg.setAttribute("height","100%");
		bg.setAttribute("width","100%");
		document.querySelector('#banner-img-wrapper')?.appendChild(bg);
		return () => bg.remove();
	});

	return (
	<header id="banner" className={`h-screen max-w-screen text-center`}>
		<div id="banner-img-wrapper" className={`absolute flex h-screen w-full overflow-hidden justify-center -z-10 bg-yellow-200`}></div> {/* h-screen rather than h-full some weird margin issue */}
		<h1 className={`absolute text-5xl bg-white bg-opacity-70 rounded px-1 bottom-64 mx-auto right-0 left-0 md:text-7xl md:bottom-32 md:px-auto md:ml-5 md:m-0 md:right-auto`}>TODO: non-cringy tagline</h1>
		<div className={`absolute mx-auto bottom-0 right-0 left-0 h-20 text-white`}><DownArrow/></div>
	</header>
	);
}

function Main(){
	let cards:CardData[] = [
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

	return (
		<DarkThemeWrapper darkDefault={true}>
			<section className={`text-center min-h-screen transition-colors bg-white text-black dark:bg-black dark:text-white`}>
				<h1 className={`text-5xl py-4 font-bold`} style={{fontFamily:"Comic Sans MS, Comic Sans, cursive"}}>UNDER CONSTRUCTION</h1>
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
		<DarkThemeWrapper>
			<footer className={`absolute w-full border-t-2 transition-colors border-gray-200 bg-gray-50 text-black dark:border-gray-900 dark:bg-gray-900 dark:text-white`}>
				<span className={`absolute right-1 top-1`}><DarkToggle/></span>
				<h4 className={`text-lg text-center pt-8 sm:pt-1`}>TODO: footer{' '}
					<a
						className={`no-underline hover:underline text-center text-blue-400`}
						href="#"
					>link that goes nowhere... so far</a>
				</h4>
				<h6 className={`block text-sm text-center text-gray-500 py-1`}>© {new Date().getFullYear()} Interpause</h6>
			</footer>
		</DarkThemeWrapper>
	);
}

export default function Index(){
	return (
		<div>
			<Head>
				<title>Interpause | Portfolio</title>
				<meta name="description" content="My personal portfolio website."/>
				<meta name="topic" content="portfolio"/>
				<meta name="keywords" content="interpause, developer, maker"/>
			</Head>
			<Banner/>
			<Main/>
			<Footer/>
		</div>
	)
}

/*
 * TODO: can a CMS like Wordpress (what cms) pipe .mdx files to the blog subdomain? MDX sounds damn cool https://mdxjs.com/ TBH: blog subdomain should be separate repo
 * TODO: make counter even though they are useless.
 * TODO: Visit other .dev sites to get inspiration (much later)
 * TODO: make Under construction rainbow and comic sans and marquee
 * TSDocs: https://tsdoc.org/pages/tags/alpha/
 * Recursive Object Destructuring. Yes. THATS SCARY
 * How to properly format extremely long function signatures??? Spam interfaces it is
 * add author info to your components (separate commit)
 * should I create a toggle switch module or smth with many toggle switches perhaps even range sliders
 * https://github.com/typescript-cheatsheets/react/blob/main/README.md#basic-cheatsheet-table-of-contents
 */

 /*
	* TODO: Report glitch in typescript linter.

REPRODUCE:

function mergeStyles(customStyle:ToggleStyle){
	let merged:Record<StateKeys,Record<StyleKeys,string>> = defaultStyle;
	(Object.keys(customStyle) as StyleKeys[]).forEach(k => {
		let v = customStyle[k];
		if(v === "undefined") return;
		console.log(typeof v); //hover to confirm v is not unioned with undefined anymore.
		(Object.keys(merged) as StateKeys[]).forEach(c => {
			merged[c][k] = v; //linter mistakenly errors that v may still be undefined even when confirmed not to be.
		});
	});
	return merged;
}

	*/