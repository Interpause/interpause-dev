import tw, { css } from "twin.macro";
import Head from "next/head";

import { CardData, CardFlex } from "../components/layout";
import { DarkToggle } from "../components/theme";
import { Orientation, IsogridBackground, ScrollHint, RainbowText, Icon, ICON } from "../components/deco";
import { hideMobileLandscape } from "../components/utils";
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

function Banner(){
	return <>
		<div tw="h-screen w-full -z-25"><IsogridBackground rows={6} cols={6} gap_ratio={0.03}/></div>
		<header tw="absolute text-center top-1/4 inset-x-2 p-1.5 lg:(top-auto right-auto bottom-1/4 ml-5 text-left) rounded-lg bg-white dark:bg-black bg-opacity-70!" css={css`backdrop-filter: blur(0.4rem)`}>
			<h1 tw="text-5xl lg:(text-9xl)"><b>J</b>ohn-<b>H</b>enry <b>L</b>im</h1>
			<div tw="text-2xl lg:(text-5xl)">
				<span tw="hidden lg:inline">aka </span>
				<span tw="whitespace-nowrap">
					<Icon src="/profilePic.svg" tw="h-4 w-4 lg:(h-8 w-8) align-baseline m-0" priority/>{' '}
					<RainbowText tw="inline h-6 lg:h-12 mb-0.5 lg:mb-1.5 font-mono font-extrabold">Hyphen Interpause</RainbowText>
				</span>
			</div>
			<SocialsBar tw="mx-auto lg:(mx-0) text-special"/> {/* No idea what colour this should be. Give up. */}
			<div tw="h-5"></div>
			<h3 tw="text-left text-xl lg:(text-4xl)">Jack of all trades cause I procrastinate</h3>
			<p tw="text-left">TODO competency listings</p>
		</header>
		<ScrollHint orientation={Orientation.up} tw="absolute bottom-2 mx-auto inset-x-0 h-20 text-white" css={hideMobileLandscape}/>
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