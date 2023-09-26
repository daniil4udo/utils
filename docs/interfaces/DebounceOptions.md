[@democrance/utils](../README.md) / [Exports](../modules.md) / DebounceOptions

# Interface: DebounceOptions

## Table of contents

### Properties

- [leading](DebounceOptions.md#leading)
- [trailing](DebounceOptions.md#trailing)

## Properties

### leading

• `Optional` `Readonly` **leading**: `boolean`

Call the `fn` on the [leading edge of the timeout](https://css-tricks.com/debouncing-throttling-explained-examples/#article-header-id-1).
Meaning immediately, instead of waiting for `wait` milliseconds.

**`Default`**

```ts
false
```

#### Defined in

node_modules/.pnpm/perfect-debounce@1.0.0/node_modules/perfect-debounce/dist/index.d.ts:7

___

### trailing

• `Optional` `Readonly` **trailing**: `boolean`

Call the `fn` on trailing edge with last used arguments. Result of call is from previous call.

**`Default`**

```ts
false
```

#### Defined in

node_modules/.pnpm/perfect-debounce@1.0.0/node_modules/perfect-debounce/dist/index.d.ts:12
