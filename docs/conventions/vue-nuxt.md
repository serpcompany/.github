# vue/nuxt

## Conventions / Best Practices

- component names have a minimum of 2 words
- component filenames are `PascalCase`
- component element names (ie: when you use a component inside another component/page/etc.) are `kebab-case`
- elements have aria role labels - `#accessibility`
- elements have `loading="lazy"` on images below the fold - `#performance`
- elements have responsive tailwind classes for padding, text sizes, etc. - `#performance`
- elements follow semantic html standards
- move logic away from component - components should focus on rendering template HTML by moving component logic to `utils/`, 

### Testing

- Write all vue/nuxt code for our websites and applications following (TDD) Test Driven Development.
- Have have test file (`*.test.js`) for every "real" code file that you write: this allows Vitest to know about the files and get a generate a more accurate coverate report.

#### Tech stack

- Vitest - [reference](https://vitest.dev/)
- Vitest UI (optional) - [reference](https://vitest.dev/guide/ui.html)
- Vue testing library

#### Conventions

**File/folder naming**: `tests/<test-type>/<category-of-thing>/*.test.js`

```
~/tests/unit/utils/*.test.js
~/tests/unit/components/*.test.js
```

#### Unit tests

- Should be lightweight & run fast
- Should aim for 100% test coverage
- If there are dependencies, unit tests should mock/stub them out

