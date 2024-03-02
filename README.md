## Getting started

- Install docker desktop
- Install bun: https://bun.sh/ - `curl -fsSL https://bun.sh/install | bash`
- `bun install`
- Copy the file `.env.example` to `.env`
- `bun dup` - starts the prestashop container with dependencies
- Open http://localhost:8000/admin-dev - credentials: admin@prestashop.com // prestashop
- Advanced parameters > Webservice > Enable PrestaShop's webservice: yes > save
- On the same page: Add new webservice key > Generate > Check all permissions > Save
- Copy the generated API key in .env, in `PRESTASHOP_KEY`

- `bun dev` - starts the web app on http://localhost:3000

## Create T3 App

This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`.

## To do

- Continue to drop tRPC on the projects list example. Introduce validation, e.g. with next-safe-action ?
- Try TanStack Query + server action as replacement for tRPC, e.g. with a custom hook as Theo presented
- Optimistic UI update: try tRPC, useOptimistic (native) and next-safe-action's useOptimisticAction
- Select an example that will become the reference of my current recommended way to code data fetches (server/client)
- next-safe-action: Authentication with middleware to secure server actions. Replicate the tRPC middleware.
- Type-safe forms: try TanStack Form: https://tanstack.com/form/latest/docs/framework/react/guides/ssr
- Try row access control to simplify/secure the queries (easy to forget a `WHERE userId = session ID`).

## Next router events

- Show a loader while loading pages: https://www.npmjs.com/package/nextjs-progressloader
- Workaround to confirm before leaving a page (e.g. something not saved yet): https://github.com/vercel/next.js/discussions/41934#discussioncomment-8174608
- Wrapper around `<Link>`: https://github.com/vercel/next.js/discussions/41934#discussioncomment-6459723

## Note about Neon

If you get the error `TypeError: bufferUtil.mask is not a function`, you need to add `bufferutil` to `optionalDependencies` in package.json.

https://www.answeroverflow.com/m/1202264285422559262

## tRPC and server components support

Follow-up the official support of RSC in tRPC: https://github.com/trpc/trpc/issues/3297

## Server actions vs tRPC

Issues with server actions:

- Cannot cancel requests, which can lead to race conditions (e.g. updating an item many times very quickly with optimistic UI). Example workaround: queue hook.
- No easy middleware (authentication), although next-safe-action helps for that.
- No native zod validation, although next-safe-action helps for that.

Issues with tRPC

- No easy integration with data fetched on server components. TODO: see if there is a way to initialise the client tRPC hook with the server data.
