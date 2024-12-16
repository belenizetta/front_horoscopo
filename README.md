# Horóscopo App - Next.js

Este proyecto es una aplicación de horóscopos construida con Next.js, que incluye funcionalidades para obtener horóscopos y visualizar estadísticas de consultas. A continuación se explica cómo levantar y ejecutar la aplicación en tu entorno local.

# Requisitos Previos

- Node.js (v16 o superior): Descargar Node.js
- npm (v7 o superior): Viene incluido con Node.js

# Pasos para levantar la aplicación

1. Clonar el repositorio.
2. Instalar dependencias.
```bash
    npm install
```
3. Levantar la aplicación en modo de desarrollo.

# Estructura del proyecto

/app                  # Carpeta para la App Router de Next.js
  /layout.js           # Layout principal de la aplicación
  /page.js             # Página principal
/components           # Componentes reutilizables de la UI
  /main-header.js      # Componente del header
/pages                # Páginas en el enrutador tradicional de Next.js
/public               # Archivos estáticos (imágenes, fuentes, etc.)

# Paquetes instalados
La aplicación utiliza varios paquetes y dependencias para su funcionamiento:

- next: Framework de React para construir aplicaciones full-stack.
- react y react-dom: React es la biblioteca de JavaScript para construir interfaces de usuario.
- @fortawesome/react-fontawesome: Iconos de Font Awesome para una interfaz visual atractiva.
- @fortawesome/fontawesome-svg-core: Núcleo de FontAwesome para gestionar los iconos.
- next/font: Para utilizar fuentes de Google en Next.js.
- next/navigation: Para manejar el enrutamiento dinámico de la aplicación.
