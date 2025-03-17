# Repositorio Académico Civil

## Instalación y Build
Para poder correr el proyecto, se requiere lo siguiente:

* Node.js
* Python 3.x

Para instalar las dependencias y correr el proyecto, se debe ejecutar los siguientes comandos:

```bash
npm install
npm start
```

El `npm start` abre un servidor local en el puerto 8080, y se puede acceder a la aplicación en <http://localhost:8080>. También revisa automaticamente si hay cambios para re-compilar el HTML.

## Estructura de Archivos

- `src/`: Aquí van los archivos editables
  - `css/`: Por ahora placeholder con el estilo de la página principal
  - `data/`: Aquí van los archivos de datos `json`
  - `includes/`: Templates base para los archivos `njk`
    - `base.njk`: Template base para todas las páginas
  - `index.njk`: Página principal
- `docs/`: Aqui van los archivos compilados para producción
