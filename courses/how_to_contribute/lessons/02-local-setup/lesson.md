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

Una vez tengas instalado docker, es cuestion de correr el siguiente comando:

~~~bash
docker-compose -f docker-compose.development.yml up --build
# o lo mismo, pero a través de este pequeño script, para ahorrarnos unas lineas
./scripts/run
~~~

Este comando va a buildear las imágenes para cada servicio (API y front) y los va a correr.
La primera vez puede tomar tiempo porque tiene que instalar muchas cosas.
La segunda vez va a haber cacheado las imágenes, con lo cual el tiempo de inicio se vuelve casi instantáneo.

Finalmente, es cuestión de abrir el sitio en http://localhost:8080.

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
