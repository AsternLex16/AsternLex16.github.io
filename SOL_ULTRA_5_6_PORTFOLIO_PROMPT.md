# Prompt para SOL ULTRA 5.6 - Rediseño Grande del Portfolio de Joseph Moreno

## Contexto

Vas a trabajar sobre el portfolio estático de **Joseph Alexis Moreno Inca**, ubicado en:

`C:\Users\erick\OneDrive\Escritorio\Portfolio`

El objetivo no es hacer retoques menores. El objetivo es dar un salto fuerte de calidad, narrativa, diseño y percepción profesional, manteniendo la esencia real de Joseph.

Joseph quiere que el portfolio deje de sentirse como una lista de experiencia y pase a sentirse como un producto personal sólido, memorable y confiable.

## Archivos importantes

- `index.html`: página principal del portfolio.
- `erp.html`: mockup navegable de ERP.
- `src/styles/main.css`: estilos principales.
- `src/scripts/main.js`: interacciones visuales, tema, navegación, filtros.
- `src/scripts/i18n.js`: sistema de traducciones.
- `src/locales/es.json`: contenido en español.
- `src/locales/en.json`: contenido en inglés.
- `assets/documents/cv.pdf`: CV formal.
- `Joseph Moreno.png`: foto profesional de Joseph.
- `assets/logos/acelera-logo.png`: logo de Acelera.
- `assets/logos/simplexitylab-logo.png`: logo de SimplexityLab.
- `CNAME`: dominio del sitio.

## Perfil Real de Joseph

Joseph Alexis Moreno Inca vive en Lima, Perú.

Contacto:

- Email: `josephmorenoinca@gmail.com`
- LinkedIn: `https://linkedin.com/in/josephinca`
- Teléfono del CV: `+51 967144398`

Formación:

- Estudiante de Ingeniería Empresarial y de Sistemas, Universidad Científica del Sur.
- 8vo ciclo según CV.
- Inicio: Agosto 2022 - Actualidad.
- Honores: Top 10% del rendimiento académico / Décimo Superior.

Certificación:

- Data Analytics Essentials, Cisco Networking Academy.
- Julio 2025.
- Enfoque: análisis de datos, ETL, SQL, automatización y reporting.

Idiomas:

- Español nativo.
- Inglés: el CV indica B1, pero el portfolio actual dice B2. Resolver esta inconsistencia con criterio. Si no hay confirmación, usar una formulación prudente como “Inglés funcional / formación Cambridge en UCSUR” o pedir confirmación antes de afirmar B2.

## Posicionamiento Deseado

El portfolio debe posicionar a Joseph como:

**Product Developer especializado en QA, automatización, análisis de datos e IA aplicada a producto digital.**

Debe comunicar que Joseph no solo “hace páginas” o “prueba bugs”, sino que entiende producto, calidad, procesos, datos, UX y automatización.

Evitar que el perfil se sienta disperso. Todo debe conectar bajo una misma idea:

**Joseph convierte bugs, datos e IA en mejoras accionables de producto.**

## Información del CV que Debe Aprovecharse

Resumen profesional del CV:

- Estudiante de Ingeniería Empresarial y de Sistemas.
- Interés en análisis de datos, automatización y mejora de procesos.
- Experiencia práctica en soluciones serverless, integración de APIs y procesamiento de datos.
- Manejo de Excel, Power BI y SQL.
- Capacidad para transformar información en insights útiles para toma de decisiones.
- Alta disposición para aprendizaje y adaptación.

Proyecto principal:

**Sistema de Automatización Serverless para Oportunidades Educativas**

- Proyecto personal, 2025.
- Sistema serverless para identificar y distribuir en tiempo real cursos y programas educativos de pago ofrecidos gratuitamente.
- Implementado en JavaScript sobre Cloudflare Workers.
- Usa Cloudflare KV para estado y deduplicación.
- Evita publicaciones repetidas.
- Permite actualizaciones cuando cambian los datos.
- Integra Telegram API para notificaciones automáticas.
- Procesa datos no estructurados.
- En el portfolio actual se afirma que liberó más de 7,500 cursos con 100% de descuento mediante cupones.

Experiencia:

**Product Developer - Acelera**

- En el portfolio actual aparece como Mar 2026 - Actualidad.
- Trabajo sobre plataforma B2B de estrategia, OKRs, KPIs y backlogs.
- Validación y mejora de producto.
- Más de 150 bugs validados.
- Más de 45 bugs resueltos o gestionados.
- 5+ casos hipercríticos resueltos.
- Incidencias relacionadas con recargas completas de página, inconsistencias multidioma, fricción UX y flujos críticos.

