# Manuel Quinsacara Herrera — Professional Story & Portfolio

Sitio profesional bilingüe (ES/EN) construido como una **historia profesional interactiva** y no como una copia del CV.

## Objetivos

1. Facilitar procesos de búsqueda laboral.
2. Generar conversaciones con recruiters y hiring managers.
3. Demostrar capacidades mediante un portafolio progresivo.
4. Apoyar networking profesional.
5. Construir marca profesional de largo plazo.

## Arquitectura

```text
/
├── index.html
├── portfolio.html
├── 404.html
├── .nojekyll
├── robots.txt
├── sitemap.xml
├── README.md
├── MIGRATION.md
├── UPLOAD_CHECKLIST.md
├── SHA256SUMS.txt
└── assets/
    ├── css/
    │   └── site.css
    ├── js/
    │   └── site.js
    ├── favicon.svg
    ├── og-preview.jpg
    ├── profile.webp
    ├── Perfil_Profesional_Manuel_Quinsacara.pdf
    ├── Manuel_Quinsacara_CV_ATS_General_ES.pdf
    └── Manuel_Quinsacara_Resume_ATS_General_EN.pdf
```

## Principios de diseño

- HTML/CSS/JavaScript sin frameworks ni CDN.
- GitHub Pages puede publicar los archivos directamente.
- La fotografía es local (`assets/profile.webp`), por lo que no cambia con el avatar de GitHub.
- Contacto persistente por Email, WhatsApp y LinkedIn.
- Selector ES/EN persistente cuando `localStorage` está disponible.
- `prefers-reduced-motion` respetado.
- Portfolio marcado `noindex` mientras se encuentra en construcción.
- Contenido basado en información profesional verificada; no incluye S/4HANA ni métricas pendientes de confirmar.

## Portafolio — roadmap

1. **Inventory Health** — En desarrollo.
2. **Maintenance Materials Readiness** — Próximamente.
3. **Logistics Service Performance** — Planificado.
4. Evolución futura posible: **Integrated Supply Chain Control Tower**.

Todos los datasets del portafolio deben ser sintéticos, documentados y sin información confidencial de empleadores anteriores.

## Actualización de contenido

- Textos y estructura: `index.html` / `portfolio.html`.
- Diseño y responsive: `assets/css/site.css`.
- Idioma, scroll, animaciones y links ATS: `assets/js/site.js`.
- Documentos: reemplazar el PDF conservando el mismo nombre de archivo evita editar enlaces.

© 2026 Manuel Quinsacara Herrera
