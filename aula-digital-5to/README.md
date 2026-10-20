# Aula Lab 🚀

Sitio web interactivo para mostrar en una clase de **5.º año** cómo se conectan HTML, CSS y JavaScript. Diseño responsive, modo claro/oscuro y laboratorio de mensajes personalizados.

## Archivos

- `index.html`: estructura y contenido de la página.
- `styles.css`: diseño, colores, disposición y animaciones.
- `script.js`: interacciones, eventos, funciones y variables.

## Cómo ejecutarlo

1. Descargá el proyecto y descomprimilo.
2. Abrí `index.html` con Chrome, Edge o Firefox. No hace falta instalar nada.
3. Para mostrar el código, abrí la carpeta en Visual Studio Code.

> Las fuentes de Google requieren internet. Si no hay conexión, el navegador mostrará fuentes alternativas.

## Subirlo a GitHub

Desde la terminal dentro de la carpeta:

```bash
git init
git add .
git commit -m "Primera versión de Aula Lab"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/TU-REPOSITORIO.git
git push -u origin main
```

Antes de `git remote add origin`, creá un repositorio **vacío** en GitHub y reemplazá la URL por la de tu repositorio. Para publicar el sitio, ingresá a **Settings → Pages**, elegí **Deploy from a branch** y seleccioná **main / (root)**; guardá la configuración.

## Mini actividad para estudiantes (10–15 minutos)

1. **HTML:** cambiar el título principal `Las ideas se convierten en realidad.` por otro.
2. **CSS:** cambiar el color de `--accent` dentro de `:root`.
3. **JavaScript:** cambiar un emoji y un mensaje del objeto `colors`.
4. Probar los cambios actualizando el navegador.
5. **Git:** ejecutar `git status` y explicar qué archivos se modificaron.

## Conceptos para explicar

- **HTML** = estructura (los elementos que existen).
- **CSS** = apariencia (cómo se ven los elementos).
- **JavaScript** = comportamiento (qué ocurre al interactuar).
- **DOM** = representación del documento que JavaScript puede modificar.
- **Git** = registro de versiones del proyecto.
- **GitHub** = plataforma donde podemos alojar y colaborar en repositorios Git.
