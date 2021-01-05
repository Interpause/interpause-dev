import { HTMLProps } from 'react';
import tw, { css, GlobalStyles } from 'twin.macro';
import { Global } from '@emotion/react';
import Head from "next/head";
import { AppProps } from 'next/app';
import { Navbar, ToastWrapper } from "../components/layout";
import { ICON, Icon } from "../components/deco";
import { baseStyle, themeColor, DarkThemeWrapper } from "../components/theme";

export function SocialsBar(props:HTMLProps<HTMLDivElement>){
	return <div tw="grid grid-cols-4 w-28 lg:(w-36)" css={css`a{ ${tw`hocus:text-link-color`} }`} {...props}>
		<Icon as="a" href="https://github.com/Interpause" icon={ICON.github}/>
		<Icon as="a" href="https://linkedin.com/in/Interpause" icon={ICON.linkedin}/>
		<Icon as="a" href="https://youtube.com/c/Interpause" icon={ICON.youtube}/>
		<Icon as="a" href="https://youtu.be/dQw4w9WgXcQ" icon={ICON.instagram}/>
	</div>;
}

// https://nextjs.org/docs/advanced-features/custom-app

const routes = {"/":"Home","/nextjs":"Smth Else","/robots.txt":"Robots only","/sitemap.xml":"some XML"} as const;
export default function App({ Component, pageProps }:AppProps) {
	return <>
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
			<link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color={themeColor}/>
			<link rel="shortcut icon" href="/favicon/favicon.ico"/>
			<meta name="apple-mobile-web-app-title" content="Interpause.Dev"/>
			<meta name="application-name" content="Interpause.Dev"/>
			<meta name="msapplication-TileColor" content={themeColor}/>
			<meta name="msapplication-config" content="/favicon/browserconfig.xml"/>
			<meta name="theme-color" content={themeColor}/>
		</Head>
		<GlobalStyles/>
		<Global styles={baseStyle}/>
		<DarkThemeWrapper>
			<ToastWrapper>
				<Navbar routes={routes} className="dark"/>
				<Component {...pageProps}/>
			</ToastWrapper>
		</DarkThemeWrapper>
	</>;
}