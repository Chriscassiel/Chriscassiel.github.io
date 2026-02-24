const functions = require('firebase-functions');
const admin = require('firebase-admin');
const fs = require('fs');
const path = require('path');

admin.initializeApp();
const db = admin.firestore();

// Head Template for injection
const metaTemplate = (title, description, image, url, schema) => `
    <title>${title}</title>
    <meta name="description" content="${description}">
    <meta property="og:title" content="${title}">
    <meta property="og:description" content="${description}">
    <meta property="og:image" content="${image}">
    <meta property="og:url" content="${url}">
    <meta property="og:type" content="website">
    <link rel="canonical" href="${url}">
    <script type="application/ld+json">${JSON.stringify(schema)}</script>
`;

exports.renderSEO = functions.https.onRequest(async (req, res) => {
    const indexPath = path.resolve(__dirname, '../public/index.html');
    let html = fs.readFileSync(indexPath, 'utf8');

    const pathParts = req.path.split('/').filter(p => p);
    let title = 'MotosComparador - La mejor elección';
    let description = 'Compara motos nuevas, usadas, equipamiento y noticias de MotoGP.';
    let image = 'https://motos-comparador-seo.web.app/og-image.jpg';
    let url = `https://motos-comparador-seo.web.app${req.path}`;
    let schema = { "@context": "https://schema.org", "@type": "WebSite", "name": "MotosComparador" };

    try {
        if (pathParts[0] === 'moto' && pathParts[1]) {
            const doc = await db.collection('motos').doc(pathParts[1]).get();
            if (doc.exists) {
                const data = doc.data();
                title = `${data.marca} ${data.modelo} (${data.año}) - Ficha Técnica`;
                description = `Compara la ${data.marca} ${data.modelo}. Potencia: ${data.potencia}, Cilindrada: ${data.cilindrada}.`;
                image = data.image;
                schema = {
                    "@context": "https://schema.org",
                    "@type": "Vehicle",
                    "name": `${data.marca} ${data.modelo}`,
                    "manufacturer": data.marca,
                    "model": data.modelo,
                    "modelDate": data.año,
                    "description": description
                };
            }
        } else if (pathParts[0] === 'motogp' && pathParts[1]) {
            const doc = await db.collection('motogp_noticias').doc(pathParts[1]).get();
            if (doc.exists) {
                const data = doc.data();
                title = data.titulo;
                description = data.resumen;
                image = data.imagen;
                schema = {
                    "@context": "https://schema.org",
                    "@type": "NewsArticle",
                    "headline": data.titulo,
                    "datePublished": data.fecha,
                    "image": [data.imagen],
                    "description": data.resumen
                };
            }
        }
    } catch (error) {
        console.error('SEO Rendering Error:', error);
    }

    const injectedMeta = metaTemplate(title, description, image, url, schema);
    html = html.replace('<!-- SEO_PLACEHOLDER -->', injectedMeta);

    res.status(200).send(html);
});

exports.generateSitemap = functions.https.onRequest(async (req, res) => {
    let sitemap = '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';

    // Add static pages
    const smRoutes = ['', '/comparador', '/equipamiento', '/segunda-mano', '/motogp'];
    smRoutes.forEach(route => {
        sitemap += `<url><loc>https://motos-comparador-seo.web.app${route}</loc><changefreq>daily</changefreq></url>`;
    });

    // Add dynamic motos
    const motosSnap = await db.collection('motos').get();
    motosSnap.forEach(doc => {
        sitemap += `<url><loc>https://motos-comparador-seo.web.app/moto/${doc.id}</loc></url>`;
    });

    sitemap += '</urlset>';
    res.set('Content-Type', 'text/xml');
    res.status(200).send(sitemap);
});
