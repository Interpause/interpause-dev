import "tailwindcss/tailwind.css";

export interface CardData{
	link:string;
	title:string;
	body:string;
}

export default function Grid({cards}:{cards:CardData[]}){
	return (
		<div className={`flex items-center justify-center flex-wrap sm:max-w-screen-md flex-col sm:flex-row`}>
			{cards.map((card,i) => 
				<a 
					className={`flex-auto w-11/12 sm:w-5/12 m-4 p-6 text-left no-underline text-current border-current border-2 rounded transition-colors hover:text-blue-400 hover:border-blue-400`}
					href={card.link}
					key={i}
				>
					<h3 className={`m-0 mb-4 text-2xl text-blue-400`}>{card.title}</h3>
					<p className={`m-0 text-xl`}>{card.body}</p>
				</a>
			)}
		</div>
	);
}