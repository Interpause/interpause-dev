import "tailwindcss/tailwind.css";
import Head from "next/head";
import Link from 'next/link';
import { useMemo } from "react";

import Counter from "../components/Counter";
import CardFlex, {CardData} from "../components/Card";
import { DarkThemeWrapper, DarkToggle } from "../components/DarkTheme";
import { Orientation, IsogridBackground, ScrollHint } from "../components/SVGoodies";

function Banner(){
	const isogridBg = useMemo(() => <IsogridBackground rows={6} cols={6}/>,[]);

	return (<>
	<header className={`relative h-screen pointer-events-none`}>
		<div className={`absolute h-full w-full -z-10 bg-yellow-200`}>{isogridBg}</div>
		<h1 className={`absolute text-5xl md:text-7xl bg-white bg-opacity-70 rounded px-1 inset-x-1 md:right-auto bottom-64 md:bottom-32 md:ml-5`}>TODO: non-cringy tagline</h1>
	</header>
	<div className={`absolute bottom-2 mx-auto inset-x-0 h-20 text-white`}><ScrollHint direction={Orientation.up}/></div> {/* Positioned relative to original viewport rather than header */}
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

/* MAIN PAGE DESIGN
 * <Banner>
 * John-Henry Lim
 * aka Hyphen Interpause <logo>
 * <social media icons>
 * 
 * Maker of all trades cause I like procrastinating
 * Web: NextJs, React, React-Redux, GraphQL, Typescript //hide those you dont know yet damnit
 * IoT: Microbit, ... //needs icons
 * Cybersec: ...
 * ...
 * (Links to examples of me learning above languages/frameworks)
 * 
 * Click to see code generating this background!
 * 
 * <End Banner>
 * <Section>
 * Projects: Featured Only <toggle>
 * Github card <stars, forks, watches> (active OR done)
 * short desc //default extracted from readme but can rewrite
 * Preview Readme //default, opens readme in modal
 * OR See More //links to page where I elaborate on the experience
 * <End Section>
 * Who I am
 * <potrait or picture slideshow> <some paragraph spam> See more
 * //see more links to page with like My Vision, My Passion, My Skills, some cringy headers with elab + shortcut at top ofc
 */

/* 
 * Who I am, and project elab pages could be hosted by CMS shared with blog. 
 * ^Argument against having blog as separate project in subdomain
 * 
 */

/*
(Background image gradient) Gradient Color Stops (see if can be used for your text perhaps by making text transparent)
<div class="text-5xl font-extrabold ...">
  <span class="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
    Hello world
  </span>
</div>
^thats how

look at box alignment in general
look at Grid in general and think about rewriting the css flow from scratch

https://nextjs.org/docs/api-reference/next/amp
^maybe look at? or nah

Nextjs has some sort of magic that prevents repeat rendering of components even without creating a sort of master page structure that displays the routes
they recommend creating a component that accepts the page itself as children to put those base components like navbar etc
might be possible to wrap it around _app itself? it works. hm for pages that dont want it/custom headers, could do smth use keys, or some sort of provided context to disable

look at graphQL api route example, look at the different CMS examples, finally consider mdx one more time

use vercel CLI to test serverless functions locally

perhaps consider downloading 3rd party components
*/

/*
 * Insert three.js cube animation somewhere for fun. (inserted into LED cube read more page)
 * How to hide browser heading initially on android by default?
 * TODO: can a CMS like Wordpress (what cms) pipe .mdx files to the blog subdomain? MDX sounds damn cool https://mdxjs.com/ TBH: blog subdomain should be separate repo
 * TODO: Visit other .dev sites to get inspiration (much later)
 */

 /*
TODO: Report glitch in typescript linter.

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