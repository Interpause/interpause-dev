/**
 * @file Primitive card components.
 * @author John-Henry Lim <interpause@interpause.dev>
 */
import { HTMLProps } from 'react';
import tw, { styled } from 'twin.macro';

export interface CardData extends HTMLProps<HTMLElement>{
	/** title of card */
	title:string;
	/** text in card */
	body:string;
	/** link to redirect to when card is clicked */
	link?:string;
}

export const Card = styled.div`
	${tw`flex-auto w-11/12 m-4 p-6 text-left no-underline border-2 rounded transition-colors overflow-ellipsis overflow-hidden sm:(w-5/12 h-64)`}
	${({hocusStyle}:{hocusStyle?:string}) => hocusStyle??""}
	>.header {${tw`mb-4 text-2xl`}}
	>.body {${tw`text-lg`}}
`;

//TODO generalize this further. Make it a wrapper. Needed for Github Card that will be created in a composition manner.
/** Creates a flex card. */
export function BasicCard({title,body,link,...props}:CardData){
	return (
		// @ts-ignore: Card is casted from <div> to <a> but typescript does not recognize it
		<Card as="a" hocusStyle={link&&tw`hocus:(text-blue-400 border-blue-400)`} href={link} {...props}>
			<h3 className="header" css={link&&tw`text-blue-400`}>{title}</h3>
			<p className="body">{body}</p>
		</Card>
	);
}

export interface CardFlexProps extends HTMLProps<HTMLDivElement>{ 
	cards: CardData[],
	cardProps?: HTMLProps<HTMLElement>
}
/** Populates a list of flex cards. */
export function CardFlex({cards,cardProps,...props}:CardFlexProps){
	return (
		<div tw="flex flex-col flex-wrap items-center justify-center sm:(max-w-screen-md flex-row)" {...props}>
			{cards.map((card,i) => <BasicCard {...card} {...cardProps} key={i}/>)}
		</div>
	);
}