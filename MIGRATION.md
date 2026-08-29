# Migración al repositorio reconstruido

Esta versión reemplaza la arquitectura anterior. No depende de Jekyll, Liquid ni `_includes`.

## Recomendación

1. Haz una copia de seguridad o crea un tag/branch del repositorio actual.
2. Elimina los archivos de la versión anterior que no existan en este paquete, especialmente `_includes/` si todavía está presente.
3. Sube **todo el contenido de este paquete a la raíz del repositorio**.
4. Conserva los nombres y rutas de `assets/`.
5. En GitHub Pages, publica desde la rama `main` y la raíz `/`.
6. Espera la publicación y revisa:
   - página principal;
   - selector ES/EN;
   - botones de CV;
   - portfolio;
   - Email, WhatsApp y LinkedIn;
   - versión móvil.

## Por qué existe `.nojekyll`

El sitio es HTML/CSS/JS estático y no necesita procesamiento Jekyll. `.nojekyll` hace que GitHub Pages publique la estructura directamente.

## No eliminar

- `assets/profile.webp`: fotografía local del perfil.
- Los tres PDFs si deseas que los botones sigan funcionando.
- `assets/css/site.css` y `assets/js/site.js`.
