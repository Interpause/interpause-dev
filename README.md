# My Personal Site

## Description

This website is a [Next.js](https://nextjs.org/) project deployed on the [Vercel Platform](https://vercel.com/). Besides the builtin [ReactJS](https://reactjs.org/), I heavily used [TailwindCSS](https://tailwindcss.com/) to style everything including my [`components`](/components).

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
```

## VSCode Workspace

As my IDE of choice is currently VSCode, you may notice I did not gitignore the `.vscode` folder which contains some configurations. I highly recommend installing [TailwindCSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss).
