import {useContext, useState, useEffect, createContext, ReactNode, Dispatch, SetStateAction} from 'react';
import "tailwindcss/tailwind.css";

interface darkHook {
	isDark:boolean;
	setDark:Dispatch<SetStateAction<boolean>>;
	children:ReactNode;
}

const DarkThemeContext = createContext({} as darkHook);

export function DarkThemeWrapper({children,darkDefault=false}:{children:ReactNode,darkDefault?:boolean}){
	const [isDark,setDark] = useState(darkDefault);
	return <DarkThemeContext.Provider value={{isDark,setDark,children}}><div className={`${isDark?"dark":""}`}>{children}</div></DarkThemeContext.Provider>;
}

export function DarkToggle(){

	const {isDark,setDark} = useContext(DarkThemeContext);
	if(isDark == undefined){
		console.error("DarkThemeWrapper missing as ancestor to DarkToggle!");
		return <span>DarkToggle failed to load.</span>;
	}

	return (
		<label className={`select-none`} onClick={() => setDark(!isDark)}>
			Dark Mode{' '}
			<input className={`align-text-bottom`} type="range" min="0" max="1" value={isDark?"1":"0"} disabled></input>
		</label>
	);
}