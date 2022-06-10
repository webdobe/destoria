const fs = require('fs')

const BASE_URL = 'https://www.destoria.io';

function addPage(page) {

  return `<url>
      <loc>${`${page}`}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>1.0</priority>
    </url>
  `
}

const staticPaths = fs
  .readdirSync('./pages')
  .filter((staticPage) => {
    return ![
      "api",
      "_app.tsx",
      "_document.tsx",
      "404.tsx",
    ].includes(staticPage);
  })
  .map((staticPagePath) => {
    const path = staticPagePath.replace(".tsx", "");
    return `${BASE_URL}/${path === 'index' ? '' : path}`;
  });

async function generateSitemap() {
  // Ignore Next.js specific files (e.g., _app.js) and API routes.
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${staticPaths.map(addPage).join('\n')}
    </urlset>`

  fs.writeFileSync('public/sitemap.xml', sitemap)
}

generateSitemap()