================================================================================
# GUÍA DE REFERENCIA RÁPIDA PARA FRONTEND (KAHUNA)
================================================================================
Esta documentación está estructurada por ORDEN DE UTILIDAD. Aquí encontrarás las clases, variables y métodos que usarás en el día a día para maquetar y animar el sitio.


================================================================================
# 1. ANIMACIONES Y EFECTOS DE SCROLL (animations.css / animations.js)
================================================================================
Lo primero que necesitas saber para dar interactividad a los elementos visuales al hacer scroll.

=========================================
## CÓMO ANIMAR UN ELEMENTO
=========================================
Para hacer que cualquier elemento (card, imagen, título) aparezca suavemente con fade-in desde abajo cuando el usuario hace scroll hacia él:

1. Simplemente añade la clase **`.scrollFadeIn`** en tu HTML:
   ```html
   <div class="card scrollFadeIn">
       <!-- Contenido -->
   </div>
   ```
2. El JavaScript (`animations.js`) se encargará automáticamente del resto usando `IntersectionObserver` de forma ultra-eficiente.

=========================================
## BAJO EL CAPÓ: CLASES Y LÓGICA
=========================================
- **`.scrollFadeIn`**: Estado inicial del elemento (oculto, opacidad 0, y desplazado -21px abajo). Configura la transición suave a `0.3s ease`.
- **`.visible`**: Clase de estado final. La inyecta el script automáticamente cuando el usuario ve al menos el **30% del elemento** (`threshold: 0.3`). Pasa la opacidad a 1 y lo devuelve a su posición original.
- **IntersectionObserver (`scrollFadeInAnimation`)**: El script busca todos los elementos `.scrollFadeIn` y los observa. Al activarse, inyecta `.visible` y ejecuta `unobserve()` para dejar de gastar recursos de hardware en ese elemento.


================================================================================
# 2. CLASES UTILITARIAS Y DE MAQUETACIÓN (layout.css)
================================================================================
Clases utilitarias de uso constante en tu HTML para estructurar, centrar o estilizar rápidamente.

=========================================
## MAQUETACIÓN RÁPIDA
=========================================
- **`.centerChilds`**: Convierte al elemento en un contenedor Flexbox vertical, centrando todos sus hijos (tanto vertical como horizontalmente) y aplicando un espacio uniforme (`gap`) de 34px.
- **`.centerText`**: Alineación rápida de texto al centro (`text-align: center`).
- **`.icon`**: Aplica automáticamente el color de texto base a un icono (hereda `--text`).

=========================================
## CONTENEDORES DE TEXTO (Legibilidad Óptima)
=========================================
Úsalas para estructurar párrafos y títulos de manera que se lean cómodamente sin importar el ancho del monitor.
- **`.titleContainer`**: Limita el ancho de un bloque de título a un máximo óptimo de 40 caracteres (`40ch`). Hace el espaciado entre líneas más denso y dinámico (`line-height: 1.118`).
- **`.textContainer`**: Limita el ancho de textos largos a 65 caracteres (`65ch`), la longitud ideal de lectura cómoda recomendada en UX. Configura un interlineado espacioso y limpio (`1.618`).


================================================================================
# 3. SISTEMA TIPOGRÁFICO (layout.css)
================================================================================
El proyecto maneja tipografía fluida. No uses píxeles (`px`) fijos para textos; en su lugar, utiliza estas clases semánticas e incrementales.

> [!IMPORTANT]
> **REGLA DE ORO RESPONSIVA**: Todo contenedor que contenga texto **DEBE tener asignada obligatoriamente una clase de tamaño de texto** (`.txtNormal`, `.txtSmall`, `.txtLarge`, etc.). Si no se especifica una clase de tamaño, el texto no heredará las funciones `clamp()` de las variables CSS y NO se comportará de manera responsiva.

=========================================
## CLASES SEMÁNTICAS (Estilos de Texto)
=========================================
- **`h1, h2, h3, h4`**: Aplicados a las etiquetas nativas. Tienen por defecto la fuente de títulos (`--font-titles`) y un peso `bolder`.
- **`.txtPrincipal`**: Para textos descriptivos importantes o destacados. Aplica un tamaño `--large`.
- **`.txtDescription`**: Para párrafos normales y de detalle. Aplica un tamaño `--small`.
- **`.txtComplement`**: Para pequeños sobre-títulos o etiquetas secundarias. Texto en mayúsculas (`uppercase`), tamaño `--small` y espaciado entre letras (`letter-spacing`).
- **`.txtMark`**: Resalta palabras clave pintándolas con el color principal de acción (`--cta`).

