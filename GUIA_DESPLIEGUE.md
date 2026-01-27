# Guía de Despliegue en GitHub Pages

Sigue estos pasos para subir tu proyecto `moto-platform` al repositorio `https://github.com/Chriscassiel/suanfonzon.com`.

## 1. Preparación del Repositorio

Abre una terminal en la carpeta `Nueva carpeta` (donde están estos archivos) y ejecuta los siguientes comandos uno por uno:

```powershell
# Iniciar git (si no lo has hecho ya)
git init

# Conectar con tu repositorio
git remote add origin https://github.com/Chriscassiel/suanfonzon.com.git

# (Opcional) Si ya tenías un remote 'origin', usa este comando en su lugar:
# git remote set-url origin https://github.com/Chriscassiel/suanfonzon.com.git
```

## 2. Guardar Cambios

```powershell
git add .
git commit -m "Initial commit of MotoHub Platform"
```

## 3. Subir el Código (Rama Principal)

```powershell
# Subir a la rama main (o master)
git branch -M main
git push -u origin main
```

## 4. Desplegar en GitHub Pages

Este paso creará una rama especial llamada `gh-pages` con la versión optimizada de tu web.

```powershell
# Esto ejecutará 'npm run build' automáticamente antes de subir
npm run deploy
```

## 5. Configuración en GitHub

1.  Ve a tu repositorio en GitHub: [https://github.com/Chriscassiel/suanfonzon.com](https://github.com/Chriscassiel/suanfonzon.com)
2.  Entra en **Settings** > **Pages**.
3.  Asegúrate de que en "Build and deployment", la rama seleccionada ("Source") sea **gh-pages**.
4.  ¡Listo! En unos minutos tu web aparecerá publicada.

---

> **Nota sobre Rutas**: Si ves que la página carga pero los estilos o imágenes fallan, es posible que necesitemos ajustar el `basePath`.
> Si tu URL final es `https://Chriscassiel.github.io/suanfonzon.com/`, avísame para ajustar el archivo `next.config.mjs`.
