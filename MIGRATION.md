# Migración del repositorio

Este paquete reemplaza la arquitectura anterior basada en `index.html` + `_includes/site-main.html` por un `index.html` estático y autónomo.

## Para actualizar el repositorio existente

1. Sube/reemplaza **todos los archivos de este paquete**, preservando la carpeta `assets/`.
2. Puedes eliminar del repositorio anterior estos archivos/carpetas porque ya no son utilizados:
   - `_includes/site-main.html`
   - carpeta `_includes/` si queda vacía
   - `assets/profile.webp` (la web usa el avatar público de GitHub y un fallback SVG local)
3. Comprueba en GitHub Pages que estén disponibles:
   - `/`
   - `/portfolio.html`
   - `/assets/Perfil_Profesional_Manuel_Quinsacara.pdf`
   - `/assets/Manuel_Quinsacara_CV_ATS_General_ES.pdf`
   - `/assets/Manuel_Quinsacara_Resume_ATS_General_EN.pdf`

No es necesario subir archivos DOCX al repositorio.


### Fotografía de perfil

**NO eliminar `assets/profile.webp`.** El nuevo `index.html` la utiliza como recurso local para que la fotografía no cambie cuando cambie el avatar de GitHub. Si reemplazas el repositorio completo, conserva/copiala desde el repositorio actual antes de borrar archivos antiguos.
