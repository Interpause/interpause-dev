/**
 * @file quite a primitive navbar tbh
 * @author John-Henry Lim <hyphen@interpause.dev>
 */
import "tailwindcss/tailwind.css";
import tw, { css, styled } from 'twin.macro';
import Link from "next/link";
import { useRouter } from "next/router";
import React, { HTMLProps, useMemo, useRef } from 'react';

import { Icon, ICON, IconButton } from "./Aesthetic";
import { mobileScreen } from "./DeviceOrientationCSS";
import { StyledComponent } from "@emotion/styled";

export const NavItem = tw.li`relative inline-flex flex-col flex-grow flex-shrink-0 justify-center text-center w-32 p-1` as StyledComponent<HTMLProps<HTMLLIElement>>;

const BaseNavbar = styled.nav`
	${tw`absolute flex flex-wrap md:flex-nowrap top-0 inset-x-0 bg-black text-white z-50`}
	>.nav-items{ ${tw`inline-flex flex-row w-full lg:w-3/5 divide-x-2 my-2 overflow-x-auto`} }
	${({height}:{height:number}) => `height:${height}rem`}
`;

const CollapsableNavbar = styled(BaseNavbar)`
	${mobileScreen}{
		${tw`bg-transparent`}
		>.nav-items{
			${tw`flex absolute top-0 -z-10 m-0 flex-col divide-y-2 divide-x-0 bg-black transition-transform transform-gpu`}
			${({height}:{height:number}) => `padding-top:${height}rem`}
		}
		&:not(.opened){
			>.nav-items{
				${tw`pointer-events-none`}
				--tw-translate-y: -200%;
			}
		}
		${NavItem}{ ${tw`w-full text-left`} }
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

export interface NavbarProps extends HTMLProps<HTMLElement>{
	routes:Record<string,string>,
	itemProps?:HTMLProps<HTMLLIElement>
}
//TODO Implement the navbar context provider for in page hiding of navbar, recustomization by page etc
export function Navbar({routes,itemProps,...props}:NavbarProps){
	/** height in rem */
	const height = 4;
	const navbar = useRef<HTMLElement>(null);
	const items = useMemo(() => Object.entries(routes).map(([route,text],i) => <NavLink route={route} {...itemProps} key={i}>{text}</NavLink>),[JSON.stringify(routes),JSON.stringify(itemProps)]);
	const navOpener = ()=>navbar.current?.classList.toggle("opened");
	return (
		<CollapsableNavbar height={height} ref={navbar} {...props as StyledComponent<HTMLProps<HTMLElement>>}>
			<Icon src="/favicon/original-icon.png" tw="m-1 my-auto inset-y-0" css={css`height:${height*3/4}rem;width:${height*3/4}rem;`} priority/>
			<span tw="flex-grow md:flex-grow-0"></span>
			<IconButton as="button" icon={ICON.menu} tw="m-1 flex-shrink-0 text-white ring-yellow-200 bg-yellow-400 md:hidden" css={css`height:${height*3/4}rem;width:${height*3/4}rem;backdrop-filter:invert(40%) hue-rotate(60deg)`} onClick={navOpener}/>
			<ul className="nav-items">{items}</ul>
		</CollapsableNavbar>
	)
}