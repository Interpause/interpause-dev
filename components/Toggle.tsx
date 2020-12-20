import { Dispatch, SetStateAction, CSSProperties } from "react";
import "tailwindcss/tailwind.css";
import {DefaultLayeredConfig, LayeredConfig, mergeConfigs} from './LayeredConfig';

export type StyleKeys = "slider"|"bg"|"others";
export type StateKeys = "on"|"off";
export type ToggleStyle = LayeredConfig<StyleKeys,StateKeys>;
export const defaultStyle:DefaultLayeredConfig<StyleKeys,StateKeys> = {
	on:{
		slider:"bg-white",
		bg:"bg-blue-400",
		others:"rounded"
	},
	off:{
		slider:"bg-white",
		bg:"bg-gray-400",
		others:"rounded"
	}
}

const mergeStyles = (customStyle:ToggleStyle) => mergeConfigs<StyleKeys,StateKeys>(customStyle,defaultStyle);

/**
 * calculates the sizes for toggle components using the height of the toggle.
 * @param height height in rem to calculate sizes for toggle components.
 */
function calculateSizes(height:number){
	return {
		slider:{
			height:`${3/4*height}rem`,
			width:`${3/4*height}rem`,
			left:`${1/8*height}rem`,
			bottom:`${1/8*height}rem`,
			"--tw-translate-x":`${height}rem`
		} as CSSProperties,
		wrapper:{
			height:`${height}rem`,
			width:`${2*height}rem`
		},
		label:{
			fontSize:`${3/4*height}rem`
		}
	};
}

export type ToggleProps = {
	/** array returned by React.useState\<boolean\> */
	toggleHook:[boolean,Dispatch<SetStateAction<boolean>>];
	/** text label for toggle */
	label?:string;
	/** height of component in rem used for scaling */
	height?:number;
	/** custom style classes to apply to toggle */
	customStyle?:ToggleStyle;
}

//TODO ADD HOVER
export default function Toggle({toggleHook:[isToggled,setToggled],label,height=2,customStyle={}}:ToggleProps){
	let sizes = calculateSizes(height);
	let custom = mergeStyles(customStyle)[isToggled?"on":"off"];

	return (
		<label className={`cursor-pointer select-none`}>
			<span className={`align-middle`} style={sizes.label}>{label?(label+' '):''}</span>
			<input className={`span opacity-0 h-0 w-0`} type="checkbox" checked={isToggled} onClick={() => setToggled(!isToggled)} readOnly></input>
			<div className={`relative inline-block transition-colors align-middle`} style={sizes.wrapper}>
				<span className={`absolute pointer-events-none top-0 right-0 bottom-0 left-0 ${custom.bg} ${custom.others}`}></span>
				<span
					className={`absolute pointer-events-none transition-transform ${custom.slider} ${custom.others} ${isToggled?"transform":""}`}
					style={sizes.slider}
				></span>
			</div>
		</label>
	);
}