# vue3-renderless-component-example

inspired by [adam wathan](https://adamwathan.me/advanced-vue-component-design/)

## 1. renderless component

- Components that do not make `markup`
- `Markup` is only injected through slot
- Provides only state, data and actions
  - DOM manipulation instead of consumer
  - ex) focusing
  - Data sorting, filtering, selecting, etc. (index)

## 2. provide / inject

- To avoid unnecessary props drilling
- Data to be encapsulated internally throughout the component module
- Service locator pattern, similar to global store

## Scoped slot + Typescript

[typescript issue](https://github.com/vuejs/core/discussions/7438)

## @Shopify/draggable
https://github.com/Shopify/draggable

# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.
