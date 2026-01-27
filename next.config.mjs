/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    output: "export",
    images: {
        unoptimized: true,
    },
    // BasePath solo se activa en producción (al subir a GitHub)
    // para que en local (npm run dev) puedas usar localhost:3000 sin problemas.
    basePath: isProd ? "/suanfonzon.com" : "",
};

export default nextConfig;
