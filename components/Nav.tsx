import "tailwindcss/tailwind.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { Orientation, ScrollHint, Icon, ICON } from "./Aesthetic";

export interface NavItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement>{}
export function NavItem({className,children,...props}:NavItemProps){
	return <li className={`relative inline-flex p-1 flex-col flex-shrink-0 flex-grow justify-center text-center w-32 ${className??""}`} {...props}>{children}</li>;
}

export interface NavLinkProps extends NavItemProps{
	route:string;
}
/** grounp-disabled:{class} can be used in className and children to customize */
export function NavLink({route,className,children,...props}:NavLinkProps){
	const router = useRouter();
	const currentRoute = router.pathname;
	const enabled = currentRoute === route;
	return (
		<NavItem className={`hover:text-blue-400 group-disabled:text-gray-400 group-disabled:cursor-not-allowed ${className} ${enabled?"group-disabled":""}`} {...props}>
			{children}
			<Link href={route}><a className={`absolute inset-0 group-disabled:hidden`}></a></Link>
		</NavItem>
	);
}

//<span className={`relative h-14 w-14 m-1 flex-none`}><Image src="/favicon/original-icon.png" layout="fill"/></span>
//TODO Implement the navbar context provider for in page hiding of navbar, recustomization by page etc
export function Navbar({routes,barClass,itemClass}:{routes:Record<string,string>,barClass?:string,itemClass?:string}){
	return (
		<nav className={`absolute flex h-16 top-0 inset-x-0 bg-opacity-80 bg-black text-white ${barClass??""}`}>
			<Icon src="/favicon/original-icon.png" className={`w-14 h-14`}/>
			<ul className={`inline-flex flex-row w-full lg:w-3/5 divide-x-2 my-2 overflow-x-auto`}>
				{Object.entries(routes).map(([route,text],i) => <NavLink route={route} className={`${itemClass??""}`} key={i}>{text}</NavLink>)}
			</ul>
			<span className={`absolute right-0 inset-y-0 w-16 sm:hidden`}><ScrollHint orientation={Orientation.left}/></span>
		</nav>
	)
}