**Asistente de Operaciones Digitales y Desarrollo Web - TribuCalma**

- Nov 2025 - Dic 2025.
- Diagnóstico y resolución de incidencias técnicas.
- Mejora de estabilidad del sitio para +25% de usuarios, según CV.
- Análisis técnico para nuevas funcionalidades.
- Evaluación de flujos, requisitos y alternativas tecnológicas.
- Prototipado de mejoras en estructura y UX.
- Reducción de fricciones de navegación en 20-30%, según CV.
- Investigación de automatización de procesos digitales y mejoras tecnológicas internas.

**Mentor Junior - Universidad Científica del Sur**

- Mar 2025 - Dic 2025.
- Apoyo académico en matemáticas para estudiantes de primeros ciclos.
- Resolución de problemas y fundamentos matemáticos.
- Preparación de material de estudio.
- Desarrollo de comunicación, guía académica y seguimiento.

Skills:

- Excel intermedio/avanzado.
- Power BI.
- SQL.
- JavaScript.
- Python.
- Git / GitHub.
- Automatización y consumo de APIs.
- Análisis y validación de datos.
- Pensamiento analítico.
- Organización y seguimiento.
- Trabajo en equipo.
- Comunicación efectiva.
- Resolución de problemas.
- Codex, Claude, desarrollo asistido con IA, prompt engineering y análisis de edge cases con IA, según el portfolio actual.

## Problemas Actuales del Portfolio

Corregir estos puntos antes de embellecer:

1. Hay problemas graves de encoding en varios archivos.
   Ejemplos actuales:
   - `automatizaciÃ³n`
   - `menÃº`
   - `cientÃ­fica`
   - `Â·`
   - caracteres rotos en README y JSON.

2. El hero actual es correcto, pero no suficientemente memorable.
   Debe integrar la foto profesional `Joseph Moreno.png` de manera protagonista, editorial y seria.

3. Los proyectos están contados como descripciones, no como case studies.
   Falta estructura de problema, proceso, solución, impacto, stack y evidencia.

4. Hay muchas secciones buenas, pero el orden diluye la fuerza.
   Reordenar para que la primera mitad venda impacto rápidamente.

5. El ERP está en `erp.html`, pero se siente como demo aislada.
   Convertirlo en un case study o demo premium, con mejor narrativa y sin caracteres rotos.

6. Falta CTA fuerte a CV.
   Debe haber un botón claro para descargar `assets/documents/cv.pdf`.

7. Falta una sección de impacto cuantificable arriba.

8. El diseño actual tiene personalidad, pero puede sentirse demasiado card-heavy.
   Hacerlo más senior, más editorial, más producto.

## Nueva Estructura Recomendada

Usar esta arquitectura:

1. Hero
   - Foto profesional integrada.
   - Nombre completo.
   - Rol claro.
   - Frase de posicionamiento.
   - CTAs: Ver case studies, Descargar CV, Contactar.
   - Señales rápidas: Lima, Ingeniería Empresarial y de Sistemas, Product Developer, QA, Automatización.

2. Impacto
   - 150+ bugs validados.
   - 45+ bugs resueltos o gestionados.
   - 5+ casos hipercríticos.
   - 7,500+ cursos liberados.
   - +25% usuarios beneficiados por mejoras de estabilidad en TribuCalma.
   - 20-30% reducción de fricción de navegación en TribuCalma.

3. Case Studies
   - Acelera: calidad de producto, bugs, i18n, UX, OKRs/KPIs/backlogs.
   - Bot serverless de cursos gratuitos: Cloudflare Workers, KV, Telegram API, deduplicación, datos no estructurados.
   - ERP operativo: flujo comercial, pipeline, roles, procesos, diseño de producto.
   - TribuCalma: operaciones digitales, diagnóstico técnico, UX, estabilidad, automatización.
   - SimplexityLab / Acelera.io como trabajos web construidos o apoyados, con foco en contribución real.

4. Experiencia
   - Acelera.
   - TribuCalma.
   - Mentoría UCSUR.

5. Playbook de Trabajo
   - Diagnóstico reproducible.
   - Priorización por impacto.
   - Validación funcional y regresiva.
   - Documentación clara.
   - Uso de IA con criterio.
   - Automatización y datos.

6. Stack
   - Dividir por categorías:
     - Producto y QA.
     - Datos.
     - Desarrollo.
     - Cloud / Automatización.
     - IA.
     - Soft skills.

7. Educación y Certificaciones
   - Universidad Científica del Sur.
   - Cisco Data Analytics Essentials.

8. Idiomas
   - Español nativo.
   - Inglés con formulación prudente si no se confirma B2.

