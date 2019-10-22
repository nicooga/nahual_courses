El objetivo de este sitio es proveer una herramienta ágil para la creación de cursos a los colaboradores de Proyecto Nahual.
La idea también es que podamos fácilmente implementar cualquier feature que quereamos que tengan nuestros cursos.

Tal vés el curso mas importante que podemos brindar en este sitio sea cómo colaborar mediante crear *tu propio curso* acá (valga la redundancia).

Esta herramienta esta enfocada mayormente a los desarrolladores, para quienes tal vez nos resulte mucho mas fácil escribir cursos usando código fuente y nuestro editor de preferencia.

Eventualmente podremos pensar en una forma de crear cursos sin necesidad de tocar código fuente.

Resumidamente, el flow para crear un curso consiste en:

1. Editar el código fuente de este repo creando una carpeta en `/courses`. Profundizaremos acerca del formato enseguida.
2. Crear un pull request en Github. Recibimos el feedback de otros compañeros de Nahual, y mergeamos el nuevo curso
3. Deployamos este sitio, tal vez primeramente a un entorno de staging.

## Que necesitás saber

La idea de este proyecto es proveer una forma de crear cursos usando las mismas herramientas que usamos todos los días como desarrolladores:

- Markdown, YAML: dos lenguajes de markup muy populares
- Pull requests de GitHub
- NodeJS (?). Entendemos que no todo el mundo está familiarizado con NodeJS. *Próximamente proveeremos la versión dockerizada para que los que no estén familiarizados con NodeJS puedan facilmente correr una versión local del sitio*.

## Primeros pasos

Para empezar vas a necesitar descargar este repo.

~~~bash
git clone git@github.com:nicooga/nahual_courses.git
cd nahual_courses
~~~

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

# o si te es más cómodo, usando node-foreman y el archivo Procfile
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
