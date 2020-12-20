/**
 * @file ReactJS + TailwindCSS customizable toggle.
 * @author John-Henry Lim <interpause@interpause.dev>
 */
import "tailwindcss/tailwind.css";
import { Dispatch, SetStateAction, CSSProperties } from "react";
import { DefaultLayeredConfig, LayeredConfig, mergeConfigs } from "./LayeredConfig";

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
export const mergeStyles = (customStyle:ToggleStyle) => mergeConfigs<StyleKeys,StateKeys>(customStyle,defaultStyle);

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
			width:`${2*height}rem`,
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
	/** custom style classes to apply to toggle. 
	 * @example {bg:"bg-gray-400",slider:{on:"bg-green-400"}} 
	 */
	customStyle?:ToggleStyle;
}

/** Creates an inline customisable toggle. */
export default function Toggle({toggleHook:[isOn,setOn],label,height=2,customStyle={}}:ToggleProps){
	let s = calculateSizes(height);
	let c = mergeStyles(customStyle)[isOn?"on":"off"];

	return (
		<label className={`group select-none`} style={s.label}>
			<span className={`align-middle`}>{label??""} </span>
			<input className={`opacity-0 h-0 w-0`} type="checkbox" checked={isOn} onClick={() => setOn(!isOn)} readOnly></input>
			<div className={`relative inline-block transition-colors align-middle`} style={s.wrapper}>
				<span className={`absolute top-0 right-0 bottom-0 left-0 group-hover:shadow-inner-btn ${c.bg} ${c.others}`}></span>
				<span className={`absolute transition-transform ${isOn?"transform":""} ${c.slider} ${c.others}`} style={s.slider}></span>
			</div>
		</label>
	);
}