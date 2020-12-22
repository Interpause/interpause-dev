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
export function mergeConfigs<K1 extends keyof any,K2 extends keyof any>(defaultConfig:DefaultLayeredConfig<K1,K2>,customConfig?:LayeredConfig<K1,K2>){
	let mergedConfig:Record<K2,Record<K1,string>> = JSON.parse(JSON.stringify(defaultConfig));
	(Object.entries(customConfig??{}) as [K1,InnerConfig<K2>][]).forEach(([k1,v1]) => (Object.entries(mergedConfig) as [K2,Record<K1,string>][]).forEach(([k2,d]) => d[k1] = typeof v1 === "string"? v1 : v1[k2]??d[k1]));
	return mergedConfig;
}