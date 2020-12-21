import Head from "next/head";
import "tailwindcss/tailwind.css";

import Counter from "../components/Counter";
import CardFlex, {CardData} from "../components/Card";
import { DarkThemeWrapper, DarkToggle } from "../components/DarkTheme";
import { genBg } from "../components/isogrid";
import { useEffect } from "react";



export default function Index(){
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
		let bg = genBg({rows:6,cols:6});
		bg.setAttribute("height","100%");
		bg.setAttribute("width","100%");
		document.querySelector('#banner-img-wrapper')?.appendChild(bg);
		return () => bg.remove();
	})

	//TODO componentize banner and footer. Add animated arrow thingy telling you to scroll down. 
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