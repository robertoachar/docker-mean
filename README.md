# docker-mean

[![License][license-badge]][license-url]

> A playground for Docker with MEAN stack.

![Markdown Course](preview/docker-mean.gif)

# Development

* Cloning the repo

```bash
$ git clone https://github.com/robertoachar/docker-mean.git
```

* Installing dependencies

```bash
$ npm install
```

# Docker

* Build image

```bash
$ docker-compose build
```

* Start containers

```bash
$ docker-compose up
```

* Stop containers

```bash
$ docker-compose down
```

# User Endpoint

Endpoint for managing users.

| Method | Endpoint   | Description               |
| ------ | ---------- | ------------------------- |
| GET    | /users     | Retrieves a list of users |
| GET    | /users/:id | Retrieves a specific user |
| POST   | /users     | Creates a new user        |
| PUT    | /users/:id | Updates user              |
| DELETE | /users/:id | Deletes user              |

# Postman

* `postman/docker-mean.postman.json`

# Author

[Roberto Achar](https://twitter.com/robertoachar)

# License

[MIT](https://github.com/robertoachar/docker-mean/blob/master/LICENSE)

[license-badge]: https://img.shields.io/github/license/robertoachar/docker-mean.svg
[license-url]: https://opensource.org/licenses/MIT
