/**
 * @file I will put more react SVGs here next time.
 * @author John-Henry Lim <interpause@interpause.dev>
 */
import { SVGProps } from "react";
import { Orientation } from "./index";

const lineStyle = {stroke:"currentColor",strokeWidth:8,strokeLinecap:"butt",fill:"none"} as const;

export interface ScrollHintProps extends SVGProps<SVGSVGElement> {
	direction:Orientation|number;
}

/**
 * Creates an animated arrow hinting the user to scroll in that direction.
 * @param direction Takes either an Orientation or degrees clockwise relative to pointing down. 
 */
export function ScrollHint({direction,...props}:ScrollHintProps){
	return (
		<svg transform={`rotate(${direction} 0 0)`} viewBox="0 0 100 160" xmlns="http://www.w3.org/2000/svg" version="1.1" height="100%" width="100%" {...props}>
			<g>
				<polyline {...lineStyle} points="0,0 50,50 100,0"></polyline>
				<polyline {...lineStyle} points="0,50 50,100 100,50"></polyline>
				<animateTransform
					attributeName="transform"
					type="translate"
					values="0 5 ; 0 55"
					calcMode="spline"
					keyTimes="0 ; 1"
					keySplines="0 0 0.5 1"
					dur="1s"
					repeatCount="indefinite"
				/>
				<animate
					attributeName="opacity"
					values="0; 1 ; 0"
					calcMode="spline"
					keyTimes="0 ; 0.3 ; 1"
					keySplines="0.5 0 0.5 1 ; 0.5 0 0.5 1"
					dur="1s"
					repeatCount="indefinite"
				/>
			</g>
		</svg>
	);
}