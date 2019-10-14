# Parrot
Simple app that replies the given word or sentence through a rest API

### Instalation
Parrot requires [Node.js](https://nodejs.org/) to run.
It also uses [nodemon](https://nodemon.io) for development.

##### *Install dependencies:*
```sh
$ npm install
```
##### *Run dev (uses nodemon):*

```sh
$ npm run dev
```

##### *Run production:*
```sh
$ npm start
```

### Docker
An official image is available at [Docker Hub](https://hub.docker.com/r/medeiser/parrot)

A docker configuration file is provided so that an image can also be built.

##### *Build docker image:*
```sh
$ docker build -t parrot .
```

##### *Running docker image:*
```sh
$ docker run --rm -ti -p 3000:3000 parrot
```

### Usage
Parrot can be called with a path variable or with a request parameter.

Examples:
```sh
$ curl -X GET 'http://localhost:3000/parrot/potato'
potato
```

```sh
$ curl -X GET 'http://localhost:3000/parrot?sentence=hello%20world'
hello world
```
