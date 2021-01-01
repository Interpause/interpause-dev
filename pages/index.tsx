import tw, { css, styled } from "twin.macro";
import Head from "next/head";
import Link from 'next/link';

import { CardData, CardFlex } from "../components/layout";
import { DarkThemeWrapper, DarkToggle } from "../components/theme";
import { Orientation, IsogridBackground, ScrollHint, RainbowText, Icon } from "../components/deco";
import { hideMobileLandscape } from "../components/utils";

import { useState } from "react";
import { Toggle } from "../components/input";
function UpdatePropagationTest(){
	const [test,setTest] = useState(false);
	return <>
		<RainbowText tw="inline h-8 lg:h-12 align-top m-0 p-0 font-mono" css={test&&tw`font-extrabold`}>Hyphen Interpause</RainbowText>
		<Toggle toggleHook={[test,setTest]} label="Update Test"/>
	</>;
}

//<RainbowText tw="inline h-6 lg:h-12 mb-0.5 lg:mb-1.5 font-mono font-extrabold">Hyphen Interpause</RainbowText>
function Banner(){
	return <>
		<div tw="h-screen w-full -z-25"><IsogridBackground rows={6} cols={6} gap_ratio={0.025}/></div>
		<header tw="absolute flex flex-col top-1/4 inset-x-2 p-1 lg:(top-auto right-auto bottom-1/4 ml-5) rounded-lg bg-white dark:bg-black bg-opacity-70!" css={css`backdrop-filter: blur(0.25rem)`}>
			<h1 tw="text-5xl rounded px-1 lg:(text-9xl)"><b>J</b>ohn-<b>H</b>enry <b>L</b>im</h1>
			<span tw="text-2xl lg:text-5xl">
				<span tw="hidden lg:inline">aka </span>
				<span tw="whitespace-nowrap">
					<Icon src="/profilePic.svg" tw="h-4 w-4 lg:(h-8 w-8) align-baseline m-0" priority/>{' '}
					<UpdatePropagationTest/>
				</span>
			</span>
			<h3 tw="text-2xl rounded px-1 lg:(text-5xl)">TODO: non-cringy tagline</h3>
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
	return <section tw="text-center min-h-screen border-t-8 border-theme">
		<h3 tw="text-5xl py-4 font-bold font-comic overflow-hidden">UNDER CONSTRUCTION</h3>
		<DarkToggle/>
		<CardFlex cards={cards} tw="font-mono inset-x-0 m-auto"/>
	</section>;
}

function Footer(){
	return <DarkThemeWrapper darkDefault={true}>
		<footer tw="absolute w-full border-t-2 border-normal-hard bg-normal-soft">
			<DarkToggle tw="absolute right-1 top-1"/>
			<p tw="text-lg text-center pt-8 sm:pt-1">TODO: footer{' '}
				<Link href="/nextjs">
					<a tw="no-underline text-center text-link-color cursor-pointer hover:underline">Original nextjs template page remade to use tailwindCSS</a>
				</Link>
			</p>
			<p tw="text-sm text-center text-trivial py-1">© {new Date().getFullYear()} Interpause</p>
		</footer>
	</DarkThemeWrapper>;
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