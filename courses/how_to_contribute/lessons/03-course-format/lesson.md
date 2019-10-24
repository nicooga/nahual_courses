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

Finalmente, nada mejor que aprender a lo monito imitador. Podés el código fuente de éste y todos los demas cursos en este repo o en la versión web en GihHub: https://gihub.com/nicooga/nahual_courses.
