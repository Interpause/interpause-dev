import { HTMLProps } from "react";
import tw, { css } from "twin.macro";
import Head from "next/head";

import { CardData, CardFlex } from "../components/Card";
import { useToaster } from "../components/Toast";
import { DarkToggle } from "../components/theme";
import { Orientation, IsogridBackground, ScrollHint, RainbowText, Icon, ICON } from "../components/deco";
import { hideMobileLandscape, hideMobilePotrait } from "../components/utils";
import { SocialsBar } from "./_app";

/*
import { useState } from "react";
import { Toggle } from "../components/input";
function UpdatePropagationTest(){
	const [test,setTest] = useState(false);
	return <>
		<RainbowText tw="inline h-8 lg:h-12 align-top m-0 p-0 font-mono" css={test&&tw`font-extrabold`}>Hyphen Interpause</RainbowText>
		<Toggle toggleHook={[test,setTest]} label="Update Test"/>
	</>;
}
*/
function IntextImage(props:any){
	return <a href={props.href}><img tw="inline h-full align-bottom" loading="lazy" {...props}/></a>;
}
function Boasting(props:HTMLProps<HTMLElement>){
	const toast = useToaster();
	return <section tw="text-left text-lg lg:text-3xl my-2 lg:my-4" {...props}>
		<h2 tw="text-lg lg:(text-4xl)">Stuff I've used previously <br tw="lg:hidden"/>(+links to those projects): </h2>
		<ul css={css`
			li{ ${tw`h-6 lg:h-10 my-2`} }
			h3{ ${tw`inline-block w-20 lg:w-36`} }
			span{ ${tw`h-full`} }
		`}>
			<li>
				<h3>Web Dev: </h3>
				<span>
					<IntextImage tw="-mx-2" src="/brand_logos/react.svg" alt="React" href="https://github.com/Interpause/interpause-dev"/>,{' '}
					<IntextImage tw="bg-white rounded px-0.5" src="/brand_logos/nextjs.svg" alt="Nextjs" href="https://github.com/Interpause/interpause-dev"/>,{' '}
					<IntextImage tw="bg-white rounded p-0.5" src="/brand_logos/flask.svg" alt="Flask" href="https://github.com/Interpause/trailblazers_burden_brothers"/>,{' '}
					<IntextImage tw="bg-white rounded p-0.5" src="/brand_logos/cordova.svg" alt="Cordova" href="https://github.com/Interpause/metaTTT_App"/>
				</span>
			</li>
			<li>
				<h3>AI: </h3>
				<span>
					<IntextImage src="/brand_logos/pytorch.svg" alt="Pytorch" href="https://github.com/RealNiceBoat"/>,{' '}
					<IntextImage tw="bg-white rounded" src="/brand_logos/pandas.svg" alt="Pandas" onClick={()=>toast('Turns out I never did a project with Pandas as the main focus. Of course. Turns out I never did a project with Pandas as the main focus. Of course.',{type:"trivial"})}/>,{' '}
					<IntextImage tw="bg-white rounded p-0.5" src="/brand_logos/sklearn.svg" alt="SKLearn" onClick={()=>toast(`Sorry, I haven't uploaded the RSI code yet`,{type:"risky"})}/>,{' '}
					NLTK
				</span>
			</li>
			<li>
				<h3>CTF: </h3>
				<span>
					<IntextImage src="/brand_logos/ghidra.png" alt="Ghidra" onClick={()=>toast(`See Hidden TODO`,{type:"special"})}/>,{' '}
					<IntextImage tw="bg-white rounded p-0.5" src="/brand_logos/zap.svg" alt="ZAP Suite" onClick={()=>toast(`See Hidden TODO`,{type:"special"})}/>
					<span tw="hidden lg:inline-block text-trivial text-xs w-60 overflow-hidden">TODO: Consolidate knowledge from StackTheFlags and Whitehacks into writeups</span>
				</span>
			</li>
			<li>
				<h3>Robotics: </h3>
				<span>
					<IntextImage src="/brand_logos/microbit.png" alt="microbit" href="https://github.com/Interpause/pxt-esp8266iot"/>,{' '}
					<IntextImage src="/brand_logos/robocup.png" alt="Robocup" onClick={()=>toast(`Will link this to a writeup, or delete.`,{type:"info"})}/>
				</span>
			</li>
		</ul>
		<h2 tw="text-sm lg:(text-lg)">TODO in retrospect this is extremely boastful.</h2>
	</section>;
}

