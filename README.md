# Portfolio

Sitio estático personal de Joseph Moreno Inca.

## Estructura

```text
.
├── assets/
│   ├── documents/
│   │   └── cv.pdf
│   └── icons/
│       └── favicon.svg
├── src/
│   ├── locales/
│   │   ├── en.json
│   │   └── es.json
│   ├── scripts/
│   │   ├── i18n.js
│   │   └── main.js
│   └── styles/
│       └── main.css
├── CNAME
└── index.html
```

## Convenciones

- `index.html` mantiene la estructura y usa keys `data-i18n`.
- `src/locales/*.json` contiene el contenido traducible.
- `src/scripts/i18n.js` detecta idioma, carga JSON y aplica traducciones.
- `src/scripts/main.js` contiene interacciones visuales, tema, navegación y filtros.
- `src/styles/main.css` contiene la capa visual responsive.
- `assets/` concentra documentos e íconos.
