import Head from "next/head";
import "tailwindcss/tailwind.css";

import Counter from "../components/Counter";
import CardFlex, {CardData} from "../components/Card";
import { DarkThemeWrapper, DarkToggle } from "../components/DarkTheme";
import { genBg } from "../components/isogrid";
import { useEffect } from "react";

function Home(){
	let cards:CardData[] = [
		{
			link:"https://nextjs.org/docs",
			title:"Documentation →",
			body:"Find in-depth information about Next.js features and API."
		},
		{
			link:"https://nextjs.org/learn",
			title:"Learn →",
			body:"Learn about Next.js in an interactive course with quizzes!"
		},
		{
			link:"https://github.com/vercel/next.js/tree/master/examples",
			title:"Examples →",
			body:"Discover and deploy boilerplate example Next.js projects."
		},
		{
			link:"https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
			title:"Deploy →",
			body:"Instantly deploy your Next.js site to a public URL with Vercel."
		}
	];
	return (
		<div className={`flex flex-col items-center min-h-screen py-0 px-2`}>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={`flex flex-1 flex-col items-center justify-center py-20 px-0`}>
				<h1 className={`text-6xl text-center m-0`}>
					Welcome to <a className={`text-blue-500 no-underline hover:underline`} href="https://nextjs.org">Next.js!</a>
				</h1>

				<p className={`text-2xl text-center my-4`}>
					Get started by editing{' '}
					<code className={`bg-gray-100 rounded text-xl p-1 font-mono`}>pages/index.js</code>
				</p>
				<CardFlex cards={cards}/>
				
			</main>

			<footer className={`flex justify-center items-center w-full h-8 border-t-2 border-gray-300`}>
				<a
					className={`flex justify-center items-center`}
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					Powered by{' '}
					<img src="/vercel.svg" alt="Vercel Logo" className={`ml-2 h-4`} />
				</a>
			</footer>
		</div>
	)
}

function Index(){
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
			body:"Lorum Ipsum Lolsum."
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

	useEffect(() => {
		let bg = genBg({rows:3,cols:5});
		bg.setAttribute("height","100%");
		bg.setAttribute("width","100%");
		document.querySelector('#banner-img-wrapper')?.appendChild(bg);
		return () => bg.remove();
	})

	return (
		<div>
			<header id="banner" className={`h-screen max-w-screen text-center`}>
				<div id="banner-img-wrapper" className={`absolute flex h-screen w-screen overflow-hidden justify-center -z-10 bg-red-400`}></div>
				<h1 className={`absolute text-5xl bg-white bg-opacity-70 rounded px-1 bottom-64 mx-auto right-0 left-0 md:text-7xl md:bottom-32 md:px-auto md:ml-5 md:m-0 md:right-auto`}>Welcome to Intertopia</h1>
			</header>
			<DarkThemeWrapper darkDefault={true}>
			<div className={`text-center transition-colors bg-white text-black dark:bg-black dark:text-white`}>
				<h1 className={`text-5xl py-4 font-bold`} style={{fontFamily:"Comic Sans MS, Comic Sans, cursive"}}>UNDER CONSTRUCTION</h1>
					<DarkToggle/>
					<div className={`flex justify-center font-mono`}>
						<CardFlex cards={cards}/>
					</div>
				<Counter/>
			</div>
			</DarkThemeWrapper>
			<DarkThemeWrapper>
			<footer className={`border-gray-400 border-t-2 text-center bg-white text-black dark:bg-black dark:text-white`}>
				<h4 className={`text-lg`}>View the React code using{' '}
					<a
						className={`no-underline hover:underline text-blue-400`}
						href="https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi"
					>React's Official Extension!</a>
				</h4>
				<span><DarkToggle/></span>
			</footer>
			</DarkThemeWrapper>
		</div>
	)
}

export {Home};
export default Index;

/*
 * 
 * TODO: make toggle switch and counter even though they are useless.
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