[@democrance/utils](../README.md) / [Exports](../modules.md) / [micromatch](../modules/micromatch.md) / Options

# Interface: Options

[micromatch](../modules/micromatch.md).Options

## Hierarchy

- **`Options`**

  ↳ [`ScanOptions`](micromatch.ScanOptions.md)

## Table of contents

### Properties

- [basename](micromatch.Options.md#basename)
- [bash](micromatch.Options.md#bash)
- [capture](micromatch.Options.md#capture)
- [contains](micromatch.Options.md#contains)
- [cwd](micromatch.Options.md#cwd)
- [debug](micromatch.Options.md#debug)
- [dot](micromatch.Options.md#dot)
- [expandRange](micromatch.Options.md#expandrange)
- [failglob](micromatch.Options.md#failglob)
- [fastpaths](micromatch.Options.md#fastpaths)
- [flags](micromatch.Options.md#flags)
- [format](micromatch.Options.md#format)
- [ignore](micromatch.Options.md#ignore)
- [keepQuotes](micromatch.Options.md#keepquotes)
- [literalBrackets](micromatch.Options.md#literalbrackets)
- [lookbehinds](micromatch.Options.md#lookbehinds)
- [matchBase](micromatch.Options.md#matchbase)
- [maxLength](micromatch.Options.md#maxlength)
- [nobrace](micromatch.Options.md#nobrace)
- [nobracket](micromatch.Options.md#nobracket)
- [nocase](micromatch.Options.md#nocase)
- [noext](micromatch.Options.md#noext)
- [noextglob](micromatch.Options.md#noextglob)
- [noglobstar](micromatch.Options.md#noglobstar)
- [nonegate](micromatch.Options.md#nonegate)
- [noquantifiers](micromatch.Options.md#noquantifiers)
- [onIgnore](micromatch.Options.md#onignore)
- [onMatch](micromatch.Options.md#onmatch)
- [onResult](micromatch.Options.md#onresult)
- [posix](micromatch.Options.md#posix)
- [prepend](micromatch.Options.md#prepend)
- [regex](micromatch.Options.md#regex)
- [strictBrackets](micromatch.Options.md#strictbrackets)
- [strictSlashes](micromatch.Options.md#strictslashes)
- [unescape](micromatch.Options.md#unescape)
- [windows](micromatch.Options.md#windows)

## Properties

### basename

• `Optional` **basename**: `boolean`

Allow glob patterns without slashes to match a file path based on its basename. Same behavior as [minimatch](https://github.com/isaacs/minimatch) option `matchBase`.

**`Default`**

```ts
false
```

**`Example`**

```js
mm(['a/b.js', 'a/c.md'], '*.js');
//=> []

mm(['a/b.js', 'a/c.md'], '*.js', {matchBase: true});
//=> ['a/b.js']
```

#### Defined in

node_modules/.pnpm/@types+micromatch@4.0.2/node_modules/@types/micromatch/index.d.ts:32

___

### bash

• `Optional` **bash**: `boolean`

Enabled by default, this option enforces bash-like behavior with stars immediately following a bracket expression.
Bash bracket expressions are similar to regex character classes, but unlike regex, a star following a bracket expression **does not repeat the bracketed characters**.
Instead, the star is treated the same as an other star.

**`Default`**

```ts
true
```

**`Example`**

```js
var files = ['abc', 'ajz'];
console.log(mm(files, '[a-c]*'));
//=> ['abc', 'ajz']

console.log(mm(files, '[a-c]*', {bash: false}));
```

#### Defined in

node_modules/.pnpm/@types+micromatch@4.0.2/node_modules/@types/micromatch/index.d.ts:49

___

### capture

• `Optional` **capture**: `boolean`

Return regex matches in supporting methods.

**`Default`**

```ts
undefined
```

#### Defined in

node_modules/.pnpm/@types+micromatch@4.0.2/node_modules/@types/micromatch/index.d.ts:55

___

### contains

• `Optional` **contains**: `boolean`

Allows glob to match any part of the given string(s).

**`Default`**

```ts
undefined
```

#### Defined in

node_modules/.pnpm/@types+micromatch@4.0.2/node_modules/@types/micromatch/index.d.ts:61

___

### cwd

• `Optional` **cwd**: `string`

Current working directory. Used by `picomatch.split()`

**`Default`**

```ts
process.cwd()
```

#### Defined in

node_modules/.pnpm/@types+micromatch@4.0.2/node_modules/@types/micromatch/index.d.ts:67

___

### debug

• `Optional` **debug**: `boolean`

Debug regular expressions when an error is thrown.

**`Default`**

```ts
undefined
```

#### Defined in

node_modules/.pnpm/@types+micromatch@4.0.2/node_modules/@types/micromatch/index.d.ts:73

___

### dot

• `Optional` **dot**: `boolean`

Match dotfiles. Otherwise dotfiles are ignored unless a `.` is explicitly defined in the pattern.

**`Default`**

```ts
false
```

#### Defined in

node_modules/.pnpm/@types+micromatch@4.0.2/node_modules/@types/micromatch/index.d.ts:79

___

### expandRange

• `Optional` **expandRange**: (`left`: `string`, `right`: `string`, `options`: [`Options`](micromatch.Options.md)) => `string`

#### Type declaration

▸ (`left`, `right`, `options`): `string`

Custom function for expanding ranges in brace patterns, such as `{a..z}`.
The function receives the range values as two arguments, and it must return a string to be used in the generated regex.
It's recommended that returned strings be wrapped in parentheses. This option is overridden by the expandBrace option.

**`Default`**

```ts
undefined
```

##### Parameters

| Name | Type |
| :------ | :------ |
| `left` | `string` |
| `right` | `string` |
| `options` | [`Options`](micromatch.Options.md) |

##### Returns

`string`

#### Defined in

node_modules/.pnpm/@types+micromatch@4.0.2/node_modules/@types/micromatch/index.d.ts:87

___

### failglob

• `Optional` **failglob**: `boolean`

Similar to the `--failglob` behavior in Bash, throws an error when no matches are found.

**`Default`**

```ts
false
```

#### Defined in

node_modules/.pnpm/@types+micromatch@4.0.2/node_modules/@types/micromatch/index.d.ts:93

___

### fastpaths

• `Optional` **fastpaths**: `boolean`

To speed up processing, full parsing is skipped for a handful common glob patterns. Disable this behavior by setting this option to false.

**`Default`**

```ts
true
```

#### Defined in

node_modules/.pnpm/@types+micromatch@4.0.2/node_modules/@types/micromatch/index.d.ts:99

___

### flags

• `Optional` **flags**: `boolean`

Regex flags to use in the generated regex. If defined, the `nocase` option will be overridden.

**`Default`**

```ts
undefined
```

#### Defined in

node_modules/.pnpm/@types+micromatch@4.0.2/node_modules/@types/micromatch/index.d.ts:105

___

### format

• `Optional` **format**: (`returnedString`: `string`) => `string`

#### Type declaration

▸ (`returnedString`): `string`

Custom function for formatting the returned string. This is useful for removing leading slashes, converting Windows paths to Posix paths, etc.

**`Default`**

```ts
undefined
```

##### Parameters

| Name | Type |
| :------ | :------ |
| `returnedString` | `string` |

##### Returns

`string`

#### Defined in

node_modules/.pnpm/@types+micromatch@4.0.2/node_modules/@types/micromatch/index.d.ts:111

___

### ignore

• `Optional` **ignore**: `string` \| readonly `string`[]

One or more glob patterns for excluding strings that should not be matched from the result.

**`Default`**

```ts
undefined
```

#### Defined in

node_modules/.pnpm/@types+micromatch@4.0.2/node_modules/@types/micromatch/index.d.ts:117

___

### keepQuotes

• `Optional` **keepQuotes**: `boolean`

Retain quotes in the generated regex, since quotes may also be used as an alternative to backslashes.

**`Default`**

```ts
false
```

#### Defined in

node_modules/.pnpm/@types+micromatch@4.0.2/node_modules/@types/micromatch/index.d.ts:123

___

### literalBrackets

• `Optional` **literalBrackets**: `boolean`

When `true`, brackets in the glob pattern will be escaped so that only literal brackets will be matched.

**`Default`**

```ts
undefined
```

#### Defined in

node_modules/.pnpm/@types+micromatch@4.0.2/node_modules/@types/micromatch/index.d.ts:129

___

### lookbehinds

• `Optional` **lookbehinds**: `boolean`

Support regex positive and negative lookbehinds. Note that you must be using Node 8.1.10 or higher to enable regex lookbehinds.

**`Default`**

```ts
true
```

#### Defined in

node_modules/.pnpm/@types+micromatch@4.0.2/node_modules/@types/micromatch/index.d.ts:135

___

### matchBase

• `Optional` **matchBase**: `boolean`

Alias for `basename`.

**`Default`**

```ts
false
```

#### Defined in

node_modules/.pnpm/@types+micromatch@4.0.2/node_modules/@types/micromatch/index.d.ts:141

___

### maxLength

• `Optional` **maxLength**: `number`

Limit the max length of the input string. An error is thrown if the input string is longer than this value.

**`Default`**

```ts
65536
```

#### Defined in

node_modules/.pnpm/@types+micromatch@4.0.2/node_modules/@types/micromatch/index.d.ts:147

___

### nobrace

• `Optional` **nobrace**: `boolean`

Disable brace matching, so that `{a,b}` and `{1..3}` would be treated as literal characters.

**`Default`**

```ts
false
```

#### Defined in

node_modules/.pnpm/@types+micromatch@4.0.2/node_modules/@types/micromatch/index.d.ts:153

___

### nobracket

• `Optional` **nobracket**: `boolean`

Disable matching with regex brackets.

**`Default`**

```ts
undefined
```

#### Defined in

node_modules/.pnpm/@types+micromatch@4.0.2/node_modules/@types/micromatch/index.d.ts:159

___

### nocase

• `Optional` **nocase**: `boolean`

Perform case-insensitive matching. Equivalent to the regex `i` flag.
Note that this option is ignored when the `flags` option is defined.

**`Default`**

```ts
false
```

#### Defined in

node_modules/.pnpm/@types+micromatch@4.0.2/node_modules/@types/micromatch/index.d.ts:166

___

### noext

• `Optional` **noext**: `boolean`

Alias for `noextglob`

**`Default`**

```ts
false
```

#### Defined in

node_modules/.pnpm/@types+micromatch@4.0.2/node_modules/@types/micromatch/index.d.ts:172

___

### noextglob

• `Optional` **noextglob**: `boolean`

Disable support for matching with extglobs (like `+(a|b)`)

**`Default`**

```ts
false
```

#### Defined in

node_modules/.pnpm/@types+micromatch@4.0.2/node_modules/@types/micromatch/index.d.ts:178

___

### noglobstar

• `Optional` **noglobstar**: `boolean`

Disable matching with globstars (`**`).

**`Default`**

```ts
undefined
```

#### Defined in

node_modules/.pnpm/@types+micromatch@4.0.2/node_modules/@types/micromatch/index.d.ts:184

___

### nonegate

• `Optional` **nonegate**: `boolean`

Disallow negation (`!`) patterns, and treat leading `!` as a literal character to match.

**`Default`**

```ts
undefined
```

#### Defined in

node_modules/.pnpm/@types+micromatch@4.0.2/node_modules/@types/micromatch/index.d.ts:190

___

### noquantifiers

• `Optional` **noquantifiers**: `boolean`

Disable support for regex quantifiers (like `a{1,2}`) and treat them as brace patterns to be expanded.

**`Default`**

```ts
false
```

#### Defined in

node_modules/.pnpm/@types+micromatch@4.0.2/node_modules/@types/micromatch/index.d.ts:196

___

### onIgnore

• `Optional` **onIgnore**: (`item`: [`Item`](micromatch.Item.md)) => `void`

#### Type declaration

▸ (`item`): `void`

Function to be called on ignored items.

**`Default`**

```ts
undefined
```

##### Parameters

| Name | Type |
| :------ | :------ |
| `item` | [`Item`](micromatch.Item.md) |

##### Returns

`void`

#### Defined in

node_modules/.pnpm/@types+micromatch@4.0.2/node_modules/@types/micromatch/index.d.ts:202

___

### onMatch

• `Optional` **onMatch**: (`item`: [`Item`](micromatch.Item.md)) => `void`

#### Type declaration

▸ (`item`): `void`

Function to be called on matched items.

**`Default`**

```ts
undefined
```

##### Parameters

| Name | Type |
| :------ | :------ |
| `item` | [`Item`](micromatch.Item.md) |

##### Returns

`void`

#### Defined in

node_modules/.pnpm/@types+micromatch@4.0.2/node_modules/@types/micromatch/index.d.ts:208

___

### onResult

• `Optional` **onResult**: (`item`: [`Item`](micromatch.Item.md)) => `void`

#### Type declaration

▸ (`item`): `void`

Function to be called on all items, regardless of whether or not they are matched or ignored.

**`Default`**

```ts
undefined
```

##### Parameters

| Name | Type |
| :------ | :------ |
| `item` | [`Item`](micromatch.Item.md) |

##### Returns

`void`

#### Defined in

node_modules/.pnpm/@types+micromatch@4.0.2/node_modules/@types/micromatch/index.d.ts:214

___

### posix

• `Optional` **posix**: `boolean`

Support POSIX character classes ("posix brackets").

**`Default`**

```ts
false
```

#### Defined in

node_modules/.pnpm/@types+micromatch@4.0.2/node_modules/@types/micromatch/index.d.ts:220

___

### prepend

• `Optional` **prepend**: `boolean`

String to prepend to the generated regex used for matching.

**`Default`**

```ts
undefined
```

#### Defined in

node_modules/.pnpm/@types+micromatch@4.0.2/node_modules/@types/micromatch/index.d.ts:226

___

### regex

• `Optional` **regex**: `boolean`

Use regular expression rules for `+` (instead of matching literal `+`), and for stars that follow closing parentheses or brackets (as in `)*` and `]*`).

**`Default`**

```ts
false
```

#### Defined in

node_modules/.pnpm/@types+micromatch@4.0.2/node_modules/@types/micromatch/index.d.ts:232

___

### strictBrackets

• `Optional` **strictBrackets**: `boolean`

Throw an error if brackets, braces, or parens are imbalanced.

**`Default`**

```ts
undefined
```

#### Defined in

node_modules/.pnpm/@types+micromatch@4.0.2/node_modules/@types/micromatch/index.d.ts:238

___

### strictSlashes

• `Optional` **strictSlashes**: `boolean`

When true, picomatch won't match trailing slashes with single stars.

**`Default`**

```ts
undefined
```

#### Defined in

node_modules/.pnpm/@types+micromatch@4.0.2/node_modules/@types/micromatch/index.d.ts:244

___

### unescape

• `Optional` **unescape**: `boolean`

Remove backslashes from returned matches.

**`Default`**

```ts
undefined
```

**`Example`**

In this example we want to match a literal `*`:

```js
mm.match(['abc', 'a\\*c'], 'a\\*c');
//=> ['a\\*c']

mm.match(['abc', 'a\\*c'], 'a\\*c', {unescape: true});
//=> ['a*c']
```

#### Defined in

node_modules/.pnpm/@types+micromatch@4.0.2/node_modules/@types/micromatch/index.d.ts:261

___

### windows

• `Optional` **windows**: `boolean`

Convert all slashes in file paths to forward slashes. This does not convert slashes in the glob pattern itself

**`Default`**

```ts
undefined
```

#### Defined in

node_modules/.pnpm/@types+micromatch@4.0.2/node_modules/@types/micromatch/index.d.ts:267