function Banner(){
	return <>
		<div tw="h-screen w-full -z-25"><IsogridBackground rows={6} cols={6} gap_ratio={0.03}/></div>
		<header tw="absolute text-center top-20 inset-x-1.5 p-2 lg:(top-auto right-auto bottom-48 ml-5 text-left) rounded-lg bg-white dark:bg-black bg-opacity-70!" css={css`backdrop-filter: blur(0.4rem)`}>
			<h1 tw="text-5xl lg:(text-9xl)"><b>J</b>ohn-<b>H</b>enry <b>L</b>im</h1>
			<div tw="text-2xl lg:(text-5xl)">
				<span tw="hidden lg:inline">aka </span>
				<span tw="whitespace-nowrap">
					<Icon src="/profilePic.svg" tw="h-4 w-4 lg:(h-8 w-8) align-baseline m-0"/>{' '}
					<RainbowText tw="inline h-6 lg:h-12 mb-0.5 lg:mb-1.5 font-mono font-extrabold">Hyphen Interpause</RainbowText>
				</span>
			</div>
			<h2 tw="text-lg lg:(text-4xl)">Jack of all trades cause I procrastinate</h2>
			<Boasting tw="md:hidden lg:block" css={hideMobileLandscape}/>
			<SocialsBar tw="mx-auto lg:(mx-0) text-special"/> {/* No idea what colour this should be. Give up. */}
		</header>
		<ScrollHint orientation={Orientation.up} tw="absolute bottom-2 mx-auto inset-x-0 h-20 text-white pointer-events-none" css={hideMobileLandscape}/>
	</>;
}

const cards:CardData[] = [
	{
		href:"https://github.com/Interpause/interpause-dev",
		title:"Repository",
		body:"See the code for this website by clicking on this card."
	},
	{
		href:"https://github.com/Interpause",
		title:"Github",
		body:"Look at my crappy past projects here."
	},
	{
		href:"https://linkedin.com/in/interpause",
		title:"LinkedIn",
		body:"Please do not follow me on LinkedIn."
	},
	{
		title:"Test",
		body:(<>Email me at <a tw="text-link-color" href="mailto:hyphen@interpause.dev">hyphen@interpause.dev</a></>)
	},
	{
		href:"https://youtube.com/c/Interpause",
		title:"Youtube",
		body:"Don't watch my Youtube channel. TODO: add stream scheldule to site."
	},
	{
		title:"Empty Box",
		body:"May contain counter. Eventually."
	}
];
function Main(){
	return <section tw="text-center min-h-screen border-t border-normal-hard">
		<h3 tw="text-5xl py-4 font-bold font-comic overflow-hidden">UNDER CONSTRUCTION</h3>
		<Boasting tw="pl-4 lg:hidden" css={hideMobilePotrait}/>
		<DarkToggle/>
		<CardFlex cards={cards} tw="font-mono m-auto"/>
	</section>;
}

function Footer(){
	return <footer tw="absolute flex flex-col justify-end w-full h-32 lg:h-20 border-t border-normal-hard bg-normal-soft">
		<DarkToggle height={1.2} tw="absolute right-1 top-1"/>
		<SocialsBar tw="mx-auto mt-2 text-trivial"/>
		<p tw="text-sm text-center text-trivial mb-2">© {new Date().getFullYear()} Interpause</p>
		<Icon as="button"
			onClick={() => document.documentElement.scrollTo({top:0,behavior:"smooth"})}
			icon={ICON.arrow}
			tw="absolute lg:hidden top-1 left-1 text-normal opacity-30 hover:opacity-100 h-10 w-10"
			label="Scroll to top"
			labelStyle={css`${tw`absolute text-left text-sm left-full top-0 transition-opacity w-16 pl-1`}`}
		/>
	</footer>;
}

export default function Index(){
	return <>
		<Head>
			<title>Interpause | Portfolio</title>
			<meta name="description" content="My personal portfolio website."/>
			<meta name="topic" content="portfolio"/>
			<meta name="keywords" content="interpause, developer, maker"/>
		</Head>
		<Banner/>
		<Main/>
		<Footer/>
	</>;
}