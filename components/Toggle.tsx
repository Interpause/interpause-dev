/**
 * @file ReactJS + TailwindCSS customizable toggle. Did not use twin.macro here due to some design conflicts causing huge render time.
 * @author John-Henry Lim <hyphen@interpause.dev>
 */
import "tailwindcss/tailwind.css";
import { Dispatch, SetStateAction, CSSProperties, useMemo, HTMLProps } from "react";
import { DefaultLayeredConfig, LayeredConfig, mergeConfigs } from "./LayeredConfig";

export type StyleKeys = "slider"|"bg"|"others";
export type StateKeys = "on"|"off";
export type ToggleStyle = LayeredConfig<StyleKeys,StateKeys,string>;
export const defaultStyle:DefaultLayeredConfig<StyleKeys,StateKeys,string> = {
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
};
export const mergeStyles = (customStyle?:ToggleStyle) => mergeConfigs<StyleKeys,StateKeys,string>(defaultStyle,customStyle);

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

// for tw & emotion css to work, at least needs className to be forwarded
export interface ToggleProps extends HTMLProps<HTMLLabelElement> {
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
export function Toggle({toggleHook:[isOn,setOn],label,height=2,customStyle,...props}:ToggleProps){
	let s = useMemo(() => calculateSizes(height),[height]);
	let mc = useMemo(() => mergeStyles(customStyle),[mergeStyles,JSON.stringify(customStyle)]); //bug where object dependencies trigger false positives so stringify first
	let c = mc[isOn?"on":"off"];

	return (
		<label className={`group select-none`} style={s.label} {...props}>
			<p className={`align-middle inline`}>{label??""} </p>
			<input className={`opacity-0 h-0 w-0`} type="checkbox" checked={isOn} onClick={() => setOn(!isOn)} readOnly></input>
			<div className={`relative inline-block transition-colors align-middle`} style={s.wrapper}>
				<span className={`absolute inset-0 group-hover:shadow-inner-btn ${c.bg} ${c.others}`}></span>
				<span className={`absolute transition-transform ${isOn&&"transform"} ${c.slider} ${c.others}`} style={s.slider}></span>
			</div>
		</label>
	);
}