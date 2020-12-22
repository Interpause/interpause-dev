/**
 * @file I will put more react SVGs here next time.
 * @author John-Henry Lim <interpause@interpause.dev>
 */
import { Orientation } from "./index";

/**
 * Creates an animated arrow hinting the user to scroll in that direction.
 * @param dir Takes either an Orientation or degrees clockwise relative to pointing down. 
 */
export default function ScrollHint({direction:dir}:{direction:Orientation|number}){
	const angleMap = {up:180,right:270,down:0,left:90};
	if(typeof(dir) === "string") dir = angleMap[dir];

	return (
		<svg transform={`rotate(${dir} 0 0)`} viewBox="0 0 100 160" xmlns="http://www.w3.org/2000/svg" version="1.1" height="100%" width="100%">
			<g>
				<polyline stroke="currentColor" strokeWidth="8" strokeLinecap="butt"  fill="none" 
					points="0,0 50,50 100,0"
				></polyline>
				<polyline stroke="currentColor" strokeWidth="8" strokeLinecap="butt"  fill="none" 
					points="0,50 50,100 100,50"
				></polyline>
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