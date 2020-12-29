/**
 * @file Why not? TBH this probably lags on mobile
 * @author John-Henry Lim <hyphen@interpause.dev>
 */
import "twin.macro";
import { useEffect, useMemo, useRef, useState } from "react";
import { OrientableSVG } from "./index";

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

interface styleState {
	height:number;
	width:number;
	font:string;
}

const PatternConfig = {
	/** Duration of animation in seconds */
	duration:10,
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
	/** Size of pattern, should be factor of 100 */
	pSize:20,
	/** width of rect used in pattern, should be larger than 100% to transition smoothly. Should use pWidth/pHeight*2 for teselating. */
	bgWidth:100*28/49*2,
	/** Height of rect used in pattern, just leave at 100% */
	bgHeight:100
} as const;

export interface RainbowTextProps extends OrientableSVG {
	text: string;
	config?: Partial<typeof PatternConfig>;

}
/**
 * rainbow text cause why not
 */
export function RainbowText({orientation,text,config,...props}:RainbowTextProps){
	const conf = {...PatternConfig,...config};
	const {duration, numStops:N, saturation:S, luminosity:L, bgWidth, bgHeight, pattern, pHeight, pWidth, pSize} = conf;

	const [state,setState] = useState<styleState>();
	const measurementRef = useRef<HTMLSpanElement>(null);
	const stops = useMemo(() => Array.from(Array(N).keys()).map(n => <stop offset={`${100*n/(N-1)}%`} stopColor={hslToHex(360*n/(N-1),S,L)} key={n}/>),[]);

	useEffect(() => {
		const measurementSpan = measurementRef.current;
		if(measurementSpan == null) return;
		const rect = measurementSpan.getBoundingClientRect();
		const font = getComputedStyle(measurementSpan).font;
		setState({
			height:rect.height,
			width:rect.width,
			font:font
		});
	},[text]);

	if(typeof state === "undefined") return <span ref={measurementRef} tw="fixed inline invisible">{text}</span>; //fixed necessary to ignore effects of parent container on width/height
	return (
		<svg transform={`rotate(${orientation??0} 0 0)`} viewBox={`0 0 ${state.width} ${state.height}`} xmlns="http://www.w3.org/2000/svg" version="1.1" height="100%" width="100%" {...props}>
			<defs>
				<linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">{stops}</linearGradient>
				<pattern id="hex" width={`${(state.height*bgHeight)/(state.width*bgWidth)*pWidth/pHeight*pSize}%`} height={`${pSize}%`} viewBox={`0 0 ${pWidth} ${pHeight}`}>
					<path fill="#fff" d={pattern}/>
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
							dur={duration/2}
							repeatCount="indefinite"
						/>
					</rect>
					<rect x={`${-bgWidth}%`} y="0" width={`${bgWidth}%`} height="100%" fill="url(#hex)">
						<animate
							attributeType="XML"
							attributeName="x"
							from={`${-bgWidth}%`} to="0"
							dur={duration/2}
							repeatCount="indefinite"
						/>
					</rect>	
				</pattern>
			</defs>
			<text x="50%" textAnchor="middle" y="50%" dy="0.4em" style={{font:state.font}} fill="url(#pattern)">{text}</text>
		</svg>
	);
}