# vue/nuxt

## Conventions / Best Practices

- Component names have a minimum of 2 words
- Component filenames are `PascalCase`
- Component element names (ie: when you use a component inside another component/page/etc.) are `kebab-case`
- Components should focus on rendering template HTML by moving component logic to `utils/`, 
- Elements have aria role labels - `#accessibility`
- Elements have `loading="lazy"` on images below the fold - `#performance`
- Elements have responsive tailwind classes for padding, text sizes, etc. - `#performance`
- Elements follow semantic html standards


## Techstack

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

