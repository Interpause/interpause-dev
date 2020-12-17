import Head from "next/head";
import "tailwindcss/tailwind.css";

/*
interface CardData = {
	link:string;
	title:string;
	body:string;
}
prop:{cards:CardData[]}
*/

export function Grid({cards}:{cards:{link:string,title:string,body:string}[]}){
	return (
		<div className={`flex items-center justify-center flex-wrap sm:max-w-screen-md flex-col sm:flex-row`}>
			{cards.map((card,i) => 
				<a 
					className={`flex-auto w-11/12 sm:w-5/12 m-4 p-6 text-left no-underline text-current border-black border-2 rounded transition-colors hover:text-blue-500 hover:border-blue-500`}
					href={card.link}
					key={i}
				>
					<h3 className={`m-0 mb-4 text-2xl text-blue-500`}>{card.title}</h3>
					<p className={`m-0 text-xl`}>{card.body}</p>
				</a>
			)}
		</div>
	);
}

export function Home(){
	let cards = [
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

export default function Index(){
	return (
		<div className={`h-screen w-screen bg-black text-center text-white fixed top-0 left-0`}>
			<h1 className={`text-5xl my-4 font-bold font-serif`}>UNDER CONSTRUCTION</h1>
			<h3 className={`text-3xl font-mono`}>
				<a className={`m-6`} href="https://github.com/Interpause/interpause-dev">Repository</a>
				<a className={`m-6`} href="https://github.com/Interpause">Github</a>
				<a className={`m-6`} href="https://linkedin.com/in/interpause">LinkedIn</a>
			</h3>
		</div>
	)
}
