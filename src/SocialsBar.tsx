import { HTMLProps } from "react";
import tw, { css } from "twin.macro";
import { Icon, ICON } from "../components/deco";

export function SocialsBar(props:HTMLProps<HTMLDivElement>){
	return <div tw="grid grid-cols-4 w-28 lg:(w-36)" css={css`a{ ${tw`hocus:text-link-color`} }`} {...props}>
		<Icon as="a" href="https://github.com/Interpause" icon={ICON.github}/>
		<Icon as="a" href="https://linkedin.com/in/Interpause" icon={ICON.linkedin}/>
		<Icon as="a" href="https://youtube.com/c/Interpause" icon={ICON.youtube}/>
		<Icon as="a" href="https://youtu.be/dQw4w9WgXcQ" icon={ICON.instagram}/>
	</div>;
}