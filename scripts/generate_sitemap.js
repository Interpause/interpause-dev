/**
 * Adapted from https://github.com/vercel/next.js/tree/canary/examples/with-sitemap
 */
const fs = require('fs');
const globby = require('globby');

const pageExtensions = ['.tsx','.jsx','.mdx','.md'];

function addPage(page) {
	let path = page.replace('pages','');
	for(let ext of pageExtensions) path = path.replace(ext,'');
	const route = path === '/index' ? '' : path

  return `  <url>
    <loc>${`${process.env.WEBSITE_URL}${route}`}</loc>
    <changefreq>hourly</changefreq>
  </url>`
}

async function generateSitemap() {
  // Ignore Next.js specific files (e.g., _app.js) and API routes.
  const pages = await globby([
    `pages/**/*{${pageExtensions}}`,
    `!pages/_*{${pageExtensions}}`,
    '!pages/api',
  ])
  const sitemap = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(addPage).join('\n')}
</urlset>`

  fs.writeFileSync('public/sitemap.xml', sitemap)
}

generateSitemap()