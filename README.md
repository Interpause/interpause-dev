# My Personal Site

## Description

This website is a [Next.js](https://nextjs.org/) project deployed on the [Vercel Platform](https://vercel.com/). Besides the builtin [ReactJS](https://reactjs.org/), I heavily used [TailwindCSS](https://tailwindcss.com/) to style everything including my [`components`](/components). To stretch myself, all the components used were of my own creation, but in the future I would probably use free pre-made components if I can find them. One option is [wrapped Material Design components](https://material.io/components), paid options include [MDB](https://mdbootstrap.com/docs/react/)(wait it's actually free?)

When completed, this website will serve several purposes:

- Portfolio website to show off
- Post blog posts
- Host games
- Redirect my email

## Testing

First, install [Yarn 2](https://yarnpkg.com/):

```bash
npm install -g yarn
```

The project is already configured to use Yarn 2 and its [Plug'n'Play](https://yarnpkg.com/features/pnp) feature, hence the absence of the `node_modules` folder.

Next, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to see the website.

## Deployment on Vercel

Here are some necessary environment variables to set:

```env
FORCE_BUILDER_TAG=canary // needed due to Yarn 2
WEBSITE_URL=https://example.com
```

## VSCode Workspace

As my IDE of choice is currently VSCode, you may notice I did not gitignore the `.vscode` folder which contains some configurations. I highly recommend installing [TailwindCSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss).

## Notes for Myself

### TailwindCSS Things

- `.animate` so you don't have to make animations yourselves.
- `.ring` to make borders but not actually borders around objects.
- `.divide` to separate elements with line (can it be vertical too?).
- `.space` controls margins between child elements rather than let child element set it. Might be useful.
- `.object-cover` and `.object-center` for `<img>` and `<video>` allows easy to scale banners that preserve aspect ratio. Not needed for `<svg>` though.

### Links to study

- <https://www.npmjs.com/package/react-structured-data>
- <https://github.com/typescript-cheatsheets/react/blob/main/README.md#basic-cheatsheet-table-of-contents>
- <https://tsdoc.org/pages/tags/alpha/>

## Code Philosophy

While making a portfolio website, it is totally possible to take the easy way out and use a site creator like Wix or Squarespace. But I wanted to use this opportunity to learn and would feel much more proud to Design-It-Yourself rather than use a component picker. Nonetheless, no one codes a website from machine language, so of course there are some reasonable concessions to make. For example, I chose to use Next.js to remove the parts I was not interested on working on this time (referring to backend development, see MetaTTT-server for another time when it was necessary for me to code the backend). I also chose to use React rather than vanilla HTML and JS (see MetaTTT-app for literally vanilla web dev) this time given its a modern framework many developers use. Finally, it came to deciding what CSS library to use. Initially, I was going to use Bootstrap given I was familiar with it, but I discovered TailwindCSS while learning stuff rapidly, and decided on it. This is because Tailwind, while providing sensible utility classes, does not enforce any design choices on you like Bootstrap, and fits much more in theme with the Design-It-Yourself approach I have been taking. Nonetheless, this entire trip was a pain in the butt because I underestimated how far I would go in componentizing stuff, and in the future, would probably just use a refined opensource component library. Also, I would never resort to Wix. The lowest I have ever gone was Bootstrap Studio.

### Revision to Code Philosophy

I have decided not to code all the components from scratch. Nonetheless, I still want good customisability and extendability of components from the library I choose. As such, Material Design for Bootstrap is immediately excluded as a short browse of its demo shows its highly opinionated design (and paywall), not suited for a personal portfolio site.

Currently deciding between react-bootstrap (still opinionated but not paywalled), headless-ui (early development but "unstyled, fully accessible" "designed to integrate beautifully with tailwind" sounds good) and windmill (also tailwind + react but seems to have less activity/stars than headless-ui. I guess it is actually lacking components).

I have decided to split into 3 branches, diy-tailwind (make components myself), react-bootstrap (using react-bootstrap for components), headless-ui (using headless-ui for components).

On Further thought, none of these tailwind component libraries are developed in the least. I might as well continue developing components myself. Will do react-bootstrap if I give up.

I was looking at Vuejs' approach for styling components, then realised I probably should use styled-components (I used emotion instead actually). And then I found tailwind.macro. I think I am satisified with this setup for component styling.
