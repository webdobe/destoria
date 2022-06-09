import React from 'react';
import * as fs from 'fs'

const BASE_URL = 'https://www.destoria.io';

const Sitemap = () => {
  return;
};

export async function getServerSideProps({res}) {
  const staticPaths = fs
    .readdirSync("pages")
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

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;