/**
 * @file quite a primitive navbar tbh
 * @author John-Henry Lim <hyphen@interpause.dev>
 */
import "tailwindcss/tailwind.css";
import tw from 'twin.macro';
import Link from "next/link";
import { useRouter } from "next/router";
import { HTMLProps } from 'react';

import { Orientation, ScrollHint, Icon } from "./Aesthetic";

export const NavItem = tw.li`relative inline-flex flex-col flex-grow flex-shrink-0 justify-center text-center w-32 p-1`;

export interface NavLinkProps extends HTMLProps<HTMLLIElement>{ route:string }
/** grounp-disabled:{class} can be used in className and children to customize */
export function NavLink({route,children,...props}:NavLinkProps){
	const router = useRouter();
	const currentRoute = router.pathname;
	const disabled = currentRoute === route;
	return (
		<NavItem css={disabled?tw`text-gray-400 cursor-not-allowed`:tw`hover:text-blue-400 focus:text-blue-900 cursor-pointer`} {...props}>
			{children}
			<Link href={route}><a tw="absolute inset-0" css={disabled&&tw`hidden`}></a></Link>
		</NavItem>
	);
}

export interface NavbarProps extends HTMLProps<HTMLElement>{
	routes:Record<string,string>,
	itemProps?:HTMLProps<HTMLLIElement>
}
//TODO Implement the navbar context provider for in page hiding of navbar, recustomization by page etc
export function Navbar({routes,itemProps,...props}:NavbarProps){
	return (
		<nav tw="absolute flex h-16 top-0 inset-x-0 bg-opacity-80 bg-black text-white" {...props}>
			<Icon src="/favicon/original-icon.png" tw="w-14 h-14"/>
			<ul tw="inline-flex flex-row w-full lg:w-3/5 divide-x-2 my-2 overflow-x-auto">
				{Object.entries(routes).map(([route,text],i) => <NavLink route={route} {...itemProps} key={i}>{text}</NavLink>)}
			</ul>
			<span tw="absolute right-0 inset-y-0 w-16 sm:hidden"><ScrollHint orientation={Orientation.left}/></span>
		</nav>
	)
}