=========================================
## CLASES INCREMENTALES (Tamaños Fluidos)
=========================================
Fuerzan el tamaño de fuente utilizando la escala adaptativa con `clamp()` (se encogen en móvil y crecen en desktop de forma automática):
- **`.txtXx-small`** (Aplica `--xxSmall`)
- **`.txtX-small`**  (Aplica `--xSmall`)
- **`.txtSmall`**    (Aplica `--small`)
- **`.txtNormal`**   (Aplica `--normal`)
- **`.txtLarge`**    (Aplica `--large`)
- **`.txtX-large`**  (Aplica `--xLarge`)
- **`.txtXx-large`** (Aplica `--xxLarge`)


================================================================================
# 4. COMPONENTES LISTOS PARA USAR (layout.css)
================================================================================
Componentes interactivos y contenedores diseñados para agilizar la maquetación.

=========================================
## BOTONES
=========================================
- **`button` o `.btn`**: Estiliza elementos de llamada a la acción con fondo `--cta`, texto claro, bordes redondeados (`21px`), padding fluido y una sombra 3D física de 5px.
- **`:hover`**: Al interactuar, cambia a `--cta-hover`, se expande ligeramente (`scale(1.03)`) y desplaza su sombra simulando presión.

=========================================
## IMÁGENES
=========================================
- **`.imageSecondary`**: Hace que una imagen llene su contenedor y se mantenga en proporción áurea (`aspect-ratio: 1.618 / 1`) con bordes redondeados de `21px`. Aplica `object-fit: cover` para evitar deformaciones.

=========================================
## FORMULARIOS Y TARJETAS
=========================================
- **`input` / `textarea`**: Estilos listos para formularios con alturas adaptables, bordes claros (`--border`) y paddings proporcionales.
- **`.target`**: Tarjeta/contenedor base con un borde ligero y paddings fluidos para agrupar contenido.

=========================================
## CARRUSEL HORIZONTAL
=========================================
Ideal para listas de tarjetas navegables en móviles.
- **`.carouselFather`**: Contenedor padre. Permite scroll horizontal con "snap action" (se imanta a cada tarjeta al deslizar), ocultando la barra de scroll.
- **`.carouselChild`**: Cada tarjeta del carrusel. Ocupa el 85% de la pantalla para dejar ver sutilmente que hay contenido extra a la derecha y promover la interacción.


================================================================================
# 5. VARIABLES GLOBALES / DESIGN TOKENS (layout.css)
================================================================================
Variables globales declaradas en `:root` que puedes usar en tus archivos CSS locales de página para mantener la coherencia cromática y espacial.

- **`--font-titles` / `--font-body`**: Fuente principal `RobotoSlab`.
- **`--cta` / `--cta-hover`**: Colores principales de la marca (verde oscuro y verde vibrante para hover).
- **`--bg` / `--bg-dark`**: Fondos crema claro (`#fbf7f2`) y gris oscuro (`#1f1f29`).
- **`--text` / `--text-muted` / `--text-light`**: Jerarquía de color tipográfica.
- **`--border`**: Gris claro para divisiones y bordes.
- **Escala de fuentes fluidas con `clamp()`**: `--xxSmall`, `--xSmall`, `--small`, `--normal`, `--large`, `--xLarge`, `--xxLarge`.


================================================================================
# 6. ESTRUCTURA Y RESETS GLOBALES (layout.css)
================================================================================
Configuraciones globales que corren detrás de escena en tu HTML y que no necesitas modificar en el día a día.

- **`*`**: `box-sizing: border-box` aplicado globalmente.
- **`html`**: Overflow horizontal desactivado (`overflow-x: hidden`) y desplazamiento fluido.
- **`body`**: Utiliza CSS Grid para organizar la aplicación en 3 bloques independientes (`header`, `main`, `footer`), forzando al footer a pegarse abajo incluso si la página tiene poco contenido.
- **`body::-webkit-scrollbar`**: Barra de desplazamiento nativa del navegador oculta para un look minimalista y de aplicación de escritorio.
================================================================================
