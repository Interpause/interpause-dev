/**
 * @file some sort of icon wrapper.
 * @author John-Henry Lim <hyphen@interpause.dev>
 */
import tw, { css, styled } from 'twin.macro';
import Image, { ImageProps } from "next/image";
import { OrientableSVG } from "./index";

export enum ICON {
	/** https://icomoon.io/ */
	facebook='M608 192h160v-192h-160c-123.514 0-224 100.486-224 224v96h-128v192h128v512h192v-512h160l32-192h-192v-96c0-17.346 14.654-32 32-32z',
	/** I made this one myself */
	menu='M64 288A1 1 0 0164 224H960A1 1 0 01960 288H64ZM64 800A1 1 0 0164 736H960A1 1 0 01960 800H64ZM64 544A1 1 0 0164 480H960A1 1 0 01960 544H64Z'
}

// TODO implement icon label as figcaption lol
export const IconWrapper = styled.figure`
	${tw`relative inline-block flex-none m-0.5`}
	${({orientation}:{orientation?:number}) => css`transform:rotate(${orientation??0}deg)`}
`;

export type IconProps = (({orientation?:number} & Omit<ImageProps,"height"|"width"|"layout">) | ({icon:ICON} & OrientableSVG)) & {as?:keyof JSX.IntrinsicElements};
/** Must restyle with height and width. Either specify icon which is enum ICON or src which is path. */
export function Icon({orientation,className,as,...props}:IconProps){
	return <IconWrapper as={as} className={className} orientation={orientation}>
		{
			("src" in props)?
				(<Image layout="fill" {...props}/>)
			:
				(<svg viewBox="0 0 1024 1024" {...props}>
					<path strokeLinecap="round" strokeLinejoin="round" fill="currentColor" d={props.icon}/>
				</svg>)
		}
	</IconWrapper>;	
}