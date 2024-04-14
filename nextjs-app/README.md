## Getting started

First installation

- Install docker desktop
- Install bun: https://bun.sh/ - `curl -fsSL https://bun.sh/install | bash`
- `bun install`
- Copy the file `.env.example` to `.env`
- `bun dup` - starts the prestashop container with dependencies
- Open http://localhost:8000/admin-dev - credentials: admin@prestashop.com // prestashop
- Advanced parameters > Webservice > Enable PrestaShop's webservice: yes > save
- On the same page: Add new webservice key > Generate > Check all permissions (at least `products` GET permissions)> Save
- Copy the generated API key in .env, in `PRESTASHOP_KEY`
- `bun dev` - starts the web app on http://localhost:3000

Later, to start the app:

- `bun dup` (Docker)
- `bun dev`

## Switch between data sources

See src/app/home/product-actions.ts

## TODO

Remove vitest and only use bun for tests.
Migrate .eslintrc.cjs to the new eslint flat config format.

## Create T3 App

This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`, modified to have a minimalist template.
