/**
 * @file quite a primitive navbar tbh
 * @author John-Henry Lim <hyphen@interpause.dev>
 */
import "tailwindcss/tailwind.css";
import tw, { styled } from 'twin.macro';
import Link from "next/link";
import { useRouter } from "next/router";
import { HTMLProps, useMemo } from 'react';

import { Orientation, ScrollHint, Icon, mobileScreen, ICON } from "./Aesthetic";
import { StyledComponent } from "@emotion/styled";

export const NavItem = tw.li`relative inline-flex flex-col flex-grow flex-shrink-0 justify-center text-center w-32 p-1` as StyledComponent<HTMLProps<HTMLLIElement>>;

const CollapsableNavbar = styled.nav`
	${mobileScreen}{
		${tw`h-auto bg-black`}
		>ul{ ${tw`w-full flex-shrink-0 flex-col divide-y-2 divide-x-0 bg-black`} }
		&:not(.opened){
			${tw`bg-transparent`}
			>ul{ ${tw`hidden`} }
		}
		
		${NavItem}{
			${tw`w-full text-left`}
		}
	}
`;

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

export interface NavbarProps extends StyledComponent<HTMLProps<HTMLElement>>{
	routes:Record<string,string>,
	itemProps?:HTMLProps<HTMLLIElement>
}
//TODO Implement the navbar context provider for in page hiding of navbar, recustomization by page etc
export function Navbar({routes,itemProps,...props}:NavbarProps){
	const items = useMemo(() => Object.entries(routes).map(([route,text],i) => <NavLink route={route} {...itemProps} key={i}>{text}</NavLink>),[JSON.stringify(routes),JSON.stringify(itemProps)]);
	return (
		<CollapsableNavbar id="navbar" tw="absolute flex flex-wrap md:flex-nowrap h-16 p-1 top-0 inset-x-0 bg-black text-white z-50" {...props}>
			<Icon src="/favicon/original-icon.png" tw="w-14 h-14" priority/>
			<span tw="flex-grow md:flex-grow-0"></span>
			<button tw="relative w-16 h-16 flex-shrink-0 text-white rounded-lg ring-white ring-inset ring-2 md:hidden hocus:(bg-black bg-opacity-20)" onClick={()=>document.querySelector("#navbar")?.classList.toggle("opened")}><Icon type={ICON.menu} tw="absolute inset-0"></Icon></button>
			<ul tw="inline-flex flex-row w-full lg:w-3/5 divide-x-2 my-2 overflow-x-auto">{items}</ul>

		</CollapsableNavbar>
	)
}