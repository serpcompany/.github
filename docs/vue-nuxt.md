# Vue/Nuxt - Website/app Stack

Items marked with a `*` mean they aren't finalized, and/or a suggestion/coming soon.

### Project
- [Nuxt](https://nuxt.com/) - Web Framework
- [NuxtUI](https://ui.nuxt.com/getting-started) + [NuxtUI Pro](https://ui.nuxt.com/pro/getting-started) - Component library
- [TailwindCSS](https://tailwindcss.com/) - CSS Utility
- [Postgres](https://www.postgresql.org/) - Database
- [Drizzle](https://orm.drizzle.team/) - DB ORM
- [Docker](https://www.docker.com/) - Containerization
- [Redis](https://redis.io/) - In-Memory Cache
- [Cloudflare](https://www.cloudflare.com/) - CDN
- [Mockoon](https://mockoon.com/) - Mocking API
- [Supabase](https://supabase.com/) - Auth & User Info CDN

### CICD / Reliability
- [TypeScript](https://www.typescriptlang.org/) - Type Checking
- [Zod](https://zod.dev/) - Data Validation
- [Prettier](https://prettier.io/) - Code Formatting
- [ESLint](https://eslint.org/) - Linting / Static Code Analysis
- [Vitest](https://vitest.dev/) - Software Testing Framework
- [LighthouseCI](https://github.com/GoogleChrome/lighthouse-ci)
- [HTML Validator](https://nuxt.com/modules/html-validator) - HTML Validation
- `*`[Nuxt Web Vitals](https://nuxt.com/modules/web-vitals) - Performance
- `*`[Nuxt Booster](https://nuxt.com/modules/nuxt-booster) - Performance
- `*`[Nuxt API Shield](https://nuxt.com/modules/api-shield) - Security
- `*`[Trufflehog](https://trufflesecurity.com/trufflehog) - Secret Scanning
- `*`[Turnstyle](https://nuxt.com/modules/turnstile) - Security


### Ancilliaries
- `*`[Resend](https://resend.com/) - Email Sending
- `*`[Stripe](https://stripe.com/) - Payments


## Conventions
1. Order of items in an SFC: `<template>, <script>, <style>`
2. Component tags in a template use: `PascalCase`
3. Prop names use: `camelCase`
4. Pass props in template use: `kebab-case` // `<MyComponent some-props="value"/>`
5. Custom components names should be multi worded: BAD: `Button.vue`; GOOD: `SerpButton.vue`
