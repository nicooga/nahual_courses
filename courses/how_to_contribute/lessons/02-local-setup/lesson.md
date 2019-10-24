## Primeros pasos

Para empezar vas a necesitar descargar este repo.

~~~bash
git clone git@github.com:nicooga/nahual_courses.git
cd nahual_courses
~~~

Luego hay que instalar las dependencias necesarias.

## Instalación

Hay dos opciones, voy a empezar por la mas aparentemente más sencilla

### Opción 1: usando Docker

Docker es una plataforma de containerización que nos permite fácilmente empaquetar servicios e instalarlos donde sea. Los casos de usos de docker son:

 - en producción, para instalar nuestros servicios fácilmente en el entorno donde va a correr.
 - para desarollo, para que los programadores puedan fácilmente instalar y correr nuestros servicios sin importar que sistema operativo usen

El primer paso va a ser instalar docker. Docker tiene excelente documentación para la instalación:

- [para Windows](https://docs.docker.com/docker-for-windows/install/)
- [para Linux (Ubuntu en particular pero hay para otras distros también)](https://docs.docker.com/install/linux/docker-ce/ubuntu/)
- [para MacOS](https://docs.docker.com/docker-for-mac/install/)

### Opción 2: usando NodeJS

Si ya estas familiarizado con el desarrollo en NodeJS y tenés instalado el lenguaje, puede que ésta opción te resulte más fácil.

Vamos a instalar las dependencias del front y la API:

~~~bash
cd api
yarn install
cd ../front
yarn install
~~~

Y finalmente corremos los dos servicios. Podemos correlos uno por uno:

~~~bash
cd api
yarn start
cd front
yarn start
~~~

... o si te es más cómodo, usando node-foreman y el archivo Procfile

~~~bash
yarn global add node-foreman
foreman start
~~~

Y finalmente abrir el sitio en http://localhost:8080.

## Formato

A cada curso le corresponde una carpeta bajo el directorio `/courses`.

Cada curso tiene una cantidad variable de lecciónes.

La estructura de un curso sería esta:

~~~bash
courses
│
└── curso_1 # el nombre de la carpeta no importa
    │
    ├── manifest.yml # Acá va la configuración del curso
    └── lessons # Acá van las lecciones de este curso
        │
        ├── 01-lesson-1 # Lós números son opcionales, pero dan órden a las lecciones
        │   ├── manifest.yml # Configuración de esta lección
        │   └── lesson.md # La lección en formato Markdown
        │
        └── 02-lesson-2
            └── ...
~~~

Los archivos de configuración `manifest.yml` se escriben en formation YAML (parecido al JSON, pero más poderoso).
Por ahora la única configuración posible es espeficar la propiedad `title`, ya sea para el curso o la lección.

Ejemplo de un archivo `manifest.yml`:

~~~yaml
---
title: Mi primer curso o lección
~~~

## Gracias!

Esperamos con ansias ver pull requests en este proyecto para crear más cursos!
