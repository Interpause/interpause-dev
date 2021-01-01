import { GlobalStyles } from 'twin.macro';
import Head from "next/head";
import { AppProps } from 'next/app';
import { Navbar } from "../components/layout";

// https://nextjs.org/docs/advanced-features/custom-app

const routes = {"/":"Home","/nextjs":"Smth Else","/robots.txt":"Robots only","/sitemap.xml":"some XML"} as const;
function App({ Component, pageProps }:AppProps) {
	return (<>
		<Head>			
			<meta name="robots" content="index, follow"/>
			<meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
			<meta name="language" content="English"/>
			<meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0"/>

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
		<GlobalStyles/>
		<Navbar routes = {routes}/>
		<Component {...pageProps} />
	</>);
}

export default App;