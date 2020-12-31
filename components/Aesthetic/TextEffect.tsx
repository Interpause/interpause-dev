/**
 * @file SVG Text with special effects.
 * @author John-Henry Lim <hyphen@interpause.dev>
 */
import { Dispatch, ReactText, SetStateAction, useEffect, useRef, useState } from "react";
import { OrientableSVG } from "./index";

export interface styleState {
	height:number;
	width:number;
	font:string;
}

export interface BaseTextProps extends OrientableSVG { 
	text: string,
	styleStateHook:[styleState|undefined,Dispatch<SetStateAction<styleState|undefined>>]
}
/**
 * Base component for text with special SVG effects
 */
export function BaseTextWithEffect({orientation,text,children,styleStateHook,...props}:BaseTextProps){
	const [state,setState] = styleStateHook;
	const fontRef = useRef<any>(null);

	useEffect(() => {
		const fontElem = fontRef.current;
		if(fontElem == null) return;
		let measureSpan = document.createElement("span");
		measureSpan.style.font = getComputedStyle(fontElem).font;
		// ensure span never get clipped by being small, reset some parts of style to be consistent
		measureSpan.style.lineHeight = "normal";
		measureSpan.style.fontSize = "1px";
		measureSpan.style.position = "fixed";
		const font = measureSpan.style.font;
		measureSpan.innerText = text;
		document.documentElement.appendChild(measureSpan);
		const rect = measureSpan.getBoundingClientRect();
		measureSpan.remove();
		// aspect ratio of height to width should be constant no matter viewport size
		setState({
			height:rect.height,
			width:rect.width,
			font:font
		});
	},[text,props.className]);

	if(typeof state === "undefined") return <span ref={fontRef} className={props.className} style={{visibility:"hidden"}}></span>;

	return <svg ref={fontRef} viewBox={`0 0 ${state.width} ${state.height}`} transform={`rotate(${orientation??0} 0 0)`} {...props}>
		{children}
		<text x="50%" textAnchor="middle" dominantBaseline="text-before-edge" style={{font:state.font}} fill="url(#pattern)">{text}</text>
	</svg>;
}

/** taken from https://stackoverflow.com/a/44134328/9614726 */
function hslToHex(h:number, s:number, l:number) {
	l /= 100;
	const a = s * Math.min(l, 1 - l) / 100;
	const f = (n:number) => {
		const k = (n + h / 30) % 12;
		const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
		return Math.round(255 * color).toString(16).padStart(2, '0');   // convert to Hex and prefix "0" if needed
	};
	return `#${f(0)}${f(8)}${f(4)}`;
}

export const RainbowTextConfig = {
	/** Duration of animation in seconds */
	duration:20,
	/** Number of color stops in rainbow gradient, increase to make more accurate gradient */
	numStops:21,
	/** Saturation of rainbow gradient (HSL colorspace) */
	saturation:100,
	/** Luminosity of rainbow gradient (HSL colorspace) */
	luminosity:60,
	/** SVG path of pattern */
	pattern:"M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z",
	/** height of pattern */
	pHeight:49,
	/** width of pattern */
	pWidth:28,
	/** Size of pattern */
	pSize:50,
	/** Color of pattern */
	pFill:"#fff",
	/** width of rect used in pattern, should be larger than 100% to transition smoothly. Should use pWidth/pHeight*2 for teselating. */
	bgWidth:100*28/49*2,
	/** Height of rect used in pattern, just leave at 100% */
	bgHeight:100
} as const;

export interface RainbowTextProps extends Omit<BaseTextProps,"text"|"styleStateHook"> {
	config?: Partial<typeof RainbowTextConfig>;
	children: ReactText;
}
/**
 * rainbow text cause why not
 */
export function RainbowText({children,config,...props}:RainbowTextProps){
	const [state,setState] = useState<styleState>();
	const conf = {...RainbowTextConfig,...config};
	const {duration, numStops:N, saturation:S, luminosity:L, bgWidth, bgHeight, pattern, pHeight, pWidth, pSize, pFill} = conf;
	const text = children.toString();

	return <BaseTextWithEffect text={text} styleStateHook={[state,setState]} {...props}>
		{state&&<defs>
			<linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
				{Array.from(Array(N).keys()).map(n => <stop offset={`${100*n/(N-1)}%`} stopColor={hslToHex(360*n/(N-1),S,L)} key={n}/>)}
			</linearGradient>
			<pattern id="hex" viewBox={`0 0 ${pWidth} ${pHeight}`} width={`${(state.height*bgHeight)/(state.width*bgWidth)*pWidth/pHeight*pSize}%`} height={`${pSize}%`}>
				<path fill={pFill} d={pattern}/>
			</pattern>
			
			<pattern id="pattern" x="0" y="0" width={`${bgWidth*2}%`} height={`${bgHeight}%`} patternUnits="userSpaceOnUse">
				<rect x="0" y="0" width={`${bgWidth}%`} height="100%" fill="url(#gradient)">
					<animate
						attributeType="XML"
						attributeName="x"
						from="0" to={`${bgWidth}%`}
						dur={duration}
						repeatCount="indefinite"
					/>
				</rect>
				<rect x={`${-bgWidth}%`} y="0" width={`${bgWidth}%`} height="100%" fill="url(#gradient)">
					<animate
						attributeType="XML"
						attributeName="x"
						from={`${-bgWidth}%`} to="0"
						dur={duration}
						repeatCount="indefinite"
					/>
				</rect>	
				<rect x="0" y="0" width={`${bgWidth}%`} height="100%" fill="url(#hex)">
					<animate
						attributeType="XML"
						attributeName="x"
						from="0" to={`${bgWidth}%`}
						dur={duration*2/3}
						repeatCount="indefinite"
					/>
				</rect>
				<rect x={`${-bgWidth}%`} y="0" width={`${bgWidth}%`} height="100%" fill="url(#hex)">
					<animate
						attributeType="XML"
						attributeName="x"
						from={`${-bgWidth}%`} to="0"
						dur={duration*2/3}
						repeatCount="indefinite"
					/>
				</rect>	
			</pattern>
		</defs>}
	</BaseTextWithEffect>;
}