import fs from 'fs';
import path from 'path';

// URL oficial de producción planeada para el negocio
const SITE_URL = 'https://www.fumimax.com.mx';

// Rutas reales e indexables que Angular compila con Lazy Loading
const routes = [
  '',
  '/servicios',
  '/nosotros',
  '/plagas',    // <-- Agregada
  '/proceso',   // <-- Agregada
  '/cobertura',
  '/faq',
  '/contacto'
];

function generateSitemap() {
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>${SITE_URL}${route}</loc>
    <changefreq>monthly</changefreq>
    <priority>${route === '' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

  fs.writeFileSync(path.join('src', 'sitemap.xml'), sitemapXml);
  console.log('✅ sitemap.xml generado con éxito en src/');
}

function generateRobotsText() {
  const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml`;

  fs.writeFileSync(path.join('src', 'robots.txt'), robotsTxt);
  console.log('✅ robots.txt generado con éxito en src/');
}

// Ejecución de la automatización
generateSitemap();
generateRobotsText();
