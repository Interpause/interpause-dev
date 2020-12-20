/**
 * @file Suffering with typescript and breaking the tslinter a few times.
 * @author John-Henry Lim <interpause@interpause.dev>
 */
/** K2 are the keys for the inner config. */
export type InnerConfig<K2 extends keyof any> = Partial<Record<K2,string>>|string;
/** K1 are the keys for the outer config, K2 are the keys for the inner config. */
export type LayeredConfig<K1 extends keyof any,K2 extends keyof any> = Partial<Record<K1,InnerConfig<K2>>>;
/** K1 and K2 are reversed on purpose. This is to invert the config structure. */
export type DefaultLayeredConfig<K1 extends keyof any,K2 extends keyof any> = Readonly<Record<K2,Record<K1,string>>>;
/** Merges DefaultLayeredConfig with LayeredConfig, inverting the inner and outer keys in the process while also expanding any general options. See Toggle.tsx for example. */
export function mergeConfigs<K1 extends keyof any,K2 extends keyof any>(customConfig:LayeredConfig<K1,K2>,defaultConfig:DefaultLayeredConfig<K1,K2>){
	let mergedConfig:Record<K2,Record<K1,string>> = defaultConfig;
	(Object.keys(customConfig) as K1[]).forEach(k1 => {
		let v1 = customConfig[k1];
		if(v1 === "undefined") return;
		(Object.keys(mergedConfig) as K2[]).forEach(k2 => {
			if(typeof v1 === "string") mergedConfig[k2][k1] = v1;
			else if(typeof v1 !== "undefined"){
				let v2 = v1[k2];
				if(typeof v2 === "string") mergedConfig[k2][k1] = v2;
			}
		});
	});
	return mergedConfig;
}