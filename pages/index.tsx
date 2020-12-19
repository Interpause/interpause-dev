import Head from "next/head";
import "tailwindcss/tailwind.css";

import Counter from "../components/Counter";
import Grid, {CardData} from "../components/Grid";
import DarkToggle from "../components/DarkToggle";

function Home(){
	let cards:CardData[] = [
		{
			link:"https://nextjs.org/docs",
			title:"Documentation →",
			body:"Find in-depth information about Next.js features and API."
		},
		{
			link:"https://nextjs.org/learn",
			title:"Learn →",
			body:"Learn about Next.js in an interactive course with quizzes!"
		},
		{
			link:"https://github.com/vercel/next.js/tree/master/examples",
			title:"Examples →",
			body:"Discover and deploy boilerplate example Next.js projects."
		},
		{
			link:"https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
			title:"Deploy →",
			body:"Instantly deploy your Next.js site to a public URL with Vercel."
		}
	];
	return (
		<div className={`flex flex-col items-center min-h-screen py-0 px-2`}>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={`flex flex-1 flex-col items-center justify-center py-20 px-0`}>
				<h1 className={`text-6xl text-center m-0`}>
					Welcome to <a className={`text-blue-500 no-underline hover:underline`} href="https://nextjs.org">Next.js!</a>
				</h1>

				<p className={`text-2xl text-center my-4`}>
					Get started by editing{' '}
					<code className={`bg-gray-100 rounded text-xl p-1 font-mono`}>pages/index.js</code>
				</p>
				<Grid cards={cards}/>
				
			</main>

			<footer className={`flex justify-center items-center w-full h-8 border-t-2 border-gray-300`}>
				<a
					className={`flex justify-center items-center`}
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					Powered by{' '}
					<img src="/vercel.svg" alt="Vercel Logo" className={`ml-2 h-4`} />
				</a>
			</footer>
		</div>
	)
}

function Index(){
	let cards:CardData[] = [
		{
			link:"https://github.com/Interpause/interpause-dev",
			title:"Repository →",
			body:"See the code for this website by clicking on this card."
		},
		{
			link:"https://github.com/Interpause",
			title:"Github →",
			body:"Look at my crappy past projects here."
		},
		{
			link:"https://linkedin.com/in/interpause",
			title:"LinkedIn →",
			body:"Please do not follow me on LinkedIn."
		},
		{
			link:"https://youtube.com/c/Interpause",
			title:"Youtube →",
			body:"Don't watch my Youtube channel. TODO: add stream scheldule to site."
		}
	];
	return (
		<div className={`h-screen w-screen bg-white dark:bg-black text-center text-black dark:text-white transition-colors fixed top-0 left-0`}>
			<h1 className={`text-5xl my-4 font-bold font-serif`}>UNDER CONSTRUCTION</h1>
			<div className={`flex justify-center`}>
				<Grid cards={cards}/>
			</div>
			<Counter/>
			<DarkToggle/>
		</div>
	)
}

export {Home, Grid};
export default Index;