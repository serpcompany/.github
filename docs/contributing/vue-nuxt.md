# vue/nuxt

**Table of Contents:**
- [Conventions](#conventions)
- [Techstack](#techstack)
  - [Project](#project)
  - [SRE](#sre)
  - [Ancilliaries](#ancilliaries)
  - [CICD](#cicd)
- [Testing](#testing)
  - [Test Conventions](#test-conventions)
  - [Unit tests](#unit-tests)


---

## Conventions

- Component names have a 2-word minimum
- Component filenames are `PascalCase`, Example: `components/MyComponent.vue`
- Component element names, ie: when you use a component inside another component/page/etc. should be written in: `kebab-case`, Example: `<my-component/>`

### Components should focus on rendering template HTML by moving component logic to `utils/`
**Example**: Move dynamic classes from the `<template>` area to computed properties: 
```
# incorrect
  <template>
  ...
  :class="{ 'bg-black': isLoggedIn, 'bg-white': !isLoggedIn}"
  </template>


# correct
  <template>
  ...
  :class="loginStatus"
  </template>

  <script>
  const loginStatus = ...
  </script>
```


- Elements have aria role labels - `#accessibility`
- Elements have `loading="lazy"` on images below the fold - `#performance`
- Elements have responsive tailwind classes for padding, text sizes, etc. - `#performance`
- Elements follow semantic html standards


## Techstack

### Project
- [Nuxt](https://nuxt.com/) - Web Framework
- [shadcn-vue](https://www.shadcn-vue.com/) + SERP UI Nuxt - Component Libraries
- [TailwindCSS](https://tailwindcss.com/) - CSS Utility
- [Postgres](https://www.postgresql.org/) - Database
- [Drizzle](https://orm.drizzle.team/) - DB ORM
- [Docker](https://www.docker.com/) - Containerization
- [Redis](https://redis.io/) - In-Memory Cache
- [Cloudflare](https://www.cloudflare.com/) - CDN
- [Mockoon](https://mockoon.com/) - Mocking API
- [Supabase](https://supabase.com/) - Auth & User Info CDN

### SRE
- [TypeScript](https://www.typescriptlang.org/) - Type Checking
- [Zod](https://zod.dev/) - Data Validation
- [Prettier](https://prettier.io/) - Code Formatting
- [ESLint](https://eslint.org/) - Linting / Static Code Analysis
- [Vitest](https://vitest.dev/) - Software Testing Framework
- [HTML Validator](https://nuxt.com/modules/html-validator) - HTML Validation
- [Nuxt Web Vitals](https://nuxt.com/modules/web-vitals) - Performance #TODO
- [Nuxt Booster](https://nuxt.com/modules/nuxt-booster) - Performance #TODO
- [Nuxt API Shield](https://nuxt.com/modules/api-shield) - Security #TODO
- [Turnstyle](https://nuxt.com/modules/turnstile) - Security #TODO

### Ancilliaries
- [Resend](https://resend.com/) - Email Sending
- [Stripe](https://stripe.com/) - Payments #TODO

### CICD
- [LighthouseCI](https://github.com/GoogleChrome/lighthouse-ci)
- [Trufflehog](https://trufflesecurity.com/trufflehog) - Secret Scanning #TODO: change this to secrets.serp.co


## Testing

- Write all vue/nuxt code for our websites and applications following (TDD) Test Driven Development.
- Have have test file (`*.test.js`) for every "real" code file that you write: this allows Vitest to know about the files and get a generate a more accurate coverate report.

**Resources:**

- [Vue Masterclass Course](https://www.udemy.com/course/vue-masterclass/learn): Good course on TDD with Vue & Vitest.


### Test Conventions

**File/folder naming**: `tests/<test-type>/<category-of-thing>/*.test.js`

```
~/tests/unit/utils/*.test.js
~/tests/unit/components/*.test.js
```

### Unit tests

- Should be lightweight & run fast
- Should aim for 100% test coverage
- If there are dependencies, unit tests should mock/stub them out

