/**
 * @file running out of patience. expect my code quality to drop significantly.
 * @author John-Henry Lim <hyphen@interpause.dev>
 */
import { createContext, Dispatch, HTMLProps, useContext, useEffect, useReducer, useRef } from "react";
import tw, { css, styled } from "twin.macro";
import { StyledComponent } from "@emotion/styled";
import { colorTypes } from "../theme/baseTheme";

export interface ToastData{
	text:string,
	toastRef:symbol,
	type:colorTypes,
	duration:number,
	props?:StyledComponent<HTMLDivElement>
}
export type ToastAction = { type:"addToast", data:Partial<ToastData> } | { type:"removeToast", data:Symbol } | {type:"removeAll"};
function toastReducer(state:ToastData[], action:ToastAction){
	switch(action.type){
		case "addToast":
			//assign defaults
			const newdata:ToastData = {
				text:"EMPTY",
				toastRef:Symbol("Toast Reference"),
				type:"normal",
				duration:20000,
				props:undefined,
				...action.data
			};
			return [...state,newdata];
		case "removeToast":
			return state.filter(v => v.toastRef !== action.data);
		case "removeAll":
			return [];
		default:
			throw new Error("how did you even? THIS IS TYPESCRIPT DAMNIT");
	}
}

export const ToastContext = createContext<Dispatch<ToastAction>|undefined>(undefined);

const ToastDiv = styled.div`
	${tw`flex flex-row rounded border-2 p-1 lg:max-w-2xl`}
	${({type}:{type:string}) => css`
		color:var(--color-${type??"normal"});
		background-color:var(--color-${type??"normal"}-soft);
		border-color:var(--color-${type??"normal"}-hard);
	`}
`;
const ToastContainer = styled.div`
	${tw`fixed flex flex-col justify-end inset-x-2 bottom-2 gap-2 lg:left-auto z-100`}
`;
function Toast({text,toastRef,type,duration,props}:ToastData){
	const dispatch = useContext(ToastContext);
	const closeFunc = async () => {
		dispatch&&dispatch({type:"removeToast",data:toastRef});
	};
	useEffect(() => {
		setTimeout(closeFunc,duration);
	},[]);
	return <ToastDiv {...props} type={type}><p>{text}</p><button tw="float-right align-middle p-1 ml-2" onClick={closeFunc}>x</button></ToastDiv>;
}

export function ToastWrapper(props:HTMLProps<HTMLDivElement>){
	const [state, dispatch] = useReducer(toastReducer,[]);
	const container = useRef<HTMLDivElement>(null);
	return <ToastContext.Provider value={dispatch}>
		<ToastContainer ref={container}>
			{state.map((t,i) => <Toast {...t} key={i}/>)}
		</ToastContainer>
		{props.children}
	</ToastContext.Provider>;
}

export function useToaster(){
	const dispatch = useContext(ToastContext);
	return (text:string,conf?:Partial<Omit<ToastData,"ref"|"text">>) => dispatch&&dispatch({type:"addToast",data:{...conf,text:text}});
}
