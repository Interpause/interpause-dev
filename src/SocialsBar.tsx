import { HTMLProps } from "react";
import tw, { css } from "twin.macro";
import { SvgIcon, ICON } from "../components";

export function SocialsBar(props:HTMLProps<HTMLDivElement>){
	return <div tw="grid grid-cols-4 w-28 gap-1 lg:(w-36)" css={css`a{ ${tw`hocus:text-primary`} }`} {...props}>
		<SvgIcon as="a" href="https://github.com/Interpause" icon={ICON.github}/>
		<SvgIcon as="a" href="https://linkedin.com/in/Interpause" icon={ICON.linkedin}/>
		<SvgIcon as="a" href="https://youtube.com/c/Interpause" icon={ICON.youtube}/>
		<SvgIcon as="a" href="https://youtu.be/dQw4w9WgXcQ" icon={ICON.instagram}/>
	</div>;
}