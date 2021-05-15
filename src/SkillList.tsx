import { HTMLProps } from "react";
import tw, { css } from "twin.macro";
import { useToaster } from "../components";
import { LazyImage } from "../components";


export function SkillList(props:HTMLProps<HTMLElement>){
	const toast = useToaster();
	return <section tw="text-left text-lg lg:text-3xl my-2 lg:my-4" {...props}>
		<h2 tw="text-lg lg:(text-4xl)">Stuff I've used previously <br tw="lg:hidden"/>(+links to those projects): </h2>
		<ul css={css`
			li{ ${tw`h-6 lg:h-10 my-2`} }
			h3{ ${tw`inline-block w-20 lg:w-36 text-lg lg:text-3xl`} }
			span{ ${tw`h-full`} }
			img{ ${tw`h-full`} }
		`}>
			<li>
				<h3>Web Dev: </h3>
				<span>
					<LazyImage tw="-mx-2" src="/brand_logos/react.svg" width={841.9} height={595.3} alt="React" href="https://github.com/Interpause/interpause-dev"/>,{' '}
					<LazyImage tw="bg-white rounded px-0.5" src="/brand_logos/nextjs.svg" width={207} height={124} alt="Nextjs" href="https://github.com/Interpause/interpause-dev"/>,{' '}
					<LazyImage tw="bg-white rounded p-0.5" src="/brand_logos/flask.svg" width={256} height={329} alt="Flask" href="https://github.com/Interpause/trailblazers_burden_brothers"/>,{' '}
					<LazyImage tw="bg-white rounded p-0.5" src="/brand_logos/cordova.svg" width={256} height={245} alt="Cordova" href="https://github.com/Interpause/metaTTT_App"/>
				</span>
			</li>
			<li>
				<h3>AI: </h3>
				<span>
					<LazyImage src="/brand_logos/pytorch.svg" width={90.3} height={109.1} alt="Pytorch" href="https://github.com/RealNiceBoat"/>,{' '}
					<LazyImage tw="bg-white rounded" src="/brand_logos/pandas.svg" width={210.21} height={280.43} alt="Pandas" onClick={()=>toast('Turns out I never did a project with Pandas as the main focus. Of course. Turns out I never did a project with Pandas as the main focus. Of course.',{type:"trivial"})}/>,{' '}
					<LazyImage tw="bg-white rounded p-0.5" src="/brand_logos/sklearn.svg" width={275} height={150} alt="SKLearn" onClick={()=>toast(`Sorry, I haven't uploaded the RSI code yet`,{type:"risky"})}/>,{' '}
					NLTK
				</span>
			</li>
			<li>
				<h3>CTF: </h3>
				<span>
					<LazyImage src="/brand_logos/ghidra.png" width={1497} height={1015} alt="Ghidra" onClick={()=>toast(`See Hidden TODO`,{type:"secondary"})}/>,{' '}
					<LazyImage tw="bg-white rounded p-0.5" src="/brand_logos/zap.svg" width={54.98} height={55} alt="ZAP Suite" onClick={()=>toast(`See Hidden TODO`,{type:"secondary"})}/>
					<span tw="hidden lg:inline-block text-trivial text-xs w-60 overflow-hidden">TODO: Consolidate knowledge from StackTheFlags and Whitehacks into writeups</span>
				</span>
			</li>
			<li>
				<h3>Robotics: </h3>
				<span>
					<LazyImage src="/brand_logos/microbit.png" width={350} height={168} alt="microbit" href="https://github.com/Interpause/pxt-esp8266iot"/>,{' '}
					<LazyImage src="/brand_logos/robocup.png" width={2890} height={982} alt="Robocup" onClick={()=>toast(`Will link this to a writeup, or delete.`,{type:"info"})}/>
				</span>
			</li>
		</ul>
		<h2 tw="text-sm lg:(text-lg)">TODO: Make this less boastful</h2>
	</section>;
}