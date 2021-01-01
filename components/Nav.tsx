/**
 * @file quite a primitive navbar tbh
 * @author John-Henry Lim <hyphen@interpause.dev>
 */
import React, { HTMLProps, useRef } from 'react';
import tw, { css, styled } from 'twin.macro';
import { StyledComponent } from "@emotion/styled";
import Link from "next/link";
import { useRouter } from "next/router";
import { Icon, ICON } from "./Deco";
import { mobileScreen } from "./DeviceOrientationCSS";

export const NavItem = styled.li`${tw`relative inline-flex flex-col flex-expand justify-center text-center w-32 p-1`}`;

export const BaseNavbar = styled.nav`
	${({height}:{height:number}) => css`--nav-height:${height}rem`}
	${tw`absolute flex flex-wrap md:flex-nowrap bg-black text-white top-0 inset-x-0 z-75`}
	height: var(--nav-height);
	>.nav-items{ ${tw`inline-flex flex-row w-full lg:w-3/5 divide-x-2 divide-white my-2 overflow-x-auto`} }
`;

export const CollapsableNavbar = styled(BaseNavbar)`
	${mobileScreen}{
		${tw`bg-transparent`}
		>.nav-items{
			${tw`absolute flex flex-col divide-y-2 divide-x-0 divide-gray-800 bg-black transition-transform transform-gpu top-0 -z-25 m-0`}
			padding-top: var(--nav-height);
		}
		&:not(.opened){
			>.nav-items{
				${tw`pointer-events-none -translate-y-full`}
			}
		}
		${NavItem}{ ${tw`w-full text-left py-2`} }
	}
`;

export interface NavLinkProps extends HTMLProps<HTMLUListElement>{ route:string }
/** group-disabled:{class} can be used in className and children to customize */
export function NavLink({route,children,...props}:NavLinkProps){
	const router = useRouter();
	const currentRoute = router.pathname;
	const disabled = currentRoute === route;
	return <NavItem css={disabled?tw`text-gray-400 cursor-not-allowed`:tw`hover:text-blue-400 focus:text-blue-900 cursor-pointer`} {...props as StyledComponent<HTMLUListElement>}>
		{children}
		<Link href={route}><a tw="absolute inset-0" css={disabled&&tw`hidden`}></a></Link>
	</NavItem>;
}

export interface NavbarProps extends HTMLProps<HTMLElement>{
	routes:Record<string,string>,
	itemProps?:HTMLProps<HTMLUListElement>
}
//TODO Implement the navbar context provider for in page hiding of navbar, recustomization by page etc
export function Navbar({routes,itemProps,...props}:NavbarProps){
	/** height in rem */
	const height = 4;
	const navbar = useRef<HTMLElement>(null);
	const navOpener = ()=>navbar.current?.classList.toggle("opened");
	return <CollapsableNavbar ref={navbar} height={height} {...props as StyledComponent<HTMLProps<HTMLElement>>}>
		<Icon src="/favicon/original-icon.png" tw="m-1 my-auto inset-y-0" css={css`height:${height*3/4}rem;width:${height*3/4}rem;`} priority/>
		<span tw="flex-grow md:flex-grow-0"></span>
		<Icon
			as="button"
			icon={ICON.menu}
			onClick={navOpener}
			tw="flex-shrink-0 md:hidden text-white ring-inset ring-2 ring-yellow-200 bg-yellow-400 rounded-lg bg-opacity-20! hocus:bg-opacity-60! m-1 p-1"
			css={css`height:${height*3/4}rem;width:${height*3/4}rem;backdrop-filter:invert(40%) hue-rotate(60deg)`}
		/>
		<ul className="nav-items">{Object.entries(routes).map(([route,text],i) => <NavLink route={route} {...itemProps} key={i}>{text}</NavLink>)}</ul>
	</CollapsableNavbar>;
}