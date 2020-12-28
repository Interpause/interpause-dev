/**
 * @file some sort of icon wrapper.
 * @author John-Henry Lim <hyphen@interpause.dev>
 */
import { css } from 'twin.macro';
import Image from "next/image";
import { OrientableSVG, Orientation } from "./index";
export enum ICON {
	facebook='M608 192h160v-192h-160c-123.514 0-224 100.486-224 224v96h-128v192h128v512h192v-512h160l32-192h-192v-96c0-17.346 14.654-32 32-32z'
}

type IconProps = ({orientation?:Orientation|number,className?:string,src:string,priority:boolean,type?:never})|({type:ICON} & OrientableSVG);
/** In className, specify width, height and textColor. Either specify type which is enum ICON or src which is path. */
export function Icon({orientation,className,...props}:IconProps){
	return <span tw="relative m-1 flex-none" css={css`transform:rotate(${orientation??0}deg)`} className={className}>
		{
			("src" in props)?
				(<Image src={props.src} layout="fill" priority={props.priority}/>)
			:
				(<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" version="1.1" height="100%" width="100%" fill="currentColor" {...props}>
					<path d={props.type}></path>
				</svg>)
		}
	</span>;	
}