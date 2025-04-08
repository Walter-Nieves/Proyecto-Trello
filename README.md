# Proyecto inspirado en la plataforma de Trello

Este proyecto tiene `HTML`, `SASS` Y `JavaScript` en el que se busca maquetar y darle funcionalidad a un aplicativo de tareas , centrado en 'CSS' avanzado con animaciones y modularizado con el procesador 'SASS', y logica de programacion avanzada con ES Modules y POO.

## Tecnologias usadas

-`HTML` para la estructura de la aplicacion.
-`SASS` para el estilo y la estructura de la aplicacion.
-`JavaScript` para la logica de la aplicacion.
- `ES Modules` para la modularizacion de la aplicacion.
-`POO` para la programacion orientada a objetos.

## Enlace a recursos

Algunas de las imagenes e iconos fueron tomadas de: 

-[Bootstrap Icons] (https://icons.getbootstrap.com/)
-[Wikepedia](https://es.wikipedia.org/wiki/Archivo:Trello-logo-blue.svg)
-[npm](https://www.npmjs.com/package/sass)

## Comandos utilizados para SASS    

Para modularizar el `CSS`, se utilizo el procesador `SASS`, y se utilizaron los siguientes comandos en la terminal:

1. Descargamos [`Node`](https://nodejs.org/es) para poder descargar paquetes como `SASS`

2. Verificamos que `Node` y `npm` se instalaron correctamente :

```
   node -v
   npm -v

```

3. Instalamos el procesador `SASS` en nuestro proyecto:
```
npm install sass --save-dev
```

4. creamos el archivo `.scss` con el que trabajaremos:
```
touch style.scss

```
5. Ejecutamos `SASS` para que convierta nuestro `.scss` en un `.css` regular:

```
npx sass style.scss style.css
```

6. Si deseamos que siempre este actualizando el `.css` cuando hagamos algun cambio, agregamos la flag `--watch`:
```
npx sass --watch style.scss style.css
```

## Resumen

Las tecnologias empleadas en el proyecto fueron:

| Tecnologia | Funcion |
|-|-|
|`HTML`|Estructura del proyecto|
|`CSS`|Estilos del proyecto|
|`SASS`|Preprocesador para modulizar el `CSS`|
|`Bootstrap Icons`|Iconos para el proyecto|
|`JavaScript`|Logica del proyecto|
|`ES Modules`|Para modulizar la logica en archivos independientes|
|`POO`|Trebajar con clases para los _usuarios_ y las _notas_|
|`npm`|Gestor de paquetes para instalar `SASS`|
|`Node`|Entorno de ejecucion para `npm`|
|`Git`|Control de versiones para el proyecto|
|`GitHub`|Repositorio remoto para el proyecto|









