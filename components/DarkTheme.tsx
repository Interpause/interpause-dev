/**
 * @file Localized Dark Theme using Context API
 * @author John-Henry Lim <interpause@interpause.dev>
 */
import {useContext, useState, createContext, ReactNode, Dispatch, SetStateAction} from 'react';

import { Toggle, ToggleProps } from "./Toggle";

/* 
 * NOTE: as there is no way to exclude elements based on whether it has a certain ancestor. 
 * Localised dark themes cannot be implemented by ignoring descendants of a div with .light class.
 * Therefore, higher up the ancestry wrappers will always override lower ones.
 */

interface darkHook{
	isDark:boolean;
	setDark:Dispatch<SetStateAction<boolean>>;
}

export const DarkThemeContext = createContext({} as darkHook);

/** Wrap this around element tree to localize dark theme. */
export function DarkThemeWrapper({children,darkDefault}:{children:ReactNode,darkDefault?:boolean}){
	const [isDark,setDark] = useState(darkDefault??false);
	return (
		<DarkThemeContext.Provider value={{isDark,setDark}}>
			<div className={isDark?"dark":"light"}>{children}</div>
		</DarkThemeContext.Provider>
	);
}

/** Place this as descendant to DarkThemeWrapper to toggle localized dark theme. */
export function DarkToggle(props:Partial<ToggleProps>){
	const {isDark,setDark} = useContext(DarkThemeContext);
	if(typeof isDark === "undefined"){
		console.error("DarkThemeWrapper missing as ancestor to DarkToggle!");
		return <span>DarkToggle failed to load.</span>;
	}
	
	return (
		<Toggle label="Dark Mode" toggleHook={[isDark,setDark]} height={1.5} customStyle={{
			others:"rounded-full",
			slider:{on:"bg-green-400"},
			bg:{on:"bg-green-200"}
		}} {...props}/>
	);
}