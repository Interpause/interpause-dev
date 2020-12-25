# My Personal Site

## Description

This website is a [Next.js](https://nextjs.org/) project deployed on the [Vercel Platform](https://vercel.com/). Besides the builtin [ReactJS](https://reactjs.org/), I heavily used [TailwindCSS](https://tailwindcss.com/) to style everything including my [`components`](/components). To stretch myself, all the components used were of my own creation, but in the future I would probably use free pre-made components if I can find them.

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

### Links to sutdy

- <https://www.npmjs.com/package/react-structured-data>
- <https://github.com/typescript-cheatsheets/react/blob/main/README.md#basic-cheatsheet-table-of-contents>
- <https://tsdoc.org/pages/tags/alpha/>
