import {useContext, useState, createContext, ReactNode, Dispatch, SetStateAction} from 'react';
import "tailwindcss/tailwind.css";

import Toggle from "./Toggle";

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

export function DarkThemeWrapper({children,darkDefault}:{children:ReactNode,darkDefault?:boolean}){
	const [isDark,setDark] = useState(darkDefault??false);
	return <DarkThemeContext.Provider value={{isDark,setDark,children}}><span className={`${isDark?"dark":"light"}`}>{children}</span></DarkThemeContext.Provider>;
}

export function DarkToggle(){

	const {isDark,setDark} = useContext(DarkThemeContext);
	if(isDark == undefined){
		console.error("DarkThemeWrapper missing as ancestor to DarkToggle!");
		return <span>DarkToggle failed to load.</span>;
	}

	return (
		<Toggle label="Dark Mode" isToggled={isDark} setToggled={setDark} height={2} customStyle={{
			others:"rounded-full",
			slider:{on:"bg-green-400"},
			bg:{on:"bg-green-200"}
		}}/>
	);
}