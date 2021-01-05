/*
finish animated toasts

layout the entire site (what pages are there)
^put placeholders for now for parts like timelines paragraphs etc

finish github cards and cardgrid, then work on the blog instead

rush the blog using premade stuff, write some blog posts, then finally figure out how to "embed" (restyle) them into the main site for the portfolio stuff

*/

/* MAIN PAGE DESIGN
 * <Banner>
 * John-Henry Lim
 * aka Hyphen Interpause <logo>
 * <social media icons>
 * 
 * Maker of all trades cause I like procrastinating
 * Web: NextJs, React, React-Redux, GraphQL, Typescript //hide those you dont know yet damnit
 * IoT: Microbit, ... //needs icons
 * Cybersec: ...
 * ...
 * (Links to examples of me learning above languages/frameworks)
 * 
 * Click to see code generating this background!
 * 
 * <End Banner>
 * <Section>
 * Projects: Featured Only <toggle>
 * Github card <stars, forks, watches> (active OR done)
 * short desc //default extracted from readme but can rewrite
 * Preview Readme //default, opens readme in modal
 * OR See More //links to page where I elaborate on the experience
 * <End Section>
 * Who I am
 * <potrait or picture slideshow> <some paragraph spam> See more
 * //see more links to page with like My Vision, My Passion, My Skills, some cringy headers with elab + shortcut at top ofc
 */

/* 
 * Who I am, and project elab pages could be hosted by CMS shared with blog. 
 * ^Argument against having blog as separate project in subdomain
 * Jamstack, Serverless
 */

/*

look at graphQL api route example, look at the different CMS examples, finally consider mdx one more time

*/

/*
 * Insert three.js cube animation somewhere for fun. (inserted into LED cube read more page)
 * TODO: can a CMS like Wordpress (what cms) pipe .mdx files to the blog subdomain? MDX sounds damn cool https://mdxjs.com/ TBH: blog subdomain should be separate repo
 * TODO: Visit other .dev sites to get inspiration (much later)
 * inheritance vs composition part 2: also mention your entire website is coded without OOP at all(maybe in the blog post after doing this site)
 */

 /*
TODO: Report glitch in typescript linter.

REPRODUCE:

function mergeStyles(customStyle:ToggleStyle){
	let merged:Record<StateKeys,Record<StyleKeys,string>> = defaultStyle;
	(Object.keys(customStyle) as StyleKeys[]).forEach(k => {
		let v = customStyle[k];
		if(v === "undefined") return;
		console.log(typeof v); //hover to confirm v is not unioned with undefined anymore.
		(Object.keys(merged) as StateKeys[]).forEach(c => {
			merged[c][k] = v; //linter mistakenly errors that v may still be undefined even when confirmed not to be.
		});
	});
	return merged;
}

	*/