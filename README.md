# MotoHub Platform

Plataforma moderna para entusiastas de las motos, construida con Next.js 14, Tailwind CSS y TypeScript.

## Funcionalidades

1.  **Comparador de Motos**: Compara especificaciones técnicas de hasta 3 modelos simultáneamente.
2.  **Equipación**: Catálogo de productos con redirección a Motocard.
3.  **Ocasión**: Buscador de motos de segunda mano integrado con Mundimoto (referencial).

## Requisitos Previos

Necesitas tener instalado [Node.js](https://nodejs.org/) (versión 18 o superior) en tu ordenador para ejecutar este proyecto.

## Instalación y Ejecución

1.  Abre una terminal en esta carpeta (`moto-platform`).
2.  Instala las dependencias:
    ```bash
    npm install
    ```
    *(Si este comando falla la primera vez, puedes intentar `npm install --force`)*

3.  Ejecuta el servidor de desarrollo:
    ```bash
    npm run dev
    ```

4.  Abre tu navegador en [http://localhost:3000](http://localhost:3000).

## Estructura del Proyecto

-   `app/`: Contiene las páginas y el layout principal.
    -   `comparador/`: Página del comparador.
    -   `equipacion/`: Página de equipación.
    -   `ocasion/`: Página de motos de ocasión.
-   `components/`: Componentes reutilizables (Navbar, Cards, etc).
-   `data/`: Datos de prueba (mock) para simular la base de datos.
-   `lib/`: Utilidades generales.

## Tecnologías

-   **Framework**: Next.js 14 (App Router)
-   **Estilos**: Tailwind CSS
-   **Iconos**: Lucide React
-   **Lenguaje**: TypeScript
