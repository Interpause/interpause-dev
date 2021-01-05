import { Dispatch, HTMLProps, useReducer } from "react";
import "twin.macro";

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

export interface ListProps<ItemType> extends HTMLProps<HTMLDivElement>{
	reducerHook:[ListState<ItemType>,Dispatch<ListAction<ItemType>>],
	ListItemComponent:(props: ListItemProps<ItemType>) => JSX.Element
}

export type ListItemProps<ItemType> = {
	dispatch:Dispatch<ListAction<ItemType>>;
	id:string;
} & ItemType;

export function List<ItemType>({reducerHook,ListItemComponent,...props}:ListProps<ItemType>){
	const [state, dispatch] = reducerHook;
	return <div {...props}>
		{Object.entries(state).map(([key,item]) => <ListItemComponent dispatch={dispatch} {...item} key={key} id={key}/>)}
		{props.children}
	</div>;
}

/** Simple example of how to extend List */
export interface TestItemData extends ItemData{
	duration:number;
}

/** Simple example of how to extend List */
export function TestListItem({dispatch,...props}:ListItemProps<TestItemData>){
	const delItem = () => dispatch({type:"delItem",id:props.id});
	return <div tw="flex-row" {...props}><span>{props.children}</span><button onClick={delItem}>X</button></div>;
}

/** Simple example of how to extend List */
export function TestList(){
	const [state,dispatch] = useListReducer<TestItemData>();
	const addItem = () => dispatch({type:"addItem",id:`${Date.now()}`,data:{children:Date.now(),duration:1000}});
	return <List<TestItemData> tw="flex flex-col" ListItemComponent={TestListItem} reducerHook={[state,dispatch]}>
		<button onClick={addItem}>Add Item</button>
	</List>
}
//see Toast.tsx for a complete example