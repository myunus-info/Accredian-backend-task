# Accredian-backend-task

## PROJECT SETUP

## Local Environment Setup

- [Git](https://git-scm.com/)
- [Node.js v18.7.0](https://nodejs.org/en/)
- [NPM v8.3.0](https://www.npmjs.com/)
- [MySQL](https://www.mysql.com/)
- [Visual Studio Code](https://code.visualstudio.com/)

## Environment Variables for Local Development

> Create a .env file and adjust the following environment variables. DONOT include the file in the source control.

```bash
# application
PORT=<value>

# database
DB_NAME=<value>
DB_HOST=<value>
DB_USER=<value>
DB_PASS=<value>

COOKIE_SECRET=<value>
JWT_SECRET=<value>
JWT_EXPIRES=<value>
```

> Create a database in mysql of XAMPP, put the name on DB_NAME

## NPM Scripts

```bash
$ npm install          # install dependencies
$ npm run seed         # generate required database schemas
$ npm start            # development build
```
