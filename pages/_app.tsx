import "tailwindcss/tailwind.css";
import Head from "next/head";
import { AppProps } from 'next/app';
import { DarkThemeWrapper } from '../components/DarkTheme';
import { StrictMode } from "react";

import { Navbar } from "../components/Nav";
// https://nextjs.org/docs/advanced-features/custom-app

const routes = {"/":"Home","/nextjs":"Smth Else","/robots.txt":"Robots only","/sitemap.xml":"some XML"} as const;
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
				<Navbar routes = {routes}/>
				<Component {...pageProps} />
			</DarkThemeWrapper>
		</StrictMode>
	);
}

export default App;