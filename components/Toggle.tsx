import { Dispatch, SetStateAction, CSSProperties } from "react";
import "tailwindcss/tailwind.css";

export default function Toggle({isToggled,setToggled,label,height=2}:{isToggled:boolean,setToggled:Dispatch<SetStateAction<boolean>>,label?:string,extraStyleClasses?:string,height?:number}){
	let sliderStyle = {
		height:`${3/4*height}rem`,
		width:`${3/4*height}rem`,
		left:`${1/8*height}rem`,
		bottom:`${1/8*height}rem`,
		"--tw-translate-x":`${height}rem`
	} as CSSProperties;
	return (
		<label className={`cursor-pointer select-none`} style={{fontSize:`${3/4*height}rem`}}>
			<span className={`align-middle`}>{label?(label+' '):''}</span>
			<input className={`span opacity-0 h-0 w-0`} type="checkbox" checked={isToggled} onClick={() => setToggled(!isToggled)} readOnly></input>
			<div className={`relative inline-block transition-colors align-middle`} style={{height:`${height}rem`,width:`${2*height}rem`}}>
				<span className={`absolute pointer-events-none top-0 right-0 bottom-0 left-0 bg-gray-400 ${isToggled?"bg-blue-400":""}`}></span>
				<span
					className={`absolute pointer-events-none bg-white transition-transform ${isToggled?"transform":""}`}
					style={sliderStyle}
				></span>
			</div>
		</label>
	);
}