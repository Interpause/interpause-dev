import { css } from "twin.macro";
import Head from "next/head";
import Link from "next/link";
import { Icon } from "../components/deco";
/**
 * Summary: <potrait or picture slideshow> <some paragraph spam> See more
 * My Vision, My Passion, My Skills, some cringy headers with elab + shortcut at top ofc
 */
export default function About(){
	return <div tw="h-screen text-left">
		<Head>
			<title>Interpause | About Me</title>
			<meta name="description" content="My personal portfolio website."/>
			<meta name="topic" content="portfolio"/>
			<meta name="keywords" content="interpause, developer, maker"/>
		</Head>
		<div tw="h-20"></div>
		<h1 tw="text-4xl">WHERE IS THE PAGE???</h1>
		<h3 tw="text-xl">under construction duh</h3>
		<p>
			TODO:<br/>
			- 1500 word essay<br/>
			- Get someone else to write it for me so it's not considered boasting<br/>
			- Headers be like: Vision, Passion, Skills <br/>
			- remember to put shortcut card on top!
		</p>
	</div>;
}

export function Summary(){
	return <section id="about" tw="md:(inline-grid grid-cols-12 gap-2) py-2">
		<Icon src="/face.jpg" tw="col-span-4 w-full max-w-sm my-auto rounded-full overflow-hidden" css={css`
			&::before {
				content: "";
				display: inline-block;
				width: 1px;
				height: 0;
				padding-bottom: calc(100% / (1/1));
			}
		`}/>
		<div tw="col-span-8 text-left text-lg mx-2 max-w-prose">
			<h2 tw="text-center text-3xl">TODO: sleep earlier than 3am I can feel my last few brain cells dying</h2>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sagittis justo quis magna dapibus sagittis nec non nibh. 
				Etiam maximus arcu quam, et molestie libero pellentesque et. Sed quis magna mauris. Nunc tristique semper quam, 
				a consectetur mauris euismod sit amet. Quisque ultricies nulla odio, nec fringilla lacus pellentesque et. 
				Duis lacus leo, rutrum sagittis scelerisque et, semper eget lorem. Sed ac aliquam leo, et accumsan tortor. 
				Donec sed elit id tortor scelerisque vehicula ac sit amet eros. Aliquam fermentum tincidunt est, 
				vel hendrerit lorem ornare in. Maecenas varius vel tellus at blandit. Etiam est nisl, tristique in maximus a, 
				interdum ut neque. Nullam lectus lectus, luctus non cursus at, facilisis nec sapien. Nunc mollis lacus sed posuere tempor. 
				Nunc laoreet neque sit amet augue feugiat, in lacinia nisl pharetra.
			</p>
			<Link href="/about"><a tw="inline-block text-white hocus:bg-info bg-info-hard py-1 px-4 rounded my-2 cursor-pointer">See more...</a></Link>
		</div>
	</section>
}