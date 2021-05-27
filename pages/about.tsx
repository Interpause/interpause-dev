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
		<div tw="col-span-8 text-left text-lg mx-2 max-w-prose">
			<h2 tw="text-center text-3xl">A temporary collection of thoughts</h2>
			<p>
				What is the purpose of this site? I intended to create this as a portfolio site - a place to collate and curate achievements of the past. 
				However, while normally such portfolios should highlight only the most eminent of achievements, in my heart, I also treated this as sort 
				of an autobiography. And while writing this biography, I wanted to reflect upon all I had done, capture every single moment I could recover 
				from memory, so that it would never be forgotten.
			</p>
			<p>
				However, being as proactive as I was, I had done and experienced an insane amount of things for someone as young, making this quite the 
				daunting task to say the least. Then, while watching documentary that mentioned a similar sort of journaling, I was reminded of something. 
				While I was unfortunately not committed enough to ever get into the habit of keeping dairies, back in secondary school, there was a period 
				of time where I was obssessed with recording any "interesting" detail I chanced upon, so that I would never forget them. This ended up 
				consuming me, distracting me, with most of my time during lessons and breaks spent thinking of things, trying to keep them in memory efficiently, 
				before eventually finding time to write them out onto private collections on the now defunct Google Plus.
			</p>
			<p>
				Nonetheless, if I were to try and reconstruct every year of my life, the data from doing the above is helpful, even if quite unrefined. 
				But the years before then are lost, and the years after are lost too, as I only lurk on social media, never having managed to figure out how 
				to maintain a proper online presence.
			</p>
			<p>
				Either ways, before I get too carried away, I decided that it was not so important to record everything. Details can be lost, but they have 
				already played an irrevocable part in making you who you were. So as long as I stay true to myself, perhaps the past is not too important. 
				One of the purposes of this portfolio site was to aid me in University admissions. Well, I did not managed to finish it in time before 
				getting utterly distracted on creating a component library... But now that I have secured a path to the future, it is not really necessary.
			</p>
			<p>
				So perhaps instead of focusing on documenting all the details of a nolstagic past, giving I am still young and the future is bright, I should 
				focus on documenting the most important moments of a bright future. Maybe I am just too lazy to follow my initial plans of making reflection 
				write ups for all my past significant achievements, but I am sure I will go on to do many great new things anyways.
			</p>
			<p>
				So going back to the start, what is the purpose of this site now? Currently, it is an incomplete hub of who I am, with some links to some 
				more recent projects, and many grand plans hidden in code that I don't have time for right now. I will try to shift my focus away from my 
				component library (well after adding more missing core components but being less perfectionist this time), and focus on creating my blog. 
				After all, its not very feasible to be editing a webpage each time I have a thought or something. Also I will probably create a mobile app 
				for it. It might end up like back in secondary school where I document everything, but it will probably go better this time. Anyways, it is 
				easier to type digital documents that are digitally sortable than to write an actual physical diary, though I guess the limitations of paper 
				is what forces you to select what is most important and be concise. But I digress.
			</p>
			<p>
				Anyways, this short few paragraphs will probably serve as the only public evidence of how I feel. Most of it is private, the blog itself, 
				aside from curated writeups, will actually be private too. Maybe if I am lucky someone in the future will teach me how to open up, use 
				social media and have a sociable online presence by which to share my thoughts properly instead of spamming or keeping it to myself.
			</p>
		</div>
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
				What is this site meant to be? A portfolio site. What happened? I got sidetracked into working on a component library for it. 
				What is the site right now? A incomplete hub which has links to my other portfolios (Github, LinkedIn, etc), some of my more 
				recent projects, and many grand plans hidden in the code that I don't have time for right now. What will this site become? It 
				will remain dormant for now, I am shifting focus away from my component library to a competition I am currently preparing for, 
				but after that, if I have time despite serving NS, I will focus on the blog sub-site I have yet to create. I will likely 
				continue work on it after I enter uni, so that I can put my uni portfolio on it just in time for graduation. Anything I did 
				before uni? Unless, I change my mind, they will likely not be recorded here or anywhere else. Click see more to see how I arrived 
				to these conclusions, but it might be cringey to some I guess.
			</p>
			<Link href="/about"><a tw="inline-block text-white hocus:bg-info bg-info-hard py-1 px-4 rounded my-2 cursor-pointer">See more...</a></Link>
		</div>
	</section>
}