# Nest CRUD API Backend

## Description

The Nest CRUD API Backend is an API where users can create, read, update & delete post

## Technologies used

- NestJS
- Postgres


## Setup

- Clone the repo

```bash
$ npm install
```

## Running the app

- Make sure to have _Postgres_ installed
- Copy `.env.example` to `.env ` then set the port
- Setup database credential in `.env`
- Install packages: `npm install` or `yarn install`
- Migrate the database: `npm run migrate:run` or `yarn migrate:run`
- Run the app in dev mode: `npm run stat:dev` or `yarn start:dev`
- Run the app in prod mode: `npm run build && npm start:prod` or `yarn build && yarn start:prod`

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```


