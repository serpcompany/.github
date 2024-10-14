# vue/nuxt

## Components
- component names have a minimum of 2 words
- component filenames are `PascalCase`
- component element names (ie: when you use a component inside another component/page/etc.) are `kebab-case`

## Tests

### Tech stack

- Vitest
- Vue testing library

### Conventions

Folder structure pattern: `tests/<test-type>/<category-of-thing>/*`

```
~/tests/unit/utils/
~/tests/unit/components/
```

### Unit tests

- Should be lightweight & run fast
- Should aim for 100% test coverage
- If there are dependencies, unit tests should mock/stub them out
