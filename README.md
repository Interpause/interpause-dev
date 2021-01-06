# My Personal Site

## Overview

I wanted this to be a monorepo, site-focused project, hence I went with [Next.js](https://nextjs.org/). Being built on [ReactJS](https://reactjs.org/), it was a good opportunity for me to learn to use a modern web development framework. I also wanted to experience developing the components myself, hence I used [TailwindCSS](https://tailwindcss.com/) — no premade CSS components, just utility classes. Later, I discovered [twin.macro](https://github.com/ben-rogerson/twin.macro), designed to integrate CSS-in-JS libraries like [Emotion](https://emotion.sh/) with Tailwind. The resulting setup is quite comfortable for me, and I will probably use it as a template for future non-website projects like [Redux-Saga](https://redux-saga.js.org/) games or [React Native](https://reactnative.dev/) apps (like my planned [MetaTTT](https://github.com/Interpause/metaTTT_App) rewrite).

That said, excessive time and effort was spent making barely decent components. For future website projects, like the blog-side of this website, I will be following the norm of using component libraries. My eyes are currently set on [React Bootstrap](https://react-bootstrap.github.io/) for that, though for a paid option, [Material Design Bootstrap](https://mdbootstrap.com/) looks cool.

## Description

This is a [Next.js](https://nextjs.org/) project deployed on the [Vercel Platform](https://vercel.com/). While I called them "barely decent", I designed my [components](/components)(except those under /personal) with reuseability in mind, with some being relatively free of dependencies, so perhaps you could take a look at them?

When completed, this website will serve several purposes:

- Portfolio website to show off
- Post blog posts
- Host games
- Redirect my email

My current progress can be seen at [interpause.dev](https://interpause.dev).

## Testing

First, install [Yarn 2](https://yarnpkg.com/):

```bash
npm install -g yarn
```

The project is already configured to use Yarn 2 ~~and its [Plug'n'Play](https://yarnpkg.com/features/pnp) feature, hence the absence of the `node_modules` folder~~. (Curse certain libraries)

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

As my IDE of choice is currently VSCode, you may notice I did not gitignore the `.vscode` folder which contains some configurations. I highly recommend installing [TailwindCSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss). You will also need to follow these [instructions](https://github.com/ben-rogerson/twin.macro/discussions/227) to get it to work with twin.macro.

## Notes for Myself

### Interesting

- <https://www.npmjs.com/package/react-structured-data> for site metadata that shows up in search engine crawlers

## Code Philosophy

While making a portfolio website, it is totally possible to take the easy way out and use a site creator like Wix or Squarespace. But I wanted to use this opportunity to learn and would feel much more proud to Design-It-Yourself rather than use a component picker. Nonetheless, no one codes a website from machine language, so of course there are some reasonable concessions to make. For example, I chose to use Next.js to remove the parts I was not interested on working on this time (referring to backend development, see MetaTTT-server for another time when it was necessary for me to code the backend). I also chose to use React rather than vanilla HTML and JS (see MetaTTT-app for literally vanilla web dev) this time given its a modern framework many developers use. Finally, it came to deciding what CSS library to use. Initially, I was going to use Bootstrap given I was familiar with it, but I discovered TailwindCSS while learning stuff rapidly, and decided on it. This is because Tailwind, while providing sensible utility classes, does not enforce any design choices on you like Bootstrap, and fits much more in theme with the Design-It-Yourself approach I have been taking. Nonetheless, this entire trip was a pain in the butt because I underestimated how far I would go in componentizing stuff, and in the future, would probably just use a refined opensource component library. Also, I would never resort to Wix. The lowest I have ever gone was Bootstrap Studio.

## Revision to Code Philosophy

~~I have decided not to code all the components from scratch. Nonetheless, I still want good customisability and extendability of components from the library I choose. As such, Material Design for Bootstrap is immediately excluded as a short browse of its demo shows its highly opinionated design (and paywall), not suited for a personal portfolio site~~.

~~Currently deciding between react-bootstrap (still opinionated but not paywalled), headless-ui (early development but "unstyled, fully accessible" "designed to integrate beautifully with tailwind" sounds good) and windmill (also tailwind + react but seems to have less activity/stars than headless-ui. I guess it is actually lacking components)~~.

~~I have decided to split into 3 branches, diy-tailwind (make components myself), react-bootstrap (using react-bootstrap for components), headless-ui (using headless-ui for components)~~.

On Further thought, none of these tailwind component libraries are developed in the least. I might as well continue developing components myself. Will do react-bootstrap if I give up.

I was looking at Vuejs' approach for styling components, then realised I probably should use styled-components (I used emotion instead actually). And then I found tailwind.macro. I think I am satisified with this setup for component styling.

## On twin.macro & tailwind

After thinking about it a bit, I guess in the context of twin.macro, TailwindCSS should be used as nothing more than a set of utility classes, with the componentization of styles done using styled components rather than CSS styles added as plugins to Tailwind. Also means I will refrain from adding Tailwind plugins if it does not fit into the theme of utility only.

## Theming

### ThemeProvider Approach

- theme is object of any passed to provider

- theme is accessed by:
  1. in css prop, pass a function accepting theme & returning what css prop usually accepts (CSS object, CSS template literals, array of the two)
  2. in styled component, theme is a prop that is provided
  3. useTheme() is a hook that can be used in non-styled components

### twin.macro's theme object Approach

- access any config even objects in the tailwind.config.js in any part of the code using template literal

- ``` theme`colors.customColor` ``` returns the value set in theme.colors.customColor in the config file

- Why do this instead of directly defining a new tw class & using that in the tw template literal???

  - Tedious to redefine certain colors for all the utility types for example, would be easier to pull it directly

### CSS vars example Approach

- Use Globals component to inject CSS variables

- define tw classes to use CSS vars rather than predefined values

- easily change vars depending on the theme using CSS selectors

- IMO the correct way to do things here.

### Color agnostic CSS names

I read up online and why do people call things cornflower or ocean what are they even getting at. I was initially going to copy Bootstrap's primary, secondary, etc but then I realised it didn't make sense for me either. So finally I brainstormed a bit and came up with my own:

- normal
- special
- info
- trivial
- good
- risky
- bad
- theme

of which all of them have 3 variants:

- DEFAULT (for text, button fill, etc)
- soft (for background, divides, placeholders, etc)
- hard (for borders, rings, hard lines, etc)

There is a baseStyle included at the top level.

lmao tbh `theme` is weird. I did not originally want to include it and it serves a similar purpose as `special` but if I chose gold for my theme, it ain't visually good for accenting something as special. So a distinction had to be made.
