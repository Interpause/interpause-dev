import { Dispatch, SetStateAction, CSSProperties } from "react";
import "tailwindcss/tailwind.css";

export interface ToggleStyle{
	slider?:{
		on?:string;
		off?:string;
	}|string;
	bg?:{
		on?:string;
		off?:string;
	}|string;
	others?:{
		on?:string;
		off?:string;
	}|string;
}

const defaultStyle = { // cant't be typed as ToggleStyle else typescript complains about undefined even when this is a const
	slider:{
		on:"bg-white",
		off:"bg-white"
	},
	bg:{
		on:"bg-blue-400",
		off:"bg-gray-400"
	},
	others:{
		on:"rounded",
		off:"rounded"
	}
}

function mergeStyles(customStyle:ToggleStyle){
	return {
		on: {
			slider: typeof customStyle.slider==="string"?customStyle.slider:customStyle.slider?.on??defaultStyle.slider.on,
			bg: typeof customStyle.bg==="string"?customStyle.bg:customStyle.bg?.on??defaultStyle.bg.on,
			others: typeof customStyle.others==="string"?customStyle.others:customStyle.others?.on??defaultStyle.others.on,
		},
		off: {
			slider: typeof customStyle.slider==="string"?customStyle.slider:customStyle.slider?.off??defaultStyle.slider.off,
			bg: typeof customStyle.bg==="string"?customStyle.bg:customStyle.bg?.off??defaultStyle.bg.off,
			others: typeof customStyle.others==="string"?customStyle.others:customStyle.others?.off??defaultStyle.others.off,
		}
	};
}

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

export default function Toggle({isToggled,setToggled,label,height=2,customStyle={}}:{
	isToggled:boolean,
	setToggled:Dispatch<SetStateAction<boolean>>,
	label?:string,
	height?:number,
	customStyle?:ToggleStyle
	}
){
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