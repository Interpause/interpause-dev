export declare interface bgDefaults {
		rows:number;
		cols:number;
		min_speed:number;
		max_speed:number;
		gap_ratio:number;
		randomness:number;
		colors:string[];
	}
export declare function genBg(kwargs?:object):SVGSVGElement;

