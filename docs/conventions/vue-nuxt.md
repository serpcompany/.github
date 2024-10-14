# vue/nuxt

## Conventions

### Components
- component names have a minimum of 2 words
- component filenames are `PascalCase`
- component element names (ie: when you use a component inside another component/page/etc.) are `kebab-case`


## Testing
Write all vue/nuxt code for our websites and applications following (TDD) Test Driven Development.

#### Tech stack

- Vitest
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

