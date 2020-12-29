import { SVGProps } from "react";
import { css } from "twin.macro";

/** All SVG components are designed oriented upwards */
export enum Orientation {
	up=0,
	right=90,
	down=180,
	left=270
};

export interface OrientableSVG extends SVGProps<SVGSVGElement> {
	orientation?:Orientation|number;
}

export * from "./ScrollHint";
export * from "./IsogridBackground";
export * from "./Icon";
export * from "./RainbowText";

export const hideMobileLandscape = css`@media screen and (max-width:1024px) and (orientation:landscape){ display:none; }`;