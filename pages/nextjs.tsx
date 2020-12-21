import Head from "next/head";
import CardFlex, {CardData} from "../components/Card";

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
				<CardFlex cards={cards}/>
				
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