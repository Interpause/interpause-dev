/**
 * @file Localized Dark Theme using Context API
 * @author John-Henry Lim <interpause@interpause.dev>
 */
import "tailwindcss/tailwind.css";
import {useContext, useState, createContext, ReactNode, Dispatch, SetStateAction} from 'react';

import { Toggle, ToggleProps } from "./Toggle";

/* 
 * NOTE: whoops tailwind only has a dark theme, and as it looks for the ancestor,
 * I cannot implement localised dark themes this way.
 * That said, this code could work in the future if they happen to implement multi-themes.
 */

interface darkHook {
	isDark:boolean;
	setDark:Dispatch<SetStateAction<boolean>>;
	children:ReactNode;
}

export const DarkThemeContext = createContext({} as darkHook);

/** Wrap this around element tree to localize dark theme. */
export function DarkThemeWrapper({children,darkDefault}:{children:ReactNode,darkDefault?:boolean}){
	const [isDark,setDark] = useState(darkDefault??false);
	return (
		<DarkThemeContext.Provider value={{isDark,setDark,children}}>
			<div className={`${isDark?"dark":"light"}`}>{children}</div>
		</DarkThemeContext.Provider>
	);
}

/** Place this as descendant to DarkThemeWrapper to toggle localized dark theme. */
export function DarkToggle(props:Partial<ToggleProps>){
	const {isDark,setDark} = useContext(DarkThemeContext);
	if(isDark == undefined){
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