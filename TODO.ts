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
use styled-components, somehow include tailwind, replace all instances of bool?property:"" with just bool&&property, one example is in nav
TWIN.MACRO IS FUCKING MAGIC
seriously consider vue because of its CSS preprocessor swap out thingy (so its intuitive to include tailwind utilities) and greater state conciousness
Pass props forwards (only for those that makes sense) (customize what is passed forwards by extending React types) (use union to have different accepted proptypes)
modify dark variant to depend on presence of light class (create custom disabled theme for NavLink) (IMPOSSIBLE AS OF CSS2)
^DarkThemeWrapper should read default from browser preference
Other things based on NavItem would be dropdown, Navbar needs to be collapsable. 
BaseCard has a logo, header, badges? and wraps content

(Background image gradient) Gradient Color Stops (see if can be used for your text perhaps by making text transparent)
<div class="text-5xl font-extrabold ...">
  <span class="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
    Hello world
  </span>
</div>
^thats how

look at box alignment in general
look at Grid in general and think about rewriting the css flow from scratch

https://nextjs.org/docs/api-reference/next/amp
^maybe look at? or nah

Nextjs has some sort of magic that prevents repeat rendering of components even without creating a sort of master page structure that displays the routes
they recommend creating a component that accepts the page itself as children to put those base components like navbar etc
might be possible to wrap it around _app itself? it works. hm for pages that dont want it/custom headers, could do smth use keys, or some sort of provided context to disable

look at graphQL api route example, look at the different CMS examples, finally consider mdx one more time

use vercel CLI to test serverless functions locally

perhaps consider downloading 3rd party components
*/

/*
 * Insert three.js cube animation somewhere for fun. (inserted into LED cube read more page)
 * How to hide browser heading initially on android by default?
 * TODO: can a CMS like Wordpress (what cms) pipe .mdx files to the blog subdomain? MDX sounds damn cool https://mdxjs.com/ TBH: blog subdomain should be separate repo
 * TODO: Visit other .dev sites to get inspiration (much later)
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