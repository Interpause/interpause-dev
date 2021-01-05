import { createContext, useContext, Dispatch, useEffect } from "react";
import tw, { css } from "twin.macro";
import { colorTypes } from "./theme/baseTheme";
import { ItemData, ListItemProps, useListReducer, ListAction, List, ListProps } from "./List";
import { Icon, ICON } from "./deco";

export interface ToastData extends ItemData{
	type?:colorTypes;
	duration:number;
}
export const DefaultToastData = {
	type:"normal",
	duration:1000
} as const;

export const ToastContext = createContext<Dispatch<ListAction<ToastData>>>(()=>console.error("ToastContext was not provided!"));

export const getToastStyle = (type:string) => css`
	${tw`relative flex flex-row rounded border-2 lg:max-w-2xl transition-all`}

	color:var(--color-${type});
	background-color:var(--color-${type}-soft);
	border-color:var(--color-${type}-hard);
`;

export function Toast({type="normal",dispatch,...props}:ListItemProps<ToastData>){
	const delToast = () => dispatch({type:"delItem",id:props.id});
	useEffect(()=>{

	},[props.duration])
	return <div css={getToastStyle(type)} {...props}><span tw="p-1">{props.children}</span><Icon as="button" icon={ICON.cross} tw="flex-none w-4 mr-1 ml-2 self-stretch opacity-60 hocus:opacity-100" onClick={delToast}/></div>;
}

export function ToastWrapper(props:Omit<ListProps<ToastData>,"ListItemComponent"|"reducerHook">){
	const [state, dispatch] = useListReducer<ToastData>();
	return <ToastContext.Provider value={dispatch}>
		<List<ToastData> 
			tw="fixed flex flex-col justify-end inset-x-2 bottom-2 gap-2 lg:left-auto z-100"
			ListItemComponent={Toast}
			reducerHook={[state,dispatch]}
			{...props}
		>{""}</List>
		{props.children}
	</ToastContext.Provider>;
}

export function useToaster(){
	const dispatch = useContext(ToastContext);
	return (text:string,conf?:Partial<ToastData>) => dispatch({
		type:"addItem",
		id:`${Date.now()}`,
		data:{...DefaultToastData,...conf,children:text}
	});
}
