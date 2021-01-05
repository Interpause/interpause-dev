import { createRef, Dispatch, ForwardRefExoticComponent, HTMLProps, useReducer } from "react";
import "twin.macro";
import { SerializedStyles } from "@emotion/react";
import { Transition, TransitionGroup } from 'react-transition-group';

/** Extend this interface to add additional properties to ItemData */
export interface ItemData extends HTMLProps<HTMLDivElement>{

}

export type ListAction<ItemType> = {
	type:"delAll";
} | {
	type:"delItem";
	id:string;
} | {
	type:"addItem";
	id:string;
	data:ItemType;
}

export type ListState<ItemType> = {
	[id:string]:ItemType
};

export const useListReducer = <ItemType,>() => useReducer((state:ListState<ItemType>, action:ListAction<ItemType>) => {
	switch(action.type){
		case "addItem":
			return {...state,[action.id]:action.data};
		case "delItem":
			const {[action.id]:removed,...rest} = state;
			return rest;
		case "delAll":
			return {};
		default:
			console.error(`Invalid action given to listReducer: ${action}`);
			return state;
	}
},{});

export interface animProps {
	timeout: number | { enter?: number, exit?: number, appear?: number };
	styles: {
		[key:string]: SerializedStyles;
	}
}

export interface ListProps<ItemType> extends HTMLProps<HTMLDivElement>{
	reducerHook:[ListState<ItemType>,Dispatch<ListAction<ItemType>>],
	/** (props:ListItemProps<ItemType>) => JSX.Element wrapped by React.ForwardRef */
	listItemComponent:ForwardRefExoticComponent<any>, //I give up.
	animProps?:animProps
}

export type ListItemProps<ItemType> = {
	dispatch:Dispatch<ListAction<ItemType>>;
	id:string;
} & ItemType;

export function List<ItemType>({reducerHook,listItemComponent:Item,animProps,...props}:ListProps<ItemType>){
	const [state, dispatch] = reducerHook;
	return <div {...props}>
		<TransitionGroup component={null}>
			{Object.entries(state).map(([key,item]) => {
				const itemRef = createRef<HTMLElement>();
				return <Transition nodeRef={itemRef} key={key}
					timeout={animProps?.timeout??0}
				>
					{animState => <Item ref={itemRef} dispatch={dispatch} {...item} css={animProps&&animProps.styles[animState]} id={key}/>}
				</Transition>
			})}
		</TransitionGroup>
		{props.children}
	</div>;
}

//see Toast.tsx for an example of how to use these