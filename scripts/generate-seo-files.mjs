import { mkdir, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const workspaceRoot = resolve(process.cwd());
const publicDir = resolve(workspaceRoot, 'public');
const siteUrl = normalizeSiteUrl(process.env.SITE_URL || process.env.VERCEL_URL || 'http://localhost:4200');
const sitemapPath = resolve(publicDir, 'sitemap.xml');

await mkdir(publicDir, { recursive: true });

await writeFile(
  resolve(publicDir, 'robots.txt'),
  ['User-agent: *', 'Allow: /', 'Sitemap: /sitemap.xml', ''].join('\n'),
  'utf8',
);

if (siteUrl.includes('localhost')) {
  await removeFileIfExists(sitemapPath);
} else {
  await writeFile(
    sitemapPath,
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${siteUrl}/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${siteUrl}/cobertura</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>
`,
    'utf8',
  );
}

function normalizeSiteUrl(value) {
  const trimmed = String(value).trim().replace(/\/$/, '');

  if (/^https?:\/\//i.test(trimmed)) {
    return trimmed;
  }

  return `https://${trimmed}`;
}

async function removeFileIfExists(filePath) {
  try {
    const { unlink } = await import('node:fs/promises');
    await unlink(filePath);
  } catch (error) {
    if (error?.code !== 'ENOENT') {
      throw error;
    }
  }
}
