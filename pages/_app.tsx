import "tailwindcss/tailwind.css";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { AppProps } from 'next/app';
import { DarkThemeWrapper } from '../components/DarkTheme';
import { ReactNode, StrictMode } from "react";

import { ScrollHint } from "../components/SVGoodies";


// https://nextjs.org/docs/advanced-features/custom-app

//TODO make this a wrapper instead around props.children. Abuse disabled variant to style children.
function Navitem({route,children}:{route:string,children:ReactNode}){
	const router = useRouter();
	const currentRoute = router.pathname;
	return (
		<Link href={route}>
			<button className={`w-32 flex-shrink-0 flex-grow text-white outline-none hover:text-blue-400 disabled:text-white focus:outline-none focus:text-opacity-50 disabled:text-opacity-50 disabled:cursor-not-allowed`} disabled={currentRoute==route}>{children}</button>
		</Link>
	);
}

function Navbar(){
	return (
	<nav className={`absolute flex h-16 top-0 inset-x-0 bg-opacity-80 bg-black`}>
		<span className={`relative h-14 w-14 m-1 flex-none`}><Image src="/favicon/original-icon.png" layout="fill"/></span>
		<span className={`inline-flex flex-row w-full lg:w-3/5 divide-x-2 my-2 overflow-x-auto`}>
			<Navitem route="/">Home</Navitem>
			<Navitem route="/nextjs">Smth Else</Navitem>
			<Navitem route="/robots.txt">robots.txt</Navitem>
			<Navitem route="/sitemap.xml">sitemap</Navitem>
		</span>
		<span className={`absolute right-0 inset-y-0 w-16 text-white sm:hidden`}><ScrollHint direction="left"/></span>
	</nav>
	)
}

function App({ Component, pageProps }:AppProps) {
	/* 
	 * Component here is the currently rendered page. As such, any jsx here would
	 * persist across all the pages. Which is useful. For maybe a Navbar.
	 */
	return (
		<StrictMode>
			<DarkThemeWrapper>
				<Head>			
					<meta name="robots" content="index, follow"/>
					<meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
					<meta name="language" content="English"/>
					<meta name="viewport" content="width=device-width, initial-scale=1.0"/>

					{/* https://realfavicongenerator.net/ */}
					<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"/>
					<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
					<link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
					<link rel="manifest" href="/favicon/site.webmanifest"/>
					<link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#fde68a"/>
					<link rel="shortcut icon" href="/favicon/favicon.ico"/>
					<meta name="apple-mobile-web-app-title" content="Interpause.Dev"/>
					<meta name="application-name" content="Interpause.Dev"/>
					<meta name="msapplication-TileColor" content="#ffc40d"/>
					<meta name="msapplication-config" content="/favicon/browserconfig.xml"/>
					<meta name="theme-color" content="#fde68a"/>
				</Head>
				<Navbar/>
				<Component {...pageProps} />
			</DarkThemeWrapper>
		</StrictMode>
	);
}

export default App;

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
