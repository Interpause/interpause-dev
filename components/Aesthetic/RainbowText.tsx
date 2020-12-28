/**
 * @file Why not? TBH this probably lags on mobile
 * @author John-Henry Lim <hyphen@interpause.dev>
 */
import "twin.macro";
import { useLayoutEffect, useRef, useState } from "react";
import { OrientableSVG } from "./index";

export interface RainbowTextProps extends OrientableSVG {
	text: string;
}

interface styleState {
	height:number;
	width:number;
	font:string;
}

const duration=10;

/**
 * rainbow text TODO: is there a better way to measure text size other than using canvas or a rogue span. Also the SVG code is spam rn.
 */
export function RainbowText({orientation,text,...props}:RainbowTextProps){
	const [state,setState] = useState<styleState>();
	const measurementRef = useRef<HTMLSpanElement>(null);

	useLayoutEffect(() => {
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

	if(typeof state === "undefined") return <span ref={measurementRef} tw="fixed inline">{text}</span>; //fixed necessary to ignore effects of parent container on width/height
	return (
		<svg transform={`rotate(${orientation??0} 0 0)`} viewBox={`0 0 ${state.width} ${state.height}`} xmlns="http://www.w3.org/2000/svg" version="1.1" height="100%" width="100%" {...props}>
			<defs>
				<linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
					<stop offset={`${100*1/7}%`} stopColor="#F00"/>
					<stop offset={`${100*2/7}%`} stopColor="#FF0"/>
					<stop offset={`${100*3/7}%`} stopColor="#0F0"/>
					<stop offset={`${100*4/7}%`} stopColor="#0FF"/>
					<stop offset={`${100*5/7}%`} stopColor="#00F"/>
					<stop offset={`${100*6/7}%`} stopColor="#F0F"/>
					<stop offset={`${100*7/7}%`} stopColor="#F00"/>
				</linearGradient>
				<pattern id="hex" width={`3%`} height={`30%`} viewBox="0 0 28 49" preserveAspectRatio="none" shapeRendering="crispEdges">
					<path fill="#fff" d="M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z"/>
				</pattern>
				
				<pattern id="pattern" x="0" y="0" width="300%" height="100%" patternUnits="userSpaceOnUse">
				<rect x="0" y="0" width="150%" height="100%" fill="url(#gradient)">
						<animate
							attributeType="XML"
							attributeName="x"
							from="0" to="150%"
							dur={duration}
							repeatCount="indefinite"
						/>
					</rect>
					<rect x="-150%" y="0" width="150%" height="100%" fill="url(#gradient)">
						<animate
							attributeType="XML"
							attributeName="x"
							from="-150%" to="0"
							dur={duration}
							repeatCount="indefinite"
						/>
					</rect>	
					<rect x="0" y="0" width="150%" height="100%" fill="url(#hex)" shapeRendering="crispEdges">
						<animate
							attributeType="XML"
							attributeName="x"
							from="0" to="150%"
							dur={duration/2}
							repeatCount="indefinite"
						/>
					</rect>
					<rect x="-150%" y="0" width="150%" height="100%" fill="url(#hex)" shapeRendering="crispEdges">
						<animate
							attributeType="XML"
							attributeName="x"
							from="-150%" to="0"
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