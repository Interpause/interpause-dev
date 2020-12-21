import Head from "next/head";
import { AppProps } from 'next/app';
import { DarkThemeWrapper } from '../components/DarkTheme';

// https://nextjs.org/docs/advanced-features/custom-app

function App({ Component, pageProps }:AppProps) {
	/* Component here is the currently rendered page. As such, any jsx here would
	 * persist across all the pages. Which is useful. For maybe a Navbar.
	 */
	return (
		<DarkThemeWrapper>
			<Head>			
				<meta name="robots" content="index, follow"/>
				<meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
				<meta name="language" content="English"/>
				<meta name="viewport" content="width=device-width, initial-scale=1.0"/>

				<meta name="description" content="My personal portfolio website."/>
				<meta name="topic" content="portfolio"/>
				<meta name="keywords" content="interpause, developer, maker"/>

				{/* https://realfavicongenerator.net/ */}
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
				<link rel="manifest" href="/site.webmanifest"/>
				<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ff5555"/>
				<meta name="apple-mobile-web-app-title" content="Interpause"/>
				<meta name="application-name" content="Interpause"/>
				<meta name="msapplication-TileColor" content="#da532c"/>
				<meta name="theme-color" content="#ff5555"/>
			</Head>
			<Component {...pageProps} />
		</DarkThemeWrapper>
	);
}

export default App;
