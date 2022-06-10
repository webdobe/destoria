import React from 'react';
import fs from 'fs'
import path from "path"
import getConfig from 'next/config'

const { serverRuntimeConfig } = getConfig();
const BASE_URL = 'https://www.destoria.io';

const staticPaths = fs
  .readdirSync(path.join(serverRuntimeConfig.PROJECT_ROOT, './pages'))
  .filter((staticPage) => {
    return ![
      "api",
      "_app.tsx",
      "_document.tsx",
      "404.tsx",
      "sitemap.xml.tsx",
    ].includes(staticPage);
  })
  .map((staticPagePath) => {
    const path = staticPagePath.replace(".tsx", "");
    return `${BASE_URL}/${path === 'index' ? '' : path}`;
  });

export default function handler(req, res) {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/xml')

  // Instructing the Vercel edge to cache the file
  res.setHeader('Cache-control', 'stale-while-revalidate, s-maxage=3600')

  // generate sitemap here
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticPaths
    .map((url) => {
      return `<url>
                  <loc>${url}</loc>
                  <lastmod>${new Date().toISOString()}</lastmod>
                  <changefreq>monthly</changefreq>
                  <priority>1.0</priority>
                </url>
              `;
    })
    .join("")}
    </urlset>`;

  res.end(sitemap)
}