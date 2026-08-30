# Lista de Compras Interactiva

## Descripción
Esta aplicación es una lista de compras moderna y eficiente diseñada para gestionar tareas personales, con soporte offline y cambio dinámico de tema.

## Características principales
- Añadir y eliminar elementos de la lista.
- Marcar elementos como completados o pendientes.
- Ordenamiento automático (pendientes primero, luego completados).
- Cambio dinámico de tema entre modo claro y oscuro.
- Funcionalidad offline mediante Service Worker y almacenamiento local.

## Cómo se utiliza
1. Abre la aplicación en un navegador moderno.
2. Usa el campo de entrada para añadir nuevos elementos a la lista.
3. Haz clic en el checkbox de cada elemento para marcarlo como completado o pendiente.
4. Cambia entre los temas usando el botón de sol/luna en la parte superior.
5. La aplicación funcionará correctamente incluso si pierdes conexión con internet gracias al Service Worker.

## Tecnologías utilizadas
- **HTML5:** Estructura semántica y accesible.
- **CSS3:** Estilos modernos, transiciones suaves y diseño responsivo.
- **JavaScript (ES6+):** Lógica de interacción, manipulación del DOM y manejo de estado.
- **Service Worker (`sw.js`):** Caché offline y sincronización asincrónica.
- **localStorage:** Persistencia de datos en el navegador sin necesidad de un backend.