9. Contacto
   - Email.
   - LinkedIn.
   - CV.

## Dirección Visual

Rediseñar con una estética más premium y profesional:

- Sobrio, moderno, claro.
- Menos dependencia de tarjetas repetidas.
- Más secciones editoriales.
- Más jerarquía tipográfica.
- Usar la foto como activo visual principal.
- No usar un look genérico de plantilla.
- Evitar que todo sea azul/morado oscuro.
- Mantener modo claro y oscuro.
- Mantener responsive excelente.
- Cuidar que no haya textos superpuestos.
- Cuidar mobile con especial atención.
- Usar visuales reales cuando sea posible: foto, logos, mockup ERP, métricas.

## Diseño Nuevo Propuesto

Usar una dirección visual tipo **Product Operating System / Executive Portfolio**.

La idea: el portfolio debe sentirse como una mezcla entre perfil profesional senior, dashboard de impacto y case study de producto. No debe parecer una landing decorativa ni una plantilla de portafolio genérica.

### Concepto Visual

Crear una interfaz sobria, precisa y con sensación de producto real:

- Header fijo limpio, con navegación corta.
- Hero editorial con foto profesional grande.
- Bloques de impacto tipo dashboard.
- Case studies con estructura de producto.
- Secciones amplias, con aire, pero sin parecer vacías.
- Microinteracciones discretas: hover, reveal suave, filtros, tabs o acordeones.
- Uso de líneas finas, divisores, números grandes y módulos bien alineados.

### Paleta Recomendada

Evitar que todo sea azul oscuro o morado. Usar una paleta profesional con contraste:

- Fondo claro: `#F7F5EF` o `#F8FAFC`.
- Texto principal: `#111827` o `#172033`.
- Superficie: `#FFFFFF`.
- Línea/borde: `rgba(17, 24, 39, 0.12)`.
- Acento principal: verde petróleo / teal profundo `#0F766E` o `#0E7490`.
- Acento secundario: amarillo cálido sobrio `#D97706` o `#F59E0B`.
- Acento técnico: azul moderado `#2563EB`, usado con cuidado.
- Dark mode: fondo `#0B1120`, superficie `#111827`, texto `#E5E7EB`, acentos equivalentes.

No usar gradientes exagerados, orbs decorativos ni fondos genéricos.

### Hero Propuesto

Primer viewport:

- Layout en 2 columnas desktop.
- Izquierda:
  - Eyebrow: `Lima, Perú · Product Developer`
  - H1: `Joseph Moreno Inca`
  - Frase fuerte: `Convierto bugs, datos e IA en mejoras accionables de producto.`
  - Subtexto: `Product Developer especializado en QA, automatización, análisis de datos e IA aplicada a productos digitales.`
  - CTAs:
    - `Ver case studies`
    - `Descargar CV`
    - `Contactar`
- Derecha:
  - Foto `Joseph Moreno.png` integrada en un marco editorial, no como avatar pequeño.
  - Alrededor o debajo de la foto, pequeñas señales:
    - `150+ bugs validados`
    - `7,500+ cursos liberados`
    - `Top 10% académico`

En mobile, la foto debe aparecer pronto, pero sin empujar demasiado el mensaje principal.

### Sección de Impacto

Diseñar como una franja tipo dashboard, no como tarjetas comunes:

- Números grandes.
- Etiquetas claras.
- Una línea de contexto por métrica.

Métricas:

- `150+` bugs validados.
- `45+` bugs resueltos o gestionados.
- `5+` casos hipercríticos.
- `7,500+` cursos liberados mediante automatización.
- `+25%` mejora de estabilidad para usuarios en TribuCalma.
- `20-30%` reducción de fricción de navegación.

### Case Studies

Cada case study debe tener diseño distinto pero consistente:

Formato recomendado:

- Número del caso: `01`, `02`, `03`.
- Título claro.
- Rol de Joseph.
- Problema.
- Qué hizo.
- Stack.
- Impacto.
- Link o demo si existe.

Prioridad visual:

1. Acelera / Product Quality.
2. Bot serverless de cursos gratuitos.
3. ERP operativo.
4. TribuCalma.
5. SimplexityLab / Acelera.io como piezas web.

Para el ERP, crear una preview visual dentro del portfolio: una mini captura construida con HTML/CSS o una sección embebida tipo mockup. Debe sentirse como producto operativo real, no como imagen decorativa.

### Navegación

Reducir el menú. El menú actual tiene demasiados enlaces.

Usar máximo:

- Impacto
- Casos
- Experiencia
- Stack
- Contacto

Mantener cambio de idioma y tema, pero con controles más elegantes y compactos.

### Experiencia

Diseñar como timeline editorial:

- Fecha.
- Empresa.
- Rol.
- 2-3 bullets de impacto.
- Tags pequeños de skills aplicadas.

No saturar con párrafos largos.

### Stack

No mostrar skills como una nube gigante sin jerarquía.

Agrupar:

- Producto & QA: testing funcional, regresión, severidad, documentación, i18n.
- Datos: SQL, Power BI, Excel, ETL, validación de datos.
- Desarrollo: JavaScript, Python, HTML/CSS, Git/GitHub.
- Cloud & Automatización: Cloudflare Workers, KV, APIs, Telegram Bot API, cron jobs.
- IA: Codex, Claude, prompt engineering, análisis de edge cases.

Puede usarse una interfaz con filtros o pestañas, pero debe ser sobria y usable.

### Contacto

Cerrar con una sección fuerte, no genérica:

- Headline: `Construyamos producto con mejor calidad, datos y criterio.`
- Email visible.
- LinkedIn.
- Descargar CV.
- Ubicación: Lima, Perú.

### Sensación Final Esperada

El resultado debe sentirse como:

- Un portfolio de alguien que entiende producto.
- Una demo de criterio técnico.
- Una presentación profesional lista para recruiters, founders o equipos de producto.
- Un sitio que da confianza antes de leer todo.

Si una decisión visual compite con la claridad, priorizar claridad.

## Requisitos Técnicos

- Mantener el proyecto como sitio estático si no hay razón fuerte para migrar.
- Mantener i18n español/inglés.
- Corregir completamente encoding UTF-8.
- Mantener accesibilidad básica:
  - `alt` en imágenes.
  - buen contraste.
  - navegación por teclado.
  - labels/aria donde aplique.
- Mantener SEO básico:
  - title real.
  - description real.
  - metadata social si es viable.
- Agregar enlace visible a `assets/documents/cv.pdf`.
- No romper `CNAME`.
- No eliminar contenido valioso sin reemplazarlo por una versión mejor.
- Revisar que `erp.html` también quede corregido o integrado.

## Tono de Copy

El texto debe sonar:

- Profesional.
- Directo.
- Concreto.
- Seguro, pero no exagerado.
- Orientado a impacto.
- Natural en español e inglés.

Evitar:

- Frases genéricas tipo “apasionado por la tecnología”.
- Exceso de buzzwords.
- Promesas demasiado grandes.
- Inflar experiencia más allá de lo comprobable.

## Frases Base que Puedes Usar

Hero:

> Product Developer especializado en QA, automatización e IA aplicada a producto digital.

Subheadline:

> Conecto análisis de datos, criterio de calidad y desarrollo asistido con IA para convertir problemas reales de producto en mejoras medibles.

Otra alternativa:

> Transformo bugs, datos y procesos en mejoras accionables para productos digitales.

Case study Acelera:

> En Acelera trabajo sobre una plataforma B2B de ejecución estratégica que conecta OKRs, KPIs, backlogs y reportabilidad. Mi aporte se centra en validar flujos críticos, documentar incidencias, cuidar la consistencia multidioma y acompañar mejoras hasta que llegan correctamente al usuario.

Bot:

> Diseñé una automatización serverless que detecta cursos gratuitos, procesa fuentes públicas, controla duplicados con estado persistente y publica oportunidades en Telegram en tiempo real.

Playbook:

> Mi forma de trabajar combina diagnóstico reproducible, priorización por impacto, evidencia clara y validación posterior al fix.

## Criterios de Éxito

El resultado debe lograr que alguien que visite el portfolio entienda en menos de 20 segundos:

1. Quién es Joseph.
2. Qué perfil profesional tiene.
3. Qué impacto real ha generado.
4. Qué proyectos demuestran su capacidad.
5. Cómo contactarlo o descargar su CV.

Además, el resultado debe sentirse:

- Más senior.
- Más confiable.
- Más visual.
- Más claro.
- Más orientado a producto.
- Menos genérico.

## Checklist Final para SOL ULTRA 5.6

Antes de terminar, validar:

- No quedan caracteres rotos.
- El sitio carga en español e inglés.
- El modo oscuro funciona.
- El menú mobile funciona.
- Los CTAs funcionan.
- El CV se puede descargar.
- La foto carga bien y no deforma el layout.
- Los links externos abren correctamente.
- `erp.html` no tiene caracteres rotos.
- El diseño se ve bien en desktop y mobile.
- La narrativa no contradice el CV.
- Se resolvió la inconsistencia B1/B2 de inglés de forma prudente.
