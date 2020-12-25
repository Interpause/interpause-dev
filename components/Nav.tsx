import "tailwindcss/tailwind.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from 'react';

import { Orientation, ScrollHint } from "./Aesthetic";

/** disabled:{class} can be used in className to customize */
export function NavLink({route,className,children}:{route:string,className?:string,children:ReactNode}){
	const router = useRouter();
	const currentRoute = router.pathname;
	return (
		<Link href={route}>
			<a className={`flex flex-col justify-center flex-shrink-0 flex-grow ${className??""}`}>
				<button 
					className={`${className??""} w-auto focus:outline-none text-current hover:text-blue-400 focus:text-opacity-50 disabled:text-gray-400 disabled:cursor-not-allowed`}
					disabled={currentRoute==route}
				>
					{children}
				</button>
			</a>
		</Link>
	);
}


//<span className={`relative h-14 w-14 m-1 flex-none`}><Image src="/favicon/original-icon.png" layout="fill"/></span>
//TODO fully generalize the navbar. Implement the navbar context provider for in page hiding of navbar, recustomization by page etc
const navStyle = "w-32";
export function Navbar({routes,barClass,itemClass}:{routes:Record<string,string>,barClass?:string,itemClass?:string}){
	return (
		<nav className={`absolute flex h-16 top-0 inset-x-0 bg-opacity-80 bg-black text-white ${barClass??""}`}>
			<Image src="/favicon/original-icon.png" layout="responsive" height={1} width={1} className={`relative h-14 w-14 m-1 flex-none`}/>
			<span className={`inline-flex flex-row w-full lg:w-3/5 divide-x-2 my-2 overflow-x-auto`}>
				{Object.entries(routes).map(([route,text],i) => <NavLink route={route} className={`${navStyle} ${itemClass??""}`} key={i}>{text}</NavLink>)}
			</span>
			<span className={`absolute right-0 inset-y-0 w-16 sm:hidden`}><ScrollHint direction={Orientation.left}/></span>
		</nav>
	)
}