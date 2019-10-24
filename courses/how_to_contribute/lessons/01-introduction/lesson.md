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

En el caso de que quieras contribuir en el desarrollo de nuevos features:

- NodeJS
- React
