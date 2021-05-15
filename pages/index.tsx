import tw, { css } from "twin.macro";
import Head from "next/head";

import { CardData, CardFlex } from "../components/Card";
import { Orientation, IsogridBackground, ScrollHint, RainbowText, Icon } from "../components/deco";
import { hideMobileLandscape, hideMobilePotrait } from "../components/utils";
import { Toggle } from "../components/input";
import { SocialsBar } from "../src/SocialsBar";
import { SkillList } from "../src/SkillList";
import { Footer } from "../src/Footer";
import { Timeline } from "../src/Timeline";
import { Summary } from "./about";
import { useState } from "react";

function Banner(){
	const d = new Date();
	return <>
		<div tw="h-screen w-full -z-25"><IsogridBackground rows={6} cols={6} gap_ratio={0.03} rand_seed={d.getFullYear()*(d.getDate()+Math.PI)*(d.getMonth()+Math.PI)*(d.getMinutes()+Math.PI)}/></div>
		<header tw="absolute text-center top-20 inset-x-1.5 p-2 lg:(top-auto right-auto bottom-48 ml-5 text-left) rounded-lg bg-opacity-70" css={css`background-color: rgba(var(--bg-color),var(--tw-bg-opacity)); backdrop-filter: blur(0.4rem)`}>
			<h1 tw="text-5xl lg:(text-9xl) font-thin">John-Henry Lim</h1>
			<div tw="text-2xl lg:(text-5xl)">
				<span tw="hidden lg:inline">aka </span>
				<span tw="whitespace-nowrap">
					<Icon src="/profilePic.svg" tw="h-4 w-4 lg:(h-8 w-8) align-baseline m-0"/>{' '}
					<RainbowText tw="inline h-6 lg:h-12 mb-0.5 lg:mb-1.5 font-mono font-extrabold">Hyphen Interpause</RainbowText>
				</span>
			</div>
			<h2 tw="text-lg lg:(text-4xl)">Jack of all trades cause I procrastinate</h2>
			<SkillList tw="md:hidden lg:block" css={hideMobileLandscape}/>
			<SocialsBar tw="mx-auto lg:(mx-0) text-special"/> {/* No idea what colour this should be. Give up. */}
		</header>
		<ScrollHint orientation={Orientation.up} tw="absolute bottom-2 mx-auto inset-x-0 h-20 text-white pointer-events-none" css={hideMobileLandscape}/>
		<h4 tw="absolute -bottom-10 right-2 text-lg bg-normal-soft rounded p-1"><a tw="hocus:text-link-color" href="https://github.com/Interpause/interpause-dev/blob/main/components/deco/IsogridBackground.tsx">How is this background generated?</a></h4>
	</>;
}

const cards:CardData[] = [
	{
		href:"https://github.com/Interpause/interpause-dev",
		title:"Source Code",
		body:"See the code for this site.",
	},
	{
		href:"https://storybook.interpause.dev",
		title:"Component Library",
		body:"The component library I spun off from this site.",
	},
	{
		href:"https://metattt.interpause.dev",
		title:"Phone Game",
		body:"MetaTTT in a browser form.",
	},
	{
		title:"Domain Email",
		body:(<>Email me at <a tw="text-link-color" href="mailto:hyphen@interpause.dev">hyphen@interpause.dev</a></>)
	},
];
function Main(){
	const [test,setTest] = useState(true);
	return <section tw="text-center min-h-screen border-t border-normal-hard" id="main">
		<h2 tw="text-5xl py-4 font-extralight overflow-hidden">Projects</h2>
		<SkillList tw="pl-4 lg:hidden" css={hideMobilePotrait}/>
		<Toggle label="TODO: Featured Only" toggleHook={[test,setTest]}/>
		<CardFlex cards={cards} tw="font-mono font-thin m-auto"/>
	</section>;
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
		<Timeline/>
		<Summary/>
		<Footer/>
	</>;
}