# Portfolio

Portfolio personal de desarrollo web para presentar proyectos, tecnologías utilizadas y formas de contacto.

## ¿Qué es esto?

Es una página web personal hecha con Astro para mostrar algunos de mis proyectos y contar un poco sobre mi experiencia en desarrollo web.

También incluye enlaces a mis redes, mi correo y mi CV.

## ¿Cómo lo veo?

Podés verlo directamente desde GitHub Pages:

**[https://al-exan-der.github.io/Portfolio/](https://al-exan-der.github.io/Portfolio/)**

También podés ejecutarlo en local clonando el repositorio:

```bash
git clone https://github.com/Al-exan-der/Portfolio.git
cd Portfolio
```

Necesitás tener Node.js `22.23.4` o superior. Después, instalá las dependencias y levantá el servidor de desarrollo:

```bash
pnpm install
pnpm dev
```

Astro te va a indicar la dirección local para abrir la página en el navegador (por defecto, `http://localhost:4321`). Para generar la versión de producción y probarla localmente, podés usar `pnpm build` y `pnpm preview`.

## ¿Qué tiene?

Está organizado en dos secciones principales:

- **Inicio**: presentación personal, descripción, avatar y enlaces a GitHub, LinkedIn y correo. También permite abrir el CV.
- **Proyectos**: tarjetas con una captura, descripción, tecnologías utilizadas y un enlace al repositorio de cada proyecto.

Los proyectos que aparecen son:

- **Proyecto Islas**: sitio web de la Escuela Técnica N°3 Islas Malvinas.
- **Reactstore**: tienda ficticia de videojuegos con inicio de sesión y carrito. Los datos se guardan en una base de datos MariaDB.
- **Tetris en Java**: versión del Tetris clásico con puntajes y niveles.

Al final de la página está el footer, que vuelve a mostrar los enlaces de contacto y las redes.

## ¿Cómo está armado por dentro?

El repositorio separa el código, los recursos publicados y los materiales de documentación:

- `src/pages/index.astro` — estructura y contenido de la página. Contiene los datos de los proyectos, las redes y las tecnologías que se muestran en cada tarjeta.
- `src/styles/global.css` — estilos de toda la página: colores, tipografías, distribución, tarjetas, efectos y ajustes de accesibilidad.
- `public/` — recursos estáticos que Astro copia al sitio publicado:
  - `iconos/` — iconos de redes y tecnologías.
  - `imagenes/perfil.webp` — avatar de la portada.
  - `imagenes/proyectos/` — capturas de Proyecto Islas, Reactstore y Tetris.
  - `documentos/CV-Alexis-Gomez.pdf` — CV enlazado desde la navegación.
  - `favicon.ico` y `favicon.svg` — iconos de la página, ubicados en la raíz de `public/`.
- `docs/` — materiales de desarrollo y entrega, que no necesita cargar la web:
  - `Documentacion.docx` — documentación técnica del diseño y del código.
  - `Documentacion Cronologica.docx` — registro cronológico de las actividades.
  - `presentaciones/` — presentaciones de CSS y de HTML/Astro.
  - `prototipo/Portfolio-Penpot.pdf` — exportación en PDF del prototipo realizado en Penpot.
- `astro.config.mjs` — configuración de Astro, la URL base del sitio y las tipografías.
- `package.json` y `pnpm-lock.yaml` — dependencias, versión requerida de Node.js y versiones instaladas.
- `.github/workflows/deploy.yml` — configuración del despliegue automático en GitHub Pages al actualizar la rama `main`.

## ¿Quién lo hizo?

Lo hice yo, Alexis Gómez. Me encargué del diseño, la estructura, el contenido y los estilos del portfolio.
