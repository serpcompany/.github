# vue/nuxt best practices

## components

- elements have aria role labels - `#accessibility`
- elements have `loading="lazy"` on images below the fold - `#performance`
- elements have responsive tailwind classes for padding, text sizes, etc. - `#performance`
- elements follow semantic html standards
- move logic away from component - components should focus on rendering template HTML by moving component logic to `utils/`, 


## testing

- write components "TDD"
- - [ ] components have 100% test coverage - `#sre` ![alt text](<assets/Screenshot 2024-10-09 at 08.28.51.png>)