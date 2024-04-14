## Getting started

First installation

- Install docker desktop
- Install bun: https://bun.sh/ - command (linux/mac/WSL): `curl -fsSL https://bun.sh/install | bash`
- Copy the file `nextjs-app/.env.example` to `nextjs-app/.env`
- `bun dup` - starts the prestashop container with dependencies

### Setup Prestashop

- Open http://localhost:8000/admin-dev - credentials: admin@prestashop.com // prestashop
- Advanced parameters > Webservice > Enable PrestaShop's webservice: yes > save
- On the same page: Add new webservice key > Generate > Check all permissions (at least `products` GET permissions)> Save
- Copy the generated API key in `nextjs-app/.env`, in `PRESTASHOP_KEY`

### Setup Strapi

- Copy the file `.env.example` to `.env` (in the git repo root directory)
- Open http://localhost:1337/admin
- Sign up
- Open http://localhost:1337/admin/settings/api-tokens (or: Settings > API Tokens)
- Create new API Token
- Fill:
  - Token duration: Unlimited
  - Token type: Full access
  - Save
- Copy the token displayed, paste in `nextjs-app/.env` > `STRAPI_API_KEY` key

### Finally

- `bun dev` - starts the web app on http://localhost:3000

Later, to start the app:

- `bun dev` - it includes `bun install` and `bun dup` (Docker)

## Switch between data sources

See src/app/home/product-actions.ts

## TODO

Remove vitest and only use bun for tests.
Migrate .eslintrc.cjs to the new eslint flat config format.
In the root package.json, this script doesn't work for me: `"dev": "cd nextjs-app && bun run dev"`, I don't know why. I get an error: `Error: listen EADDRINUSE: address already in use 0.0.0.0:1337`, which makes no sense. When I copy-paste the `cd nextjs-app && bun run dev` part directly in my bash, it works. When I run `bun dev` directly from the subdirectory, it works.
