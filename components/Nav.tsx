import "tailwindcss/tailwind.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from 'react';

import { Orientation,ScrollHint } from "./SVGoodies";

/** disabled:{class} can be used in className to customize */
export function NavItem({route,className,children}:{route:string,className?:string,children:ReactNode}){
	const router = useRouter();
	const currentRoute = router.pathname;
	return (
		<Link href={route}>
			<button className={`flex-shrink-0 flex-grow text-current hover:text-blue-400 focus:outline-none focus:text-opacity-50 disabled:text-gray-400 disabled:cursor-not-allowed ${className}`} disabled={currentRoute==route}>{children}</button>
		</Link>
	);
}

//TODO fully generalize the navbar. Implement the navbar context provider for in page hiding of navbar, recustomization by page etc
const navStyle = "w-32";
export default function Navbar({routes,barClass,itemClass}:{routes:Record<string,string>,barClass?:string,itemClass?:string}){
	return (
		<nav className={`absolute flex h-16 top-0 inset-x-0 bg-opacity-80 bg-black text-white ${barClass}`}>
			<span className={`relative h-14 w-14 m-1 flex-none`}><Image src="/favicon/original-icon.png" layout="fill"/></span>
			<span className={`inline-flex flex-row w-full lg:w-3/5 divide-x-2 my-2 overflow-x-auto`}>
				{Object.entries(routes).map(([route,text],i) => <NavItem route={route} className={`${navStyle} ${itemClass}`} key={i}>{text}</NavItem>)}
			</span>
			<span className={`absolute right-0 inset-y-0 w-16 sm:hidden`}><ScrollHint direction={Orientation.left}/></span>
		</nav>
	)
}