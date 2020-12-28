/**
 * @file Suffering with typescript and breaking the tslinter a few times.
 * @author John-Henry Lim <hyphen@interpause.dev>
 */
/** K2 are the keys for the inner config. */
export type InnerConfig<K2 extends keyof any,V extends keyof any> = Partial<Record<K2,V>>|V;
/** K1 are the keys for the outer config, K2 are the keys for the inner config. */
export type LayeredConfig<K1 extends keyof any,K2 extends keyof any,V extends keyof any> = Partial<Record<K1,InnerConfig<K2,V>>>;
/** K1 and K2 are reversed on purpose. This is to invert the config structure. */
export type DefaultLayeredConfig<K1 extends keyof any,K2 extends keyof any,V> = Readonly<Record<K2,Record<K1,V>>>;
/** Merges DefaultLayeredConfig with LayeredConfig, inverting the inner and outer keys in the process while also expanding any general options. See Toggle.tsx for example. */
export function mergeConfigs<K1 extends keyof any,K2 extends keyof any,V extends keyof any>(defaultConfig:DefaultLayeredConfig<K1,K2,V>,customConfig?:LayeredConfig<K1,K2,V>){
	let mergedConfig:Record<K2,Record<K1,V>> = JSON.parse(JSON.stringify(defaultConfig));
	(Object.entries(customConfig??{}) as [K1,InnerConfig<K2,V>][]).forEach(([k1,v1]) => (Object.entries(mergedConfig) as [K2,Record<K1,V>][]).forEach(([k2,d]) => d[k1] = typeof v1 === "object"? v1[k2]??d[k1] : v1));
	return mergedConfig;
}