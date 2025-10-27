# VybeOS Dev Build Test

Dev Build Test For VybeOS

#### By Andy Doan

## Tech Overview

- _NextJS 16_: App Router
- _React_: Component Building
- _TailwindCSS 4_: Component Styling
- _Storybook 9_: Component Development Previewing
- _ESLint + Prettier_: Code Styling Rules

## How to Run Locally

Before running the app locally, developers must run `pnpm install` to install the app's required dependencies.

### Local Development with Hot-Reloading

To run locally with hot-reloading in terminal, execute the command `pnpm dev`.

Then visit `localhost:3000` to view the app locally. Changes will automatically refresh the page and update the web app.

### Production Build

To run a production build locally, run the following commands in order:

- `pnpm build`
- `pnpm start`

Then visit `localhost:3000` to view the app locally. Note: Changes to code will not be automatically loaded.

## Storybook

Storybook is included to view components independent of the pages that use them. To preview components and modify fields locally, run `pnpm storybook`.

## Testing

To run jest tests, run `pnpm jest`

## Deployment

When code is pushed to the main branch, Vercel will automatically deploy a production build based on the latest code changes. Once the deployment is successful, changes can be viewed at `https://adoan-dev-test.vercel.app`

## Future Considerations

- Add pre-production stages to the deployment pipeline, so that we may be able to catch regressions as code flows to production. The earlier, the better.
- Add E2E testing via [cypress.io](https://www.cypress.io). E2E tests can be run locally for sanity checking before committing features. They can also be integrated into the deployment pipeline to automatically catch and block regressions as code flows through the pipeline.