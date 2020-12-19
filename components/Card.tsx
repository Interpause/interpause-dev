import "tailwindcss/tailwind.css";

export interface CardData{
	title:string;
	body:string;
	link?:string;
}

// TODO get flex to attempt to make cards uniform height too at md breakpoint

export function Card({data}:{data:CardData}){
	return (
		<a 
			className={`flex-auto w-11/12 sm:w-5/12 sm:h-64 m-4 p-6 text-left no-underline text-current border-current border-2 rounded transition-colors ${data.link?"hover:text-blue-400 hover:border-blue-400":""}`}
			href={data.link}
		>
			<h3 className={`m-0 mb-4 text-2xl ${data.link?"text-blue-400":""}`}>{data.title}</h3>
			<p className={`m-0 text-xl`}>{data.body}</p>
		</a>
	);
}

export default function CardFlex({cards}:{cards:CardData[]}){
	return (
		<div className={`flex items-center justify-center flex-wrap sm:max-w-screen-md flex-col sm:flex-row`}>
			{cards.map((card,i) => <Card data={card} key={i}/>)}
		</div>
	);
}