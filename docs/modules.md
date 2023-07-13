[@democrance/utils](README.md) / Exports

# @democrance/utils

## Table of contents

### Namespaces

- [micromatch](modules/micromatch.md)

### Interfaces

- [urlJoin](interfaces/urlJoin.md)

### Type Aliases

- [AllTypes](modules.md#alltypes)
- [NonPrimitive](modules.md#nonprimitive)
- [PredicateFunction](modules.md#predicatefunction)
- [Primitive](modules.md#primitive)
- [PrimitiveLike](modules.md#primitivelike)
- [TargetObject](modules.md#targetobject)

### Variables

- [POSSIBLE\_FOCUSABLE\_TAGS](modules.md#possible_focusable_tags)
- [PYTHON\_TO\_JAVASCRIPT\_DATE\_MAP](modules.md#python_to_javascript_date_map)
- [dmcUtilsAutoImportPreset](modules.md#dmcutilsautoimportpreset)

### Functions

- [allImagesExist](modules.md#allimagesexist)
- [anyImagesExist](modules.md#anyimagesexist)
- [applyCurrencySign](modules.md#applycurrencysign)
- [arrayBufferToString](modules.md#arraybuffertostring)
- [capitalize](modules.md#capitalize)
- [circularDeepEqual](modules.md#circulardeepequal)
- [circularShallowEqual](modules.md#circularshallowequal)
- [clearLocalStorage](modules.md#clearlocalstorage)
- [clearSessionStorage](modules.md#clearsessionstorage)
- [convertPYDateFormatToJS](modules.md#convertpydateformattojs)
- [createCustomEqual](modules.md#createcustomequal)
- [createDefaultsDeep](modules.md#createdefaultsdeep)
- [deCamelize](modules.md#decamelize)
- [debounce](modules.md#debounce)
- [deepClone](modules.md#deepclone)
- [deepEqual](modules.md#deepequal)
- [deepForEach](modules.md#deepforeach)
- [defaultsDeep](modules.md#defaultsdeep)
- [defaultsDeepArrayFn](modules.md#defaultsdeeparrayfn)
- [defaultsDeepFn](modules.md#defaultsdeepfn)
- [detectMode](modules.md#detectmode)
- [emojiToIso](modules.md#emojitoiso)
- [filterObject](modules.md#filterobject)
- [formatValue](modules.md#formatvalue)
- [getCtor](modules.md#getctor)
- [getLocalStorageItem](modules.md#getlocalstorageitem)
- [getNameFromPath](modules.md#getnamefrompath)
- [getSessionStorageItem](modules.md#getsessionstorageitem)
- [hasValue](modules.md#hasvalue)
- [highlightMatch](modules.md#highlightmatch)
- [htmlTruncate](modules.md#htmltruncate)
- [imageExists](modules.md#imageexists)
- [isAbsoluteURL](modules.md#isabsoluteurl)
- [isColor](modules.md#iscolor)
- [isCountryIso](modules.md#iscountryiso)
- [isDefined](modules.md#isdefined)
- [isEmptyArray](modules.md#isemptyarray)
- [isEmptyCollection](modules.md#isemptycollection)
- [isHTML](modules.md#ishtml)
- [isIterable](modules.md#isiterable)
- [isNil](modules.md#isnil)
- [isNumber](modules.md#isnumber)
- [isPrimitive](modules.md#isprimitive)
- [isPrimitiveLike](modules.md#isprimitivelike)
- [isProperNaN](modules.md#ispropernan)
- [isSubstringInString](modules.md#issubstringinstring)
- [isoToEmoji](modules.md#isotoemoji)
- [keyBy](modules.md#keyby)
- [length](modules.md#length)
- [memoize](modules.md#memoize)
- [memoizeDeep](modules.md#memoizedeep)
- [memoizeLast](modules.md#memoizelast)
- [micromatch](modules.md#micromatch)
- [movePropLevelUp](modules.md#moveproplevelup)
- [parseLocaleNumber](modules.md#parselocalenumber)
- [parseURLTemplate](modules.md#parseurltemplate)
- [price](modules.md#price)
- [removeLocalStorageItem](modules.md#removelocalstorageitem)
- [removeSessionStorageItem](modules.md#removesessionstorageitem)
- [safeJSONParse](modules.md#safejsonparse)
- [sameValueZeroEqual](modules.md#samevaluezeroequal)
- [saveAs](modules.md#saveas)
- [scrollTo](modules.md#scrollto)
- [setLocalStorageItem](modules.md#setlocalstorageitem)
- [setSessionStorageItem](modules.md#setsessionstorageitem)
- [shallowEqual](modules.md#shallowequal)
- [shuffle](modules.md#shuffle)
- [slugify](modules.md#slugify)
- [sortObjects](modules.md#sortobjects)
- [splitByIndex](modules.md#splitbyindex)
- [strToRegexp](modules.md#strtoregexp)
- [strictCircularDeepEqual](modules.md#strictcirculardeepequal)
- [strictCircularShallowEqual](modules.md#strictcircularshallowequal)
- [strictDeepEqual](modules.md#strictdeepequal)
- [strictShallowEqual](modules.md#strictshallowequal)
- [stringToArrayBuffer](modules.md#stringtoarraybuffer)
- [toArray](modules.md#toarray)
- [toLower](modules.md#tolower)
- [toType](modules.md#totype)
- [toUpper](modules.md#toupper)
- [toggleKeyboardFocus](modules.md#togglekeyboardfocus)
- [trimFileExtension](modules.md#trimfileextension)
- [urlJoin](modules.md#urljoin)
- [urlTemplate](modules.md#urltemplate)
- [zipcelx](modules.md#zipcelx)

## Type Aliases

### AllTypes

Ƭ **AllTypes**: [`Primitive`](modules.md#primitive) \| [`PrimitiveLike`](modules.md#primitivelike) \| [`NonPrimitive`](modules.md#nonprimitive)

Type alias representing all types in JavaScript, including primitive, PrimitiveLike, and non-primitive types.

#### Defined in

[lib/toType.ts:56](https://github.com/daniil4udo/utils/blob/e4121f0/lib/toType.ts#L56)

___

### NonPrimitive

Ƭ **NonPrimitive**: ``"arguments"`` \| ``"buffer"`` \| ``"object"`` \| ``"array"`` \| ``"error"`` \| ``"function"`` \| ``"generatorfunction"`` \| ``"map"`` \| ``"weakmap"`` \| ``"set"`` \| ``"weakset"`` \| ``"int8array"`` \| ``"uint8array"`` \| ``"uint8clampedarray"`` \| ``"int16array"`` \| ``"uint16array"`` \| ``"int32array"`` \| ``"uint32array"`` \| ``"float32array"`` \| ``"float64array"``

Type alias representing JavaScript's non-primitive types.

#### Defined in

[lib/toType.ts:29](https://github.com/daniil4udo/utils/blob/e4121f0/lib/toType.ts#L29)

___

### PredicateFunction

Ƭ **PredicateFunction**<`T`\>: (`key`: `string`, `value`: `T`, `index`: `number`, `object`: [`TargetObject`](modules.md#targetobject)<`T`\>) => `boolean`

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type of the values in the object. |

#### Type declaration

▸ (`key`, `value`, `index`, `object`): `boolean`

Predicate function type definition.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | The key of the current element being processed in the object. |
| `value` | `T` | The value of the current element being processed in the object. |
| `index` | `number` | The index of the current element being processed in the object. |
| `object` | [`TargetObject`](modules.md#targetobject)<`T`\> | The object filterObject was called upon. |

##### Returns

`boolean`

True if the current element should be included in the filtered object; otherwise, false.

#### Defined in

[lib/filterObject.ts:20](https://github.com/daniil4udo/utils/blob/e4121f0/lib/filterObject.ts#L20)

___

### Primitive

Ƭ **Primitive**: ``"boolean"`` \| ``"number"`` \| ``"bigint"`` \| ``"string"`` \| ``"symbol"`` \| ``"undefined"`` \| ``"null"``

Type alias representing JavaScript's primitive types.

#### Defined in

[lib/toType.ts:6](https://github.com/daniil4udo/utils/blob/e4121f0/lib/toType.ts#L6)

___

### PrimitiveLike

Ƭ **PrimitiveLike**: ``"date"`` \| ``"regexp"``

Type alias representing JavaScript's Date and RegExp types.

#### Defined in

[lib/toType.ts:20](https://github.com/daniil4udo/utils/blob/e4121f0/lib/toType.ts#L20)

___

### TargetObject

Ƭ **TargetObject**<`T`\>: `Record`<`string`, `T`\>

Type definition for an object with string keys and values of a certain type

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type of the values in the object. |

#### Defined in

[lib/filterObject.ts:7](https://github.com/daniil4udo/utils/blob/e4121f0/lib/filterObject.ts#L7)

## Variables

### POSSIBLE\_FOCUSABLE\_TAGS

• `Const` **POSSIBLE\_FOCUSABLE\_TAGS**: ``"a[href], area[href], button, details, input, textarea, select, [tabindex]:not([tabindex=\"-1\"])"``

'a[href]',
'area[href]',
'button',
'details',
'input',
'iframe',
'select',
'textarea',

// these are actually case sensitive but i'm not listing out all the possible variants
'[contentEditable=""]',
'[contentEditable="true"]',
'[contentEditable="TRUE"]',

'[tabindex]:not([tabindex^="-"])',
':not([disabled])';

#### Defined in

[lib/toggleKeyboardFocus.ts:19](https://github.com/daniil4udo/utils/blob/e4121f0/lib/toggleKeyboardFocus.ts#L19)

___

### PYTHON\_TO\_JAVASCRIPT\_DATE\_MAP

• `Const` **PYTHON\_TO\_JAVASCRIPT\_DATE\_MAP**: `Map`<`string`, `string`\>

Map that defines the conversion from Python-style date format to JavaScript-style date format.

#### Defined in

[lib/convertPYDateFormatToJS.ts:7](https://github.com/daniil4udo/utils/blob/e4121f0/lib/convertPYDateFormatToJS.ts#L7)

___

### dmcUtilsAutoImportPreset

• **dmcUtilsAutoImportPreset**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `@democrance/utils` | readonly [``"dmcUtilsAutoImportPreset"``, ``"arrayBufferToString"``, ``"stringToArrayBuffer"``, ``"capitalize"``, ``"toUpper"``, ``"toLower"``, ``"PYTHON_TO_JAVASCRIPT_DATE_MAP"``, ``"convertPYDateFormatToJS"``, ``"debounce"``, ``"deepClone"``, ``"deepEqual"``, ``"circularDeepEqual"``, ``"circularShallowEqual"``, ``"createCustomEqual"``, ``"sameValueZeroEqual"``, ``"shallowEqual"``, ``"strictCircularDeepEqual"``, ``"strictCircularShallowEqual"``, ``"strictDeepEqual"``, ``"strictShallowEqual"``, ``"deepForEach"``, ``"defaultsDeep"``, ``"createDefaultsDeep"``, ``"defaultsDeepFn"``, ``"defaultsDeepArrayFn"``, ``"detectMode"``, ``"isCountryIso"``, ``"isoToEmoji"``, ``"emojiToIso"``, ``"filterObject"``, ``"getCtor"``, ``"trimFileExtension"``, ``"getNameFromPath"``, ``"isNil"``, ``"isDefined"``, ``"hasValue"``, ``"highlightMatch"``, ``"htmlTruncate"``, ``"imageExists"``, ``"allImagesExist"``, ``"anyImagesExist"``, ``"isAbsoluteURL"``, ``"isColor"``, ``"isEmptyArray"``, ``"isEmptyCollection"``, ``"isHTML"``, ``"isIterable"``, ``"isPrimitive"``, ``"isPrimitiveLike"``, ``"isNumber"``, ``"isProperNaN"``, ``"isSubstringInString"``, ``"keyBy"``, ``"length"``, ``"memoizeDeep"``, ``"memoizeLast"``, ``"memoize"``, ``"micromatch"``, ``"movePropLevelUp"``, ``"parseLocaleNumber"``, ``"formatValue"``, ``"applyCurrencySign"``, ``"price"``, ``"safeJSONParse"``, ``"saveAs"``, ``"scrollTo"``, ``"shuffle"``, ``"deCamelize"``, ``"slugify"``, ``"sortObjects"``, ``"splitByIndex"``, ``"setLocalStorageItem"``, ``"getLocalStorageItem"``, ``"removeLocalStorageItem"``, ``"clearLocalStorage"``, ``"setSessionStorageItem"``, ``"getSessionStorageItem"``, ``"removeSessionStorageItem"``, ``"clearSessionStorage"``, ``"strToRegexp"``, ``"toArray"``, ``"toType"``, ``"POSSIBLE_FOCUSABLE_TAGS"``, ``"toggleKeyboardFocus"``, ``"urlJoin"``, ``"urlTemplate"``, ``"parseURLTemplate"``, ``"zipcelx"``] |

#### Defined in

lib/preset/autoImportUtilsPreset.ts:2

## Functions

### allImagesExist

▸ **allImagesExist**<`T`\>(`urls`, `options?`): `Promise`<(`string` \| `boolean`)[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `urls` | (`undefined` \| ``null`` \| `T`)[] |
| `options` | `ImageExistsOptions` |

#### Returns

`Promise`<(`string` \| `boolean`)[]\>

#### Defined in

[lib/imageExists.ts:60](https://github.com/daniil4udo/utils/blob/e4121f0/lib/imageExists.ts#L60)

___

### anyImagesExist

▸ **anyImagesExist**<`T`\>(`urls`, `options?`): `Promise`<(`string` \| `boolean`)[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `urls` | (`undefined` \| ``null`` \| `T`)[] |
| `options` | `ImageExistsOptions` |

#### Returns

`Promise`<(`string` \| `boolean`)[]\>

#### Defined in

[lib/imageExists.ts:64](https://github.com/daniil4udo/utils/blob/e4121f0/lib/imageExists.ts#L64)

___

### applyCurrencySign

▸ **applyCurrencySign**(`formattedPrice`, `options`): `string`

Applies currency sign and price format to a formatted price string.

**`Remarks`**

This function is a part of the [@democrance/utils](https://github.com/daniil4udo/utils) library.

**`Function`**

applyCurrencySign

**`Example`**

```ts
import { formattedPrice } from '@democrance/utils';

const formattedPrice = applyCurrencySign('1,234.56', { currencySign: '$', priceFormat: '{currency}{amount}' });
console.log(formattedPrice); // Outputs: "$1,234.56"
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `formattedPrice` | `string` | The formatted price value. |
| `options` | `IFormat` | The currency format options. |

#### Returns

`string`

The formatted price with currency sign and format applied.

#### Defined in

[lib/price.ts:150](https://github.com/daniil4udo/utils/blob/e4121f0/lib/price.ts#L150)

___

### arrayBufferToString

▸ **arrayBufferToString**(`buffer`): `string`

Converts an ArrayBuffer to a string.

This method takes an ArrayBuffer as an input, creates a Uint16Array view
for it and then converts it to a string using the `fromCharCode` method.
Please note that this function assumes that the ArrayBuffer is
representing a UTF-16 encoded string.

**`Remarks`**

This function is part of the [@democrance/utils](https://github.com/daniil4udo/utils) library.

**`Example`**

```ts
import { arrayBufferToString } from '@democrance/utils';

const buffer = new ArrayBuffer(2);
const view = new Uint16Array(buffer);
view[0] = 'A'.charCodeAt(0);
console.log(arrayBufferToString(buffer)); // Outputs: A
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `buffer` | `ArrayBuffer` | The ArrayBuffer to be converted. |

#### Returns

`string`

The string representation of the ArrayBuffer.

#### Defined in

[lib/arrayBuffer.ts:26](https://github.com/daniil4udo/utils/blob/e4121f0/lib/arrayBuffer.ts#L26)

___

### capitalize

▸ **capitalize**(`str?`): `string`

Capitalizes the first letter of a string.

This method takes a string as an input and returns a new string
with the first letter converted to uppercase and the rest of the string preserved.

**`Remarks`**

This function is part of the [@democrance/utils](https://github.com/daniil4udo/utils) library.

**`Throws`**

If the input is not of type 'string'.

**`Example`**

```ts
import { capitalize } from '@democrance/utils';

console.log(capitalize('hello')); // Outputs: 'Hello'
console.log(capitalize('WORLD')); // Outputs: 'WORLD'
console.log(capitalize('')); // Outputs: ''
```

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `str` | `string` | `''` | The input string to capitalize. Default is an empty string. |

#### Returns

`string`

The capitalized string.

#### Defined in

[lib/changeCase.ts:24](https://github.com/daniil4udo/utils/blob/e4121f0/lib/changeCase.ts#L24)

___

### circularDeepEqual

▸ **circularDeepEqual**<`A`, `B`\>(`a`, `b`): `boolean`

Whether the items passed are deeply-equal in value, including circular references.

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `A` |
| `b` | `B` |

#### Returns

`boolean`

#### Defined in

node_modules/.pnpm/fast-equals@5.0.1/node_modules/fast-equals/index.d.ts:21

___

### circularShallowEqual

▸ **circularShallowEqual**<`A`, `B`\>(`a`, `b`): `boolean`

Whether the items passed are shallowly-equal in value, including circular references.

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `A` |
| `b` | `B` |

#### Returns

`boolean`

#### Defined in

node_modules/.pnpm/fast-equals@5.0.1/node_modules/fast-equals/index.d.ts:38

___

### clearLocalStorage

▸ **clearLocalStorage**(): `void`

Removes all values from `'localStorage' | 'sessionStorage'`.

If an error occurs during the operation, an error message is logged to the console but no error is thrown.

#### Returns

`void`

#### Defined in

[lib/storageWrapper.ts:104](https://github.com/daniil4udo/utils/blob/e4121f0/lib/storageWrapper.ts#L104)

___

### clearSessionStorage

▸ **clearSessionStorage**(): `void`

Removes all values from `'localStorage' | 'sessionStorage'`.

If an error occurs during the operation, an error message is logged to the console but no error is thrown.

#### Returns

`void`

#### Defined in

[lib/storageWrapper.ts:104](https://github.com/daniil4udo/utils/blob/e4121f0/lib/storageWrapper.ts#L104)

___

### convertPYDateFormatToJS

▸ **convertPYDateFormatToJS**(`unformatted`): `string`

Converts a Python-style date format string to a JavaScript-style date format string.

This method takes a Python-style date format string as input and returns a new string,
which is a JavaScript-style date format string.

**`Remarks`**

This function is part of the [@democrance/utils](https://github.com/daniil4udo/utils) library.

**`Throws`**

If the input is not of type 'string'.

**`Example`**

```ts
import { convertPYDateFormatToJS } from '@democrance/utils';

console.log(convertPYDateFormatToJS('%A, %B %d, %Y')); // Outputs: 'dddd, MMMM DD, YYYY'
console.log(convertPYDateFormatToJS('%d-%b-%Y')); // Outputs: 'DD-MMM-YYYY'
console.log(convertPYDateFormatToJS('%m/%d/%y %I:%M %p')); // Outputs: 'MM/DD/YY hh:mm A'
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `unformatted` | `string` | The unformatted Python-style date format string. |

#### Returns

`string`

The JavaScript-style date format string.

#### Defined in

[lib/convertPYDateFormatToJS.ts:57](https://github.com/daniil4udo/utils/blob/e4121f0/lib/convertPYDateFormatToJS.ts#L57)

___

### createCustomEqual

▸ **createCustomEqual**<`Meta`\>(`options?`): <A, B\>(`a`: `A`, `b`: `B`) => `boolean`

Create a custom equality comparison method.

This can be done to create very targeted comparisons in extreme hot-path scenarios
where the standard methods are not performant enough, but can also be used to provide
support for legacy environments that cannot polyfill for modern features expected by
`fast-equals`, such as `WeakMap` or `RegExp.prototype.flags`.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Meta` | `undefined` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `CustomEqualCreatorOptions`<`Meta`\> |

#### Returns

`fn`

▸ <`A`, `B`\>(`a`, `b`): `boolean`

##### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `A` |
| `b` | `B` |

##### Returns

`boolean`

#### Defined in

node_modules/.pnpm/fast-equals@5.0.1/node_modules/fast-equals/index.d.ts:52

___

### createDefaultsDeep

▸ **createDefaultsDeep**(`merger?`): `DefuFn`

#### Parameters

| Name | Type |
| :------ | :------ |
| `merger?` | `Merger` |

#### Returns

`DefuFn`

#### Defined in

node_modules/.pnpm/defu@6.1.2/node_modules/defu/dist/defu.d.ts:19

___

### deCamelize

▸ **deCamelize**(`str?`): `string`

Converts a camelCase or PascalCase string to a space-separated string.

**`Function`**

deCamelize

**`Example`**

```ts
deCamelize('helloWorld'); // Returns 'hello World'
deCamelize('helloWorld123'); // Returns 'hello World123'
```

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `str?` | `string` | `''` | The input string to be converted. |

#### Returns

`string`

The de-camelized string.

#### Defined in

[lib/slugify.ts:12](https://github.com/daniil4udo/utils/blob/e4121f0/lib/slugify.ts#L12)

___

### debounce

▸ **debounce**<`ArgumentsT`, `ReturnT`\>(`fn`, `wait?`, `options?`): (...`args`: `ArgumentsT`) => `Promise`<`ReturnT`\>

Debounce functions

**`Example`**

```
import { debounce } from 'perfect-debounce';
const expensiveCall = async input => input;
const debouncedFn = debounce(expensiveCall, 200);
for (const number of [1, 2, 3]) {
  console.log(await debouncedFn(number));
}
//=> 3
//=> 3
//=> 3
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ArgumentsT` | extends `unknown`[] |
| `ReturnT` | `ReturnT` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fn` | (...`args`: `ArgumentsT`) => `ReturnT` \| `PromiseLike`<`ReturnT`\> | Promise-returning/async function to debounce. |
| `wait?` | `number` | Milliseconds to wait before calling `fn`. Default value is 25ms |
| `options?` | `DebounceOptions` | - |

#### Returns

`fn`

A function that delays calling `fn` until after `wait` milliseconds have elapsed since the last time it was called.

▸ (`...args`): `Promise`<`ReturnT`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `ArgumentsT` |

##### Returns

`Promise`<`ReturnT`\>

#### Defined in

node_modules/.pnpm/perfect-debounce@1.0.0/node_modules/perfect-debounce/dist/index.d.ts:32

___

### deepClone

▸ **deepClone**<`T`\>(`input`): `T`

Creates a deep clone of the input value.

This function first tries to clone the input using the `structuredClone` method, which is a structured clone algorithm that can create deep copies of structured data.
If `structuredClone` fails (throws an error), the function resorts to using a fallback `_deepClone` method.

The function is generic and can handle inputs of any type, but the fallback `_deepClone` method will only be called if `structuredClone` throws an error.
If `structuredClone` doesn't throw an error, the input is assumed to be structured data and a deep copy of it is returned.
If `structuredClone` throws an error, it's assumed the input is not structured data and the fallback method is used.

**`See`**

 - [rfdc](https://github.com/davidmarkclements/rfdc) for the fallback deep clone method.
 - [structuredClone](https://developer.mozilla.org/en-US/docs/Web/API/structuredClone) for more about the structured clone algorithm.

**`Example`**

```ts
import { deepClone } from '@democrance/utils';

const obj = { foo: { bar: { baz: 'qux' } } };
const clonedObj = deepClone(obj);
console.log(clonedObj); // Output: { foo: { bar: { baz: 'qux' } } }
console.log(clonedObj === obj); // Output: false (clonedObj is a deep clone of obj)

const arr = [1, [2, [3, [4]]]];
const clonedArr = deepClone(arr);
console.log(clonedArr); // Output: [1, [2, [3, [4]]]]
console.log(clonedArr === arr); // Output: false (clonedArr is a deep clone of arr)
```

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type of the input and the returned value. |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `T` | The input value to clone. |

#### Returns

`T`

A deep clone of the input value.

#### Defined in

[lib/deepClone.ts:37](https://github.com/daniil4udo/utils/blob/e4121f0/lib/deepClone.ts#L37)

___

### deepEqual

▸ **deepEqual**<`A`, `B`\>(`a`, `b`): `boolean`

Whether the items passed are deeply-equal in value.

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `A` |
| `b` | `B` |

#### Returns

`boolean`

#### Defined in

node_modules/.pnpm/fast-equals@5.0.1/node_modules/fast-equals/index.d.ts:13

___

### deepForEach

▸ **deepForEach**<`Collection`\>(`value`, `fn`, `path?`, `depth?`): `void`

#### Type parameters

| Name |
| :------ |
| `Collection` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `value` | `Collection`[] \| `Record`<`string`, `Collection`\> | `undefined` |
| `fn` | `Fn` | `undefined` |
| `path` | `string` | `''` |
| `depth` | `number` | `-1` |

#### Returns

`void`

#### Defined in

[lib/deepForEach.ts:29](https://github.com/daniil4udo/utils/blob/e4121f0/lib/deepForEach.ts#L29)

___

### defaultsDeep

▸ **defaultsDeep**<`Source`, `Defaults`\>(`source`, `...defaults`): `Defu`<`Source`, `Defaults`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Source` | extends `Input` |
| `Defaults` | extends (`Input` \| `IgnoredInput`)[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `Source` \| `IgnoredInput` |
| `...defaults` | `Defaults` |

#### Returns

`Defu`<`Source`, `Defaults`\>

#### Defined in

node_modules/.pnpm/defu@6.1.2/node_modules/defu/dist/defu.d.ts:11

___

### defaultsDeepArrayFn

▸ **defaultsDeepArrayFn**<`Source`, `Defaults`\>(`source`, `...defaults`): `Defu`<`Source`, `Defaults`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Source` | extends `Input` |
| `Defaults` | extends (`Input` \| `IgnoredInput`)[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `Source` |
| `...defaults` | `Defaults` |

#### Returns

`Defu`<`Source`, `Defaults`\>

#### Defined in

node_modules/.pnpm/defu@6.1.2/node_modules/defu/dist/defu.d.ts:9

___

### defaultsDeepFn

▸ **defaultsDeepFn**<`Source`, `Defaults`\>(`source`, `...defaults`): `Defu`<`Source`, `Defaults`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Source` | extends `Input` |
| `Defaults` | extends (`Input` \| `IgnoredInput`)[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `Source` |
| `...defaults` | `Defaults` |

#### Returns

`Defu`<`Source`, `Defaults`\>

#### Defined in

node_modules/.pnpm/defu@6.1.2/node_modules/defu/dist/defu.d.ts:9

___

### detectMode

▸ **detectMode**(): ``null`` \| `string`

Detects the current mode of the environment.

It first tries to retrieve the mode from the `import.meta.env` object.
If that fails (i.e., the object is `undefined`), it retrieves the mode from the `process.env` object.

**`Remarks`**

This function is part of the [@democrance/utils](https://github.com/daniil4udo/utils) library.

**`Example`**

```ts
import { detectMode } from '@democrance/utils';

console.log(detectMode()); // Outputs: 'development', 'production', or undefined
```

#### Returns

``null`` \| `string`

The mode of the current environment or `undefined` if neither `import.meta.env.MODE` nor `process.env.NODE_ENV` exist.

#### Defined in

[lib/detectMode.ts:19](https://github.com/daniil4udo/utils/blob/e4121f0/lib/detectMode.ts#L19)

___

### emojiToIso

▸ **emojiToIso**(`emoji?`): ``null`` \| `string`

Converts a flag emoji to a country ISO code.

**`Example`**

```ts
emojiToIso('🇺🇸'); // Outputs: 'US'
emojiToIso('🇬🇧'); // Outputs: 'GB'
emojiToIso('👍'); // Outputs: null
```

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `emoji?` | `string` | `''` | The flag emoji to convert. |

#### Returns

``null`` \| `string`

The country ISO code corresponding to the flag emoji, or null if the emoji is not a valid flag.

#### Defined in

[lib/emoji/isoToEmojiToISO.ts:56](https://github.com/daniil4udo/utils/blob/e4121f0/lib/emoji/isoToEmojiToISO.ts#L56)

___

### filterObject

▸ **filterObject**<`T`\>(`object`, `predicate`): [`TargetObject`](modules.md#targetobject)<`T`\>

This utility function iterates over the properties of the given object and includes them in the
returned object if the predicate function returns `true` for the given property.

The function is especially useful when you need to filter properties of an object based on some
custom condition.

If no predicate function is provided, or if the provided predicate is not a function, the original
object is returned without any filtering.

**`Remarks`**

This function is part of the [@democrance/utils](https://github.com/daniil4udo/utils) library.

**`Example`**

```ts
import { filterObject } from '@democrance/utils';

const myObj = { a: 1, b: 2, c: 3 }
// Filter the object to include only key-value pairs where the value is greater than 1
const filteredObj = filterObject(myObj, (key, value) => value > 1)
console.log(filteredObj) // { b: 2, c: 3 }
// Filter the object to include only key-value pairs where the key starts with 'a'
const filteredObj2 = filterObject(myObj, (key) => key.startsWith('a'))
console.log(filteredObj2) // { a: 1 }
@public
```

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type of the values in the object. |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`TargetObject`](modules.md#targetobject)<`T`\> | The object to filter. |
| `predicate` | [`PredicateFunction`](modules.md#predicatefunction)<`T`\> | The function used to test each item of the object. This function should return `true` to keep the item, or `false` otherwise. It accepts four arguments: `key` The key of the current element being processed in the object. `value` The value of the current element being processed in the object. `index` The index of the current element being processed in the object. `object` The object `filterObject` was called upon. |

#### Returns

[`TargetObject`](modules.md#targetobject)<`T`\>

A new object with the properties that passed the test.
     If no properties pass the test, an empty object will be returned.

#### Defined in

[lib/filterObject.ts:67](https://github.com/daniil4udo/utils/blob/e4121f0/lib/filterObject.ts#L67)

___

### formatValue

▸ **formatValue**(`value`, `fractions?`, `locale?`): `string`

Function to format a value to a locale string with the ability to control the fraction digits.
It takes the value as a string or number, and an optional fractions parameter which can be a boolean or number.
If fractions is a boolean and is true, the number will be formatted with the maximum safe fraction digits (20).
If fractions is a boolean and is false, the number will be formatted without fraction digits.
If fractions is a number, the number will be formatted with the fractions provided. However, if the fractions
provided exceeds the maximum safe fraction digits, the maximum safe fraction digits will be used.

The function throws an error if the fractions parameter is not a boolean or number.

**`Remarks`**

This function is a part of the [@democrance/utils](https://github.com/daniil4udo/utils) library.

**`Throws`**

- Will throw an error if fractions is not a boolean or a number.

**`Example`**

```ts
import { formatValue } from '@democrance/utils';

formatValue(1234.5678); // Outputs: "1,234.57"
formatValue(1234.5678, 3); // Outputs: "1,234.568"
formatValue(1234.5678, 2, 'de-DE'); // Outputs: "1.234,57"
```

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `value` | `string` \| `number` | `undefined` | The value to be formatted. If it is a string, it will be converted to a number. |
| `fractions?` | `number` \| `boolean` | `true` | Determines the number of fraction digits in the formatted output. |
| `locale?` | `string` | `'en'` | The locale in which the number should be formatted. Default is 'en' for English. |

#### Returns

`string`

- The formatted number as a string.

#### Defined in

[lib/price.ts:103](https://github.com/daniil4udo/utils/blob/e4121f0/lib/price.ts#L103)

___

### getCtor

▸ **getCtor**<`Module`\>(`module`): `Module` \| `undefined`

Returns the default export if the provided module is an ECMAScript (ES) module,
otherwise returns the module itself.

The function is designed to normalize the way of getting module's exports regardless of
the format of the module (CommonJS or ES Module).

If the `module` argument does not follow the structure of an ECMAScript module (i.e.,
it does not have `__esModule` or `Symbol.toStringTag` properties), the function treats
the `module` as a CommonJS module and returns it as is.

**`Remarks`**

This function is part of the [@democrance/utils](https://github.com/daniil4udo/utils) library.

**`Example`**

```ts
import { getCtor } from '@democrance/utils';

// CommonJS module
const myCjsModule = { foo: "bar" };
console.log(getCtor(myCjsModule)); // { foo: "bar" }

// ES module
const myEsModule = { __esModule: true, default: { foo: "bar" } };
console.log(getCtor(myEsModule)); // { foo: "bar" }
@public
```

#### Type parameters

| Name | Description |
| :------ | :------ |
| `Module` | The type of the module's default export (for ES modules) or the module itself (for CommonJS modules). |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `module` | `Module` \| `EsModule`<`Module`\> | The module to check. It could either be an ES module with `__esModule` or `Symbol.toStringTag` properties or a CommonJS module. |

#### Returns

`Module` \| `undefined`

The default export of the module if it's an ES module, otherwise the module
itself. Returns `undefined` if `default` is not defined on an ES module.

#### Defined in

[lib/getCtor.ts:52](https://github.com/daniil4udo/utils/blob/e4121f0/lib/getCtor.ts#L52)

___

### getLocalStorageItem

▸ **getLocalStorageItem**(`key`): `any`

Retrieves the value from `'localStorage' | 'sessionStorage'` for the given `key`.

If the value exists, it is automatically deserialized from a JSON string.
If the current environment mode is not 'development', the value is first decoded from base64 before being deserialized.

If no value exists for the `key`, or if an error occurs during the operation, null is returned and an error message is logged to the console.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | The key for which to retrieve the value. |

#### Returns

`any`

The retrieved value, if it exists and is successfully retrieved and deserialized. Otherwise, null.

#### Defined in

[lib/storageWrapper.ts:64](https://github.com/daniil4udo/utils/blob/e4121f0/lib/storageWrapper.ts#L64)

___

### getNameFromPath

▸ **getNameFromPath**(`path?`, `options?`): `undefined` \| `string`

Extracts the file name from a given path.

This function can return the file name with or without the extension, based on the
`extension` option in the options object.

**`Remarks`**

This function is part of the [@democrance/utils](https://github.com/daniil4udo/utils) library.

**`Throws`**

If the input is not of type 'string'.

**`Example`**

```ts
import { getNameFromPath } from '@democrance/utils';

console.log(getNameFromPath('/path/to/file.txt')); // Outputs: 'file.txt'
console.log(getNameFromPath('/path/to/file.txt', { extension: false })); // Outputs: 'file'
@public
```

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `path` | `string` | `''` | The file path from which to extract the name. Defaults to an empty string. |
| `options` | `Object` | `{}` | An optional object containing additional parameters. |
| `options.extension` | `undefined` \| `boolean` | `undefined` | A boolean indicating whether the file name should include the extension. Defaults to `true`. |

#### Returns

`undefined` \| `string`

The file name with or without the extension, based on the `extension` option.
     If the path does not contain a file name, an empty string is returned.

#### Defined in

[lib/getNameFromPath.ts:56](https://github.com/daniil4udo/utils/blob/e4121f0/lib/getNameFromPath.ts#L56)

___

### getSessionStorageItem

▸ **getSessionStorageItem**(`key`): `any`

Retrieves the value from `'localStorage' | 'sessionStorage'` for the given `key`.

If the value exists, it is automatically deserialized from a JSON string.
If the current environment mode is not 'development', the value is first decoded from base64 before being deserialized.

If no value exists for the `key`, or if an error occurs during the operation, null is returned and an error message is logged to the console.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | The key for which to retrieve the value. |

#### Returns

`any`

The retrieved value, if it exists and is successfully retrieved and deserialized. Otherwise, null.

#### Defined in

[lib/storageWrapper.ts:64](https://github.com/daniil4udo/utils/blob/e4121f0/lib/storageWrapper.ts#L64)

___

### hasValue

▸ **hasValue**(`input`): `boolean`

Checks if a value is defined and not an empty string.

This function first checks if a value is null or undefined using `isNil()`. If the value is not null or undefined,
it then checks if the value is not an empty string. This is useful when you want to ensure that a string variable
has been assigned a non-empty value.

**`Remarks`**

This function is part of the [@democrance/utils](https://github.com/daniil4udo/utils) library.

**`Example`**

```ts
import { hasValue } from '@democrance/utils';

console.log(hasValue(null));       // Outputs: false
console.log(hasValue(undefined));  // Outputs: false
console.log(hasValue(''));         // Outputs: false
console.log(hasValue('Hello'));    // Outputs: true
@public
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `any` | The value to check. |

#### Returns

`boolean`

`true` if the value is not null, not undefined, and not an empty string, `false` otherwise.

#### Defined in

[lib/hasValue.ts:79](https://github.com/daniil4udo/utils/blob/e4121f0/lib/hasValue.ts#L79)

___

### highlightMatch

▸ **highlightMatch**(`str`, `indices?`, `options?`): `string`

A function that highlights matches in a `str` string by wrapping them in HTML tags.

This function takes a `str` string and an array of match ranges, and returns a new string where each match range is
wrapped in the specified HTML tag. A match range is a two-element array where the first element is the start index
of the match and the second element is the end index of the match. The indices are inclusive.

If no match ranges are provided or if the `str` string is empty, the function returns the original `str` string.
If no tag is specified, the function uses 'strong' as the default tag.

**`Remarks`**

This function is part of the [@democrance/utils](https://github.com/daniil4udo/utils) library.

**`Example`**

```ts
import { highlightMatch } from '@democrance/utils';

const str1 = 'Hello, world!';
const matches1 = [[7, 11]]; // Matches the word 'world'
console.log(highlightMatch(str1, matches1)); // Output: 'Hello, <strong>world</strong>!'

const str2 = 'Hello, world!';
const matches2 = [[0, 4], [7, 11]]; // Matches the words 'Hello' and 'world'
console.log(highlightMatch(str2, matches2, { tag: 'span' })); // Output: '<span>Hello</span>, <span>world</span>!'

const str3 = 'Hello, world!';
const matches3 = [[-5, 5]]; // Matches nothing'
console.log(highlightMatch(str3, matches3)); // Output: 'Hello, world!'

const str4 = 'Hello, world!';
const matches4 = [[0, 20]]; // Matches the entire string
console.log(highlightMatch(str4, matches4));  // Output: '<strong>Hello, world!</strong>'

const str5 = 'Hello, world!';
const matches5 = [[0, 4]];
const options5 = { tag: 'em' };
console.log(highlightMatch(str5, matches5, options5)); // Output: '<em>Hello</em>, world!'
@public
```

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `str` | `string` | `undefined` | The string in which to highlight matches. |
| `indices` | `MatchRange` | `[]` | - |
| `options` | `Options` | `{}` | An options object. It currently supports one option: 'tag', which specifies the HTML tag to use for wrapping matches. Defaults to an object with 'tag' set to 'strong'. |

#### Returns

`string`

The string with matches highlighted.

#### Defined in

[lib/highlightMatch.ts:134](https://github.com/daniil4udo/utils/blob/e4121f0/lib/highlightMatch.ts#L134)

___

### htmlTruncate

▸ **htmlTruncate**(`htmlString`, `maxLength`, `options?`): `string`

A function that truncates an HTML string to a specified length.

This function uses the 'text-clipper' library to truncate the provided HTML string to a maximum length.
It passes the provided parameters to the 'text-clipper' function along with an options object that
always includes `{ html: true }` to indicate that the input is an HTML string.

Any additional options provided in the `options` parameter are merged with `{ html: true }` and passed
to the 'text-clipper' function.

**`Remarks`**

This function is part of the [@democrance/utils](https://github.com/daniil4udo/utils) library.

**`See`**

[https://github.com/arendjr/text-clipper](https://github.com/arendjr/text-clipper)

**`Example`**

```ts
import { htmlTruncate } from '@democrance/utils';

// Truncate an HTML string with a maximum length of 20 characters
const html = '<p>This is an <strong>example</strong> HTML string.</p>';
console.log(htmlTruncate(html, 20)); // Output: '<p>This is an <strong>exa</strong></p>'
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `htmlString` | `string` | The HTML string to truncate. |
| `maxLength` | `number` | The maximum length of the output string. |
| `options` | `undefined` \| `ClipOptions` | Additional options to pass to the 'text-clipper' function. |

#### Returns

`string`

The truncated HTML string.

#### Defined in

[lib/htmlTruncate.ts:41](https://github.com/daniil4udo/utils/blob/e4121f0/lib/htmlTruncate.ts#L41)

___

### imageExists

▸ **imageExists**<`T`\>(`url`, `options?`): `Promise`<`T` \| `boolean`\>

Checks if an image exists at the given URL.

**`Remarks`**

This function is part of the [@democrance/utils](https://github.com/daniil4udo/utils) library.

**`Throws`**

If `throwError` is set to `true` and the image does not exist.

**`Example`**

```ts
import { imageExists, ImageExistsOptions } from '@democrance/utils';

const options: ImageExistsOptions = { throwError: true };

try {
    const url = await imageExists('https://example.com/image.png', options);
    console.log(url); // Outputs: 'https://example.com/image.png' or false
} catch (error) {
    console.log(error.message); // Outputs: '[imageExists]: Image https://example.com/image.png does not exist'
}
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `undefined` \| ``null`` \| `T` | The URL of the image to check. |
| `options` | `ImageExistsOptions` | An optional ImageExistsOptions object. |

#### Returns

`Promise`<`T` \| `boolean`\>

A promise that resolves with the URL of the image if it exists. If the image does not exist, it resolves with `false` or throws an error depending on the `throwError` option.

#### Defined in

[lib/imageExists.ts:37](https://github.com/daniil4udo/utils/blob/e4121f0/lib/imageExists.ts#L37)

___

### isAbsoluteURL

▸ **isAbsoluteURL**(`url?`): `boolean`

Checks if a URL is an absolute URL.

This function checks if the provided URL is absolute based on its syntax. According to RFC 3986,
a URL is considered absolute if it begins with a scheme name followed by '://', or if it begins
with '//' (protocol-relative URL). A scheme name is a sequence of characters that begins with
a letter and is followed by any combination of letters, digits, plus signs, periods, or hyphens.

The function uses a regular expression to check if the URL matches either of these patterns.

**`Remarks`**

This function is part of the [@democrance/utils](https://github.com/daniil4udo/utils) library.

**`Example`**

```ts
import { isAbsoluteURL } from '@democrance/utils';

console.log(isAbsoluteURL('https://example.com')); // Output: true
console.log(isAbsoluteURL('//example.com')); // Output: true
console.log(isAbsoluteURL('/path/to/resource')); // Output: false
console.log(isAbsoluteURL('mailto:test@example.com')); // Output: false
```

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `url` | `string` | `''` | The URL to check. Defaults to an empty string. |

#### Returns

`boolean`

`true` if the URL is absolute, `false` otherwise.

#### Defined in

[lib/isAbsoluteURL.ts:28](https://github.com/daniil4udo/utils/blob/e4121f0/lib/isAbsoluteURL.ts#L28)

___

### isColor

▸ **isColor**(`str`): `boolean`

Checks if a string represents a valid color in CSS.

This function tests if a given string is recognized as a color
by the browser's CSS engine. It uses a DOM Option element to set
a color style and then checks if the color was recognized.

**`Remarks`**

This function is part of the [@democrance/utils](https://github.com/daniil4udo/utils) library.

**`Example`**

```ts
import { isColor } from '@democrance/utils';

console.log(isColor('red')); // returns true
console.log(isColor('#ff0000')); // returns true
console.log(isColor('rgb(255, 0, 0)')); // returns true
console.log(isColor('invalid color')); // returns false
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | The string to test. This should be a string that you want to test whether it represents a CSS color. It could be a named color (like 'red'), a hex color (like '#ff0000'), an rgb color (like 'rgb(255, 0, 0)'), or any other string that could represent a color in CSS. |

#### Returns

`boolean`

`true` if `str` is a valid color string
     as recognized by the browser's CSS engine. Otherwise, returns `false`.

#### Defined in

[lib/isColor.ts:30](https://github.com/daniil4udo/utils/blob/e4121f0/lib/isColor.ts#L30)

___

### isCountryIso

▸ **isCountryIso**(`iso?`): `boolean`

Checks if a string is a valid country ISO code.

**`Example`**

```ts
isCountryIso('us'); // Outputs:  true
isCountryIso('UK'); // Outputs:  true
isCountryIso('123'); // Outputs:  false
```

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `iso?` | `string` | `''` | The input string to check. |

#### Returns

`boolean`

True if the string is a valid country ISO code, false otherwise.

#### Defined in

[lib/emoji/isoToEmojiToISO.ts:15](https://github.com/daniil4udo/utils/blob/e4121f0/lib/emoji/isoToEmojiToISO.ts#L15)

___

### isDefined

▸ **isDefined**(`input`): `boolean`

Checks if a value is defined, i.e., not null or undefined.

This function is the inverse of `isNil()`. It uses `isNil()` to check if a value is null or undefined,
and then negates the result. This is useful when you want to ensure that a variable has been
assigned a value.

**`Remarks`**

This function is part of the [@democrance/utils](https://github.com/daniil4udo/utils) library.

**`Example`**

```ts
import { isDefined } from '@democrance/utils';

console.log(isDefined(null));       // Outputs: false
console.log(isDefined(undefined));  // Outputs: false
console.log(isDefined(''));         // Outputs: true
@public
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `any` | The value to check. |

#### Returns

`boolean`

`true` if the value is not null or undefined, `false` otherwise.

#### Defined in

[lib/hasValue.ts:51](https://github.com/daniil4udo/utils/blob/e4121f0/lib/hasValue.ts#L51)

___

### isEmptyArray

▸ **isEmptyArray**<`T`\>(`arr?`, `opts?`): `any`

Checks whether the given array is "empty". The criteria for an array being considered "empty" is that either the array itself is null/undefined,
the array has no elements, or all elements of the array are themselves "empty" according to the provided `comparator` function.
If the `recursive` option is true (the default), then nested arrays are checked recursively.

**`Remarks`**

This function is part of the [@democrance/utils](https://github.com/daniil4udo/utils) library.

**`Example`**

```ts
import { isEmptyArray } from '@democrance/utils';

console.log(isEmptyArray([1, 2, 3])); // Returns false
console.log(isEmptyArray([])); // Returns true
console.log(isEmptyArray([[], [[], []]])); // Returns true
console.log(isEmptyArray([[], [[], [1]]])); // Returns false
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `arr` | `T` \| `T`[] | `[]` | The array to check. |
| `opts` | `Options`<`T`\> | `{}` | An options object. |

#### Returns

`any`

`true` if the array is considered "empty", `false` otherwise.

#### Defined in

[lib/isEmptyArray.ts:50](https://github.com/daniil4udo/utils/blob/e4121f0/lib/isEmptyArray.ts#L50)

___

### isEmptyCollection

▸ **isEmptyCollection**(`collection`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `collection` | `any` |

#### Returns

`boolean`

#### Defined in

[lib/isEmptyCollection.ts:10](https://github.com/daniil4udo/utils/blob/e4121f0/lib/isEmptyCollection.ts#L10)

___

### isHTML

▸ **isHTML**(`str`): `boolean`

Checks if a given string is a valid HTML.

**`Remarks`**

This function is a part of the [@democrance/utils](https://github.com/daniil4udo/utils) library.

**`Function`**

isHTML

**`Example`**

```ts
import { isHTML } from '@democrance/utils';

isHTML('<p>Hello, World!</p>'); // Outputs: true
isHTML('<p>Hello, World!'); // Outputs: true (valid HTML despite missing closing tag)
isHTML('Hello, World!'); // Outputs: false (plain text is not considered valid HTML)
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | The string to validate as HTML. |

#### Returns

`boolean`

Returns `true` if the string is valid HTML, otherwise `false`.

#### Defined in

[lib/isHTML.ts:21](https://github.com/daniil4udo/utils/blob/e4121f0/lib/isHTML.ts#L21)

___

### isIterable

▸ **isIterable**(`input`): `boolean`

Checks if a given input is iterable.

An object is iterable if it defines its iteration behavior, such as what values
are looped over in a `for..of` construct. Some built-in types, like `Array` or
`Map`, have a default iteration behavior, while other types (such as `Object`)
do not. In order to be iterable, an object must implement the `@@iterator` method.

**`Remarks`**

This function is a part of the [@democrance/utils](https://github.com/daniil4udo/utils) library.

**`Function`**

isIterable

**`Example`**

```ts
import { isIterable } from '@democrance/utils';

isIterable([1, 2, 3]); // Outputs: true
isIterable(123); // Outputs: false
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `any` | The input to check for iterability. |

#### Returns

`boolean`

Returns `true` if the input is iterable, otherwise `false`.

#### Defined in

[lib/isIterable.ts:25](https://github.com/daniil4udo/utils/blob/e4121f0/lib/isIterable.ts#L25)

___

### isNil

▸ **isNil**(`input`): `boolean`

Checks if a value is null or undefined.

This function uses the loose equality operator (`==`) to compare the given value with `null`,
which will return `true` for both `null` and `undefined` values.
This is useful when you want to check if a variable has been assigned a value or not.

**`Remarks`**

This function is part of the [@democrance/utils](https://github.com/daniil4udo/utils) library.

**`Example`**

```ts
import { isNil } from '@democrance/utils';

console.log(isNil(null));       // Outputs: true
console.log(isNil(undefined));  // Outputs: true
console.log(isNil(''));         // Outputs: false
@public
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `any` | The value to check. |

#### Returns

`boolean`

`true` if the value is null or undefined, `false` otherwise.

#### Defined in

[lib/hasValue.ts:24](https://github.com/daniil4udo/utils/blob/e4121f0/lib/hasValue.ts#L24)

___

### isNumber

▸ **isNumber**(`input`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `unknown` |

#### Returns

`boolean`

#### Defined in

[lib/isPrimitive.ts:72](https://github.com/daniil4udo/utils/blob/e4121f0/lib/isPrimitive.ts#L72)

___

### isPrimitive

▸ **isPrimitive**(`input`): `boolean`

Checks if a given input is a primitive value.

In JavaScript, a primitive (primitive value, primitive data type) is data that
is not an object and has no methods. There are 7 primitive data types:
`string`, `number`, `bigint`, `boolean`, `undefined`, `symbol`, and special case `null`.

**`Remarks`**

This function is a part of the [@democrance/utils](https://github.com/daniil4udo/utils) library.

**`Function`**

isPrimitive

**`Example`**

```ts
import { isPrimitive } from '@democrance/utils';

isPrimitive('Hello') // Outputs: true
isPrimitive({}) // Outputs: false
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `any` | The input to check for being a primitive value. |

#### Returns

`boolean`

Returns `true` if the input is a primitive value, otherwise `false`.

#### Defined in

[lib/isPrimitive.ts:28](https://github.com/daniil4udo/utils/blob/e4121f0/lib/isPrimitive.ts#L28)

___

### isPrimitiveLike

▸ **isPrimitiveLike**(`input`): `boolean`

Checks if a given input is a primitive or primitive-like value.

In addition to JavaScript primitive data types, Date and RegExp objects are considered
as primitive-like as they hold primitive values and can be immutable if their state is not changed.

**`Example`**

```ts
import { isPrimitiveLike } from '@democrance/utils';

// returns true
isPrimitiveLike(new Date())

// returns false
isPrimitiveLike({})
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `any` | The input to check for being a primitive-like value. |

#### Returns

`boolean`

Returns `true` if the input is a primitive-like value, otherwise `false`.

#### Defined in

[lib/isPrimitive.ts:63](https://github.com/daniil4udo/utils/blob/e4121f0/lib/isPrimitive.ts#L63)

___

### isProperNaN

▸ **isProperNaN**(`input`): `boolean`

Determines if a given input can not be treated as a number.

**`Remarks`**

This function utilizes the isNumber function to verify if the input can not be treated as a number.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `any` | The value to check. |

#### Returns

`boolean`

True if the input can not be treated as a number, false otherwise.

#### Defined in

[lib/isPrimitive.ts:83](https://github.com/daniil4udo/utils/blob/e4121f0/lib/isPrimitive.ts#L83)

___

### isSubstringInString

▸ **isSubstringInString**(`str?`, `subString?`, `«destructured»?`): `boolean`

Checks if a substring exists within a string in a case-insensitive manner.

It converts both the input string and the substring to uppercase before checking,
making the check case-insensitive.

**`Remarks`**

This function is part of the [@democrance/utils](https://github.com/daniil4udo/utils) library.

**`Throws`**

If the input is not of type 'string'.

**`Example`**

```ts
import { isSubstringInString } from '@democrance/utils';

console.log(isSubstringInString('Hello world', 'hello')); // Outputs: true
console.log(isSubstringInString('Hello world', 'goodbye')); // Outputs: false
```

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `str` | `string` | `''` | The string in which to check for the substring. Defaults to an empty string. |
| `subString` | `string` | `''` | The substring to check for. Defaults to an empty string. |
| `«destructured»` | `Object` | `{}` | - |
| › `caseSensitive` | `undefined` \| `boolean` | `undefined` | - |

#### Returns

`boolean`

`true` if the substring is found in the string, otherwise `false`.

#### Defined in

[lib/isSubstringInString.ts:27](https://github.com/daniil4udo/utils/blob/e4121f0/lib/isSubstringInString.ts#L27)

___

### isoToEmoji

▸ **isoToEmoji**(`iso?`): ``null`` \| `string`

Converts a country ISO code to a flag emoji.

**`Example`**

```ts
isoToEmoji('us'); // Outputs:  '🇺🇸'
isoToEmoji('GB'); // Outputs:  '🇬🇧'
isoToEmoji('123'); // Outputs:  null
```

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `iso?` | `string` | `''` | The country ISO code to convert. |

#### Returns

``null`` \| `string`

The flag emoji corresponding to the country ISO code, or null if the ISO code is invalid.

#### Defined in

[lib/emoji/isoToEmojiToISO.ts:37](https://github.com/daniil4udo/utils/blob/e4121f0/lib/emoji/isoToEmojiToISO.ts#L37)

___

### keyBy

▸ **keyBy**<`T`\>(`a`, `k?`): `Record`<`string` \| `number` \| `symbol`, `T`\>

Creates an object composed of keys generated from the results of running each element of `a` through `k`.
If `k` is a function, it's invoked with one argument: the array element.
If `k` is a string, it's used as a property key on each element to create the returned object key.
If `k` is undefined or not provided, the array element itself is used as the key.

**`Remarks`**

This function is a part of the [@democrance/utils](https://github.com/daniil4udo/utils) library.

**`Function`**

keyBy

**`Example`**

```ts
import { keyBy } from '@democrance/utils';

keyBy(['a', 'b', 'c']) // Outputs: {a: 'a', b: 'b', c: 'c'}
keyBy([{id: 1}, {id: 2}], 'id') // Outputs: {1: {id: 1}, 2: {id: 2}}
keyBy([{id: 1}, {id: 2}], obj => 'prefix' + obj.id) // Outputs: {prefix1: {id: 1}, prefix2: {id: 2}}
```

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | the type of elements in the input array. |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `T`[] | The array to iterate over. |
| `k?` | `Key` | The key generation criterion. It can be a function, a string, or undefined. |

#### Returns

`Record`<`string` \| `number` \| `symbol`, `T`\>

Returns the composed aggregate object.

#### Defined in

[lib/keyBy.ts:36](https://github.com/daniil4udo/utils/blob/e4121f0/lib/keyBy.ts#L36)

___

### length

▸ **length**(`collection`, `«destructured»?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `collection` | `any` |
| `«destructured»` | `Object` |
| › `includeString` | `undefined` \| `boolean` |

#### Returns

`any`

#### Defined in

[lib/length.ts:1](https://github.com/daniil4udo/utils/blob/e4121f0/lib/length.ts#L1)

___

### memoize

▸ **memoize**<`Fn`\>(`fn`, `options?`): `Memoized`<`Fn`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Fn` | extends `AnyFn` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | `Fn` \| `Memoized`<`Fn`\> |
| `options?` | `Options`<`Fn`\> |

#### Returns

`Memoized`<`Fn`\>

#### Defined in

node_modules/.pnpm/micro-memoize@4.1.2/node_modules/micro-memoize/index.d.ts:129

___

### memoizeDeep

▸ **memoizeDeep**<`Fn`\>(`fn`, `options?`): `Memoized`<`Fn`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Fn` | extends `AnyFn` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | `Fn` \| `Memoized`<`Fn`\> |
| `options?` | `Options`<`Fn`\> |

#### Returns

`Memoized`<`Fn`\>

#### Defined in

[lib/memoize.ts:40](https://github.com/daniil4udo/utils/blob/e4121f0/lib/memoize.ts#L40)

___

### memoizeLast

▸ **memoizeLast**<`Fn`\>(`fn`, `options?`): `Memoized`<`Fn`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Fn` | extends `AnyFn` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | `Fn` \| `Memoized`<`Fn`\> |
| `options?` | `Options`<`Fn`\> |

#### Returns

`Memoized`<`Fn`\>

#### Defined in

[lib/memoize.ts:86](https://github.com/daniil4udo/utils/blob/e4121f0/lib/memoize.ts#L86)

___

### micromatch

▸ **micromatch**(`list`, `patterns`, `options?`): `string`[]

The main function takes a list of strings and one or more glob patterns to use for matching.

**`Example`**

```js
var mm = require('micromatch');
mm(list, patterns[, options]);

console.log(mm(['a.js', 'a.txt'], ['*.js']));
//=> [ 'a.js' ]
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `list` | readonly `string`[] | A list of strings to match |
| `patterns` | `string` \| readonly `string`[] | One or more glob patterns to use for matching. |
| `options?` | [`Options`](interfaces/micromatch.Options.md) | See available options for changing how matches are performed |

#### Returns

`string`[]

Returns an array of matches

#### Defined in

node_modules/.pnpm/@types+micromatch@4.0.2/node_modules/@types/micromatch/index.d.ts:343

___

### movePropLevelUp

▸ **movePropLevelUp**<`T`\>(`parentObject`, `propertyName`): `T`

Moves a property level up in an object, while maintaining the original property order.
The function uses deep cloning to avoid mutation of the nested property.

**`Remarks`**

This function is a part of the [@democrance/utils](https://github.com/daniil4udo/utils) library.

**`Function`**

movePropLevelUp

**`Example`**

```ts
import { movePropLevelUp } from '@democrance/utils';

const obj = { a: 1, b: { c: 2, d: 3 }, e: 4 };
const result = movePropLevelUp(obj, 'b'); // Outputs: { a: 1, c: 2, d: 3, e: 4 }
```

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | extends `object` | The type of the object |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parentObject` | `T` | The object containing the property to be moved. |
| `propertyName` | keyof `T` | The name of the property to be moved a level up. |

#### Returns

`T`

A new object with the specified property moved up a level.

If the `parentObject` is not an object or does not contain the specified property,
the function returns the `parentObject` unchanged.

If the `parentObject` does contain the specified property,
the function returns a new object with all the properties of the `parentObject`,
and the properties of the specified property moved up a level.
The original `parentObject` is not mutated.

The function uses 'to-fast-properties' to optimize the property lookup speed of the returned object.

#### Defined in

[lib/movePropLevelUp.ts:37](https://github.com/daniil4udo/utils/blob/e4121f0/lib/movePropLevelUp.ts#L37)

___

### parseLocaleNumber

▸ **parseLocaleNumber**(`value`, `locale`): `number`

Parses a string containing a locale-formatted number into a JavaScript number.

The function uses the Intl.NumberFormat object to determine the thousands and decimal separators for
the specified locale. It then removes the thousands separators and replaces the decimal separator
with a dot to create a string that can be parsed by JavaScript's parseFloat function.

**`Remarks`**

This function is a part of the [@democrance/utils](https://github.com/daniil4udo/utils) library.

**`Function`**

parseLocaleNumber

**`Example`**

```ts
import { parseLocaleNumber } from '@democrance/utils';

// returns 1000000.1
parseLocaleNumber('1,000,000.1', 'en-US');

// returns 1000000.1
parseLocaleNumber('1.000.000,1', 'de-DE');
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `any` | The string to be parsed. This should contain a number formatted according to the rules of the specified locale. For example, if the locale is 'de-DE', then the number should be formatted with '.' as the thousands separator and ',' as the decimal separator. |
| `locale` | `string` | The IETF language tag of the locale that the number is formatted in. This is used to determine the thousands and decimal separators that are used in the number string. |

#### Returns

`number`

The parsed number. If the number string is not a valid number in the specified locale,
     the function will return NaN.

#### Defined in

[lib/price.ts:61](https://github.com/daniil4udo/utils/blob/e4121f0/lib/price.ts#L61)

___

### parseURLTemplate

▸ **parseURLTemplate**(`template`): `Template`

#### Parameters

| Name | Type |
| :------ | :------ |
| `template` | `string` |

#### Returns

`Template`

#### Defined in

node_modules/.pnpm/url-template@3.1.0/node_modules/url-template/lib/url-template.d.ts:7

___

### price

▸ **price**(`value?`, `locale`, `fractions`): `string` \| `number`

Formats a price value with currency sign and formatting options.

**`Remarks`**

This function is a part of the [@democrance/utils](https://github.com/daniil4udo/utils) library.

**`Function`**

price

**`Example`**

```ts
import { price } from '@democrance/utils';

price(1234.5678, { currencySign: '$', priceFormat: '{currency}{amount}' }, 2); // Outputs "$1,234.57"
price(1234.5678, { currencySign: '€', priceFormat: '{currency} {amount}' }, 3); // Outputs "€ 1,234.568"
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value?` | `number` | The price value to format. Can be a string or number. Defaults to 0. |
| `locale` | `ILocate` | The localization options for number and currency formatting. |
| `fractions` | `number` | The number of decimal places to display. |

#### Returns

`string` \| `number`

The formatted price string.

#### Defined in

[lib/price.ts:178](https://github.com/daniil4udo/utils/blob/e4121f0/lib/price.ts#L178)

___

### removeLocalStorageItem

▸ **removeLocalStorageItem**(`key`): `void`

Removes the value in `'localStorage' | 'sessionStorage'` for the given `key`.

If an error occurs during the operation, an error message is logged to the console but no error is thrown.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | The key for which to remove the value. |

#### Returns

`void`

#### Defined in

[lib/storageWrapper.ts:90](https://github.com/daniil4udo/utils/blob/e4121f0/lib/storageWrapper.ts#L90)

___

### removeSessionStorageItem

▸ **removeSessionStorageItem**(`key`): `void`

Removes the value in `'localStorage' | 'sessionStorage'` for the given `key`.

If an error occurs during the operation, an error message is logged to the console but no error is thrown.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | The key for which to remove the value. |

#### Returns

`void`

#### Defined in

[lib/storageWrapper.ts:90](https://github.com/daniil4udo/utils/blob/e4121f0/lib/storageWrapper.ts#L90)

___

### safeJSONParse

▸ **safeJSONParse**<`T`\>(`input`): `JSONParseResult`<`T`\>

Safely parses a JSON string or returns the input value if parsing fails.

This function attempts to parse the input as JSON using `JSON.parse()`. If the parsing succeeds,
it returns the parsed value. If an error occurs during parsing, it returns the original input value.
The input value is automatically typecasted to a string before parsing to ensure compatibility.

**`Remarks`**

This function is part of the [@democrance/utils](https://github.com/daniil4udo/utils) library.

**`Example`**

```ts
import { safeJSONParse } from '@democrance/utils';

const json = '{ "name": "John", "age": 30 }';
const parsed = safeJSONParse(json);
console.log(parsed); // Outputs: { name: "John", age: 30 }

const invalidJson = '{ "name": "John, "age": 30 }';
const result = safeJSONParse(invalidJson);
console.log(result); // Outputs: '{ "name": "John, "age": 30 }'
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `JSONParseResult`<`T`\> | The value to parse as JSON. |

#### Returns

`JSONParseResult`<`T`\>

- The parsed JSON value or the original input value if parsing fails.

#### Defined in

[lib/safeJSONParse.ts:43](https://github.com/daniil4udo/utils/blob/e4121f0/lib/safeJSONParse.ts#L43)

___

### sameValueZeroEqual

▸ **sameValueZeroEqual**<`A`, `B`\>(`a`, `b`): `boolean`

Whether the values passed are strictly equal or both NaN.

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `A` |
| `b` | `B` |

#### Returns

`boolean`

#### Defined in

node_modules/.pnpm/fast-equals@5.0.1/node_modules/fast-equals/index.d.ts:8

___

### saveAs

▸ **saveAs**(`data`, `filename?`, `options?`): `void`

FileSaver.js implements the saveAs() FileSaver interface in browsers that do not natively support it.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `string` \| `Blob` | The actual file data blob or URL. |
| `filename?` | `string` | The optional name of the file to be downloaded. If omitted, the name used in the file data will be used. If none is provided "download" will be used. |
| `options?` | `FileSaverOptions` | Optional FileSaver.js config |

#### Returns

`void`

#### Defined in

node_modules/.pnpm/@types+file-saver-es@2.0.1/node_modules/@types/file-saver-es/index.d.ts:18

▸ **saveAs**(`data`, `filename?`, `disableAutoBOM?`): `void`

FileSaver.js implements the saveAs() FileSaver interface in browsers that do not natively support it.

**`Deprecated`**

use `{ autoBom: false }` as the third argument

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `string` \| `Blob` | The actual file data blob or URL. |
| `filename?` | `string` | The optional name of the file to be downloaded. If omitted, the name used in the file data will be used. If none is provided "download" will be used. |
| `disableAutoBOM?` | `boolean` | Optional & defaults to `true`. Set to `false` if you want FileSaver.js to automatically provide Unicode text encoding hints |

#### Returns

`void`

#### Defined in

node_modules/.pnpm/@types+file-saver-es@2.0.1/node_modules/@types/file-saver-es/index.d.ts:28

___

### scrollTo

▸ **scrollTo**(`element`, `offset?`): `void`

Scrolls the window to a specified element.

If the `element` parameter is provided, the function calculates the scroll position based on the element's position
and the current scroll position, taking into account the specified `offset` value.

If the `element` parameter is not provided or is null/undefined, the function scrolls to the top of the window.

The function uses the 'scrollRestoration' feature of the browser's history API to restore the scroll position
after a page navigation or refresh. If the 'scrollRestoration' feature is not supported, it does not change
the default behavior of the browser.

The scrolling is performed using the browser's native `scrollTo` method with 'smooth' behavior for a smooth scrolling effect.

**`Remarks`**

This function is a part of the [@democrance/utils](https://github.com/daniil4udo/utils) library.

**`Function`**

scrollTo

**`Example`**

```ts
import { scrollTo } from '@democrance/utils';

// Scroll to an element with the default offset
const element = document.getElementById('my-element');
scrollTo(element);

// Scroll to an element with a custom offset
const element = document.getElementById('my-element');
scrollTo(element, 100);

// Scroll to the top of the window
scrollTo();
```

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `element` | `undefined` \| ``null`` \| `HTMLElement` | `undefined` | The element to scroll to. Can be an HTMLElement, null, or undefined. |
| `offset?` | `number` | `0` | The offset value to adjust the scroll position. Defaults to 0. |

#### Returns

`void`

#### Defined in

[lib/scrollTo.ts:40](https://github.com/daniil4udo/utils/blob/e4121f0/lib/scrollTo.ts#L40)

___

### setLocalStorageItem

▸ **setLocalStorageItem**(`key`, `value`): `void`

Stores the `value` in `'localStorage' | 'sessionStorage'` against the given `key`.

The `value` is automatically serialized into a JSON string.
If the current environment mode is not 'development', the serialized value is also encoded using base64.

If an error occurs during the operation, an error message is logged to the console but no error is thrown.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | The key under which to store the value. |
| `value` | `any` | The value to store. This can be any value that is serializable to JSON. |

#### Returns

`void`

#### Defined in

[lib/storageWrapper.ts:38](https://github.com/daniil4udo/utils/blob/e4121f0/lib/storageWrapper.ts#L38)

___

### setSessionStorageItem

▸ **setSessionStorageItem**(`key`, `value`): `void`

Stores the `value` in `'localStorage' | 'sessionStorage'` against the given `key`.

The `value` is automatically serialized into a JSON string.
If the current environment mode is not 'development', the serialized value is also encoded using base64.

If an error occurs during the operation, an error message is logged to the console but no error is thrown.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | The key under which to store the value. |
| `value` | `any` | The value to store. This can be any value that is serializable to JSON. |

#### Returns

`void`

#### Defined in

[lib/storageWrapper.ts:38](https://github.com/daniil4udo/utils/blob/e4121f0/lib/storageWrapper.ts#L38)

___

### shallowEqual

▸ **shallowEqual**<`A`, `B`\>(`a`, `b`): `boolean`

Whether the items passed are shallowly-equal in value.

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `A` |
| `b` | `B` |

#### Returns

`boolean`

#### Defined in

node_modules/.pnpm/fast-equals@5.0.1/node_modules/fast-equals/index.d.ts:30

___

### shuffle

▸ **shuffle**<`T`\>(`array`): `T`[]

Performs the Fisher-Yates Shuffle on an array in place.
Rearranges the elements of the array randomly.

**`Remarks`**

This function is a part of the [@democrance/utils](https://github.com/daniil4udo/utils) library.

**`Function`**

shuffle

**`Example`**

```ts
import { shuffle } from '@democrance/utils';

shuffle([1, 2, 3, 4, 5]); // Possible output: [3, 5, 1, 2, 4]
shuffle(['a', 'b', 'c']); // Possible output: ['b', 'a', 'c']
```

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type of the elements in the array. |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | readonly `T`[] | The array to shuffle. |

#### Returns

`T`[]

The shuffled array.

#### Defined in

[lib/shuffle.ts:23](https://github.com/daniil4udo/utils/blob/e4121f0/lib/shuffle.ts#L23)

___

### slugify

▸ **slugify**(`str?`): `string`

Converts a string into a slug by removing special characters, replacing spaces with dashes,
and converting to lowercase.

**`Remarks`**

This function is a part of the [@democrance/utils](https://github.com/daniil4udo/utils) library.

**`Function`**

slugify

**`Example`**

```ts
import { slugify } from '@democrance/utils';

slugify('Hello World'); // Returns 'hello-world'
slugify('Hello, World!'); // Returns 'hello-world'
slugify('Déjà Vu'); // Returns 'deja-vu'
```

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `str?` | `string` | `''` | The input string to be converted into a slug. |

#### Returns

`string`

The slugified string.

#### Defined in

[lib/slugify.ts:44](https://github.com/daniil4udo/utils/blob/e4121f0/lib/slugify.ts#L44)

___

### sortObjects

▸ **sortObjects**(`arr`, `key`, `locale?`): `SortableItems`[]

Sorts an array of objects based on a specific key using string comparison in a specified locale.

**`Remarks`**

This function is a part of the [@democrance/utils](https://github.com/daniil4udo/utils) library.

**`Function`**

sortObjects

**`Example`**

```ts
import { sortObjects } from '@democrance/utils';

const collection = [{ name: 'Zoe' }, { name: 'Amy' }, { name: 'Mark' }];
sortObjects(collection, 'name'); // Outputs: [{ name: 'Amy' }, { name: 'Mark' }, { name: 'Zoe' }]
```

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `arr` | `SortableItems`[] | `undefined` | - |
| `key` | `string` | `undefined` | The key to sort the objects by. |
| `locale?` | `string` | `'en-US'` | The locale to use for string comparison. |

#### Returns

`SortableItems`[]

The sorted collection.

#### Defined in

[lib/sortObjects.ts:35](https://github.com/daniil4udo/utils/blob/e4121f0/lib/sortObjects.ts#L35)

___

### splitByIndex

▸ **splitByIndex**<`T`\>(`arr`, `splitIndex?`): `any`[][]

Splits an array at a specific index into two separate arrays.

**`Remarks`**

This function is a part of the [@democrance/utils](https://github.com/daniil4udo/utils) library.

**`Function`**

splitByIndex

**`Example`**

```ts
import { splitByIndex } from '@democrance/utils';

splitByIndex([1, 2, 3, 4, 5], 2); // Outputs: [[1, 2], [3, 4, 5]]
```

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | extends `any`[] | The type of the elements. |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `arr` | `T` | `undefined` | The array to split. |
| `splitIndex?` | `Length`<`T`\> | `arr.length` | The index at which to split the array. |

#### Returns

`any`[][]

An array of two arrays - the first one is the part before the index and the second one is the part after (and including) the index.

#### Defined in

[lib/splitByIndex.ts:30](https://github.com/daniil4udo/utils/blob/e4121f0/lib/splitByIndex.ts#L30)

___

### strToRegexp

▸ **strToRegexp**(`str`): `RegExp`

Converts a string into a RegExp instance, escaping any special characters.

**`Function`**

strToRegexp

**`Example`**

```ts
import { strToRegexp } from '@democrance/utils';

strToRegexp('[abc]'); // Outputs: /\[abc\]/
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | The string to convert into a RegExp. |

#### Returns

`RegExp`

The RegExp instance.

#### Defined in

[lib/stringToRegexp.ts:36](https://github.com/daniil4udo/utils/blob/e4121f0/lib/stringToRegexp.ts#L36)

___

### strictCircularDeepEqual

▸ **strictCircularDeepEqual**<`A`, `B`\>(`a`, `b`): `boolean`

Whether the items passed are deeply-equal in value, including circular references,
based on strict comparison.

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `A` |
| `b` | `B` |

#### Returns

`boolean`

#### Defined in

node_modules/.pnpm/fast-equals@5.0.1/node_modules/fast-equals/index.d.ts:26

___

### strictCircularShallowEqual

▸ **strictCircularShallowEqual**<`A`, `B`\>(`a`, `b`): `boolean`

Whether the items passed are shallowly-equal in value, including circular references,
based on strict comparison.

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `A` |
| `b` | `B` |

#### Returns

`boolean`

#### Defined in

node_modules/.pnpm/fast-equals@5.0.1/node_modules/fast-equals/index.d.ts:43

___

### strictDeepEqual

▸ **strictDeepEqual**<`A`, `B`\>(`a`, `b`): `boolean`

Whether the items passed are deeply-equal in value based on strict comparison.

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `A` |
| `b` | `B` |

#### Returns

`boolean`

#### Defined in

node_modules/.pnpm/fast-equals@5.0.1/node_modules/fast-equals/index.d.ts:17

___

### strictShallowEqual

▸ **strictShallowEqual**<`A`, `B`\>(`a`, `b`): `boolean`

Whether the items passed are shallowly-equal in value based on strict comparison

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `A` |
| `b` | `B` |

#### Returns

`boolean`

#### Defined in

node_modules/.pnpm/fast-equals@5.0.1/node_modules/fast-equals/index.d.ts:34

___

### stringToArrayBuffer

▸ **stringToArrayBuffer**(`str`): `ArrayBuffer`

Converts a string to an ArrayBuffer.

This method takes a string as an input, creates an ArrayBuffer with a size
twice as big as the length of the string (because each character is
assumed to be represented as UTF-16 and thus takes 2 bytes), and then
fills a Uint16Array view of that buffer with the character codes of
the string.

**`Remarks`**

This function is part of the [@democrance/utils](https://github.com/daniil4udo/utils) library.

**`Example`**

```ts
import { stringToArrayBuffer } from '@democrance/utils';

const str = 'A';
const buffer = stringToArrayBuffer(str);
console.log(buffer.byteLength); // Outputs: 2
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | The string to be converted. |

#### Returns

`ArrayBuffer`

The ArrayBuffer representation of the string.

#### Defined in

[lib/arrayBuffer.ts:55](https://github.com/daniil4udo/utils/blob/e4121f0/lib/arrayBuffer.ts#L55)

___

### toArray

▸ **toArray**<`T`\>(`arr`, `options?`): `T`[]

Converts a value into an array. If the value is already an array, it returns
the array as-is, a shallow copy, or a deep clone depending on the options.

**`Remarks`**

This function is a part of the [@democrance/utils](https://github.com/daniil4udo/utils) library.

**`Function`**

toArray

**`Example`**

```ts
import { toArray } from '@democrance/utils';

toArray(5); //  Outputs: [5]
toArray([1, 2, 3], { shallow: true }); //  Outputs: [1, 2, 3]
toArray([1, [2, 3]], { deep: true }); //  Outputs: [1, [2, 3]]
```

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type of the elements. |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arr` | `T` \| `T`[] | The value to be converted into an array. |
| `options?` | `Options` | - |

#### Returns

`T`[]

The value converted into an array.

#### Defined in

[lib/toArray.ts:40](https://github.com/daniil4udo/utils/blob/e4121f0/lib/toArray.ts#L40)

___

### toLower

▸ **toLower**(`str?`): `string`

Converts a string to lowercase.

This method takes a string as an input and returns a new string
with all characters converted to lowercase.

**`Remarks`**

This function is part of the [@democrance/utils](https://github.com/daniil4udo/utils) library.

**`Throws`**

If the input is not of type 'string'.

**`Example`**

```ts
console.log(toLower('HELLO')); // Outputs: 'hello'
console.log(toLower('world')); // Outputs: 'world'
console.log(toLower('')); // Outputs: ''
```

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `str` | `string` | `''` | The input string to convert. Default is an empty string. |

#### Returns

`string`

The lowercase string.

#### Defined in

[lib/changeCase.ts:78](https://github.com/daniil4udo/utils/blob/e4121f0/lib/changeCase.ts#L78)

___

### toType

▸ **toType**(`input`): [`AllTypes`](modules.md#alltypes)

Takes any JavaScript value as input and returns its type as a string.

**`Remarks`**

This function is a part of the [@democrance/utils](https://github.com/daniil4udo/utils) library.

**`Function`**

toType

**`Example`**

```ts
import { toType } from '@democrance/utils';

toType(123); // Outputs: 'number'
toType(new Date()); // Outputs: 'date'
toType([]); // Outputs: 'array'
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `any` | The input value for which to get the type. |

#### Returns

[`AllTypes`](modules.md#alltypes)

- The type of the input value, represented as a string.

#### Defined in

[lib/toType.ts:78](https://github.com/daniil4udo/utils/blob/e4121f0/lib/toType.ts#L78)

___

### toUpper

▸ **toUpper**(`str?`): `string`

Converts a string to uppercase.

This method takes a string as an input and returns a new string
with all characters converted to uppercase.

**`Remarks`**

This function is part of the [@democrance/utils](https://github.com/daniil4udo/utils) library.

**`Throws`**

If the input is not of type 'string'.

**`Example`**

```ts
console.log(toUpper('hello')); // Outputs: 'HELLO'
console.log(toUpper('WORLD')); // Outputs: 'WORLD'
console.log(toUpper('')); // Outputs: ''
```

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `str` | `string` | `''` | The input string to convert. Default is an empty string. |

#### Returns

`string`

The uppercase string.

#### Defined in

[lib/changeCase.ts:51](https://github.com/daniil4udo/utils/blob/e4121f0/lib/changeCase.ts#L51)

___

### toggleKeyboardFocus

▸ **toggleKeyboardFocus**(`scope?`, `tabIndex?`): `void`

Toggles the keyboard focus state for all focusable elements in the specified scope.

This function iterates over all the elements in the given scope that have a tag specified in POSSIBLE_FOCUSABLE_TAGS.
If an element is not disabled, it assigns the given tabIndex value to the element's tabIndex attribute. The tabIndex
attribute defines the tab order of an element (when the "tab" button is used for navigating).

Note: This function requires 'requestAnimationFrame' to apply the tabIndex, which might not be available in all environments.

**`Remarks`**

This function is a part of the [@democrance/utils](https://github.com/daniil4udo/utils) library.

**`Function`**

toggleKeyboardFocus

**`Example`**

```ts
import { toggleKeyboardFocus } from '@democrance/utils';

// Toggle the keyboard focusability of all focusable elements within the document body.
toggleKeyboardFocus();

// Toggle the keyboard focusability of all focusable elements within a specific element.
const container = document.getElementById('container');
toggleKeyboardFocus(container);

// Toggle the keyboard focusability of all focusable elements within a specific element and set tabIndex to 0.
toggleKeyboardFocus(container, 0);
```

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `scope?` | `HTMLElement` | `document.body` | The scope within which to toggle the keyboard focus state. Default is the document body. It is expected to be an HTML element. |
| `tabIndex?` | `number` | `-1` | The tabIndex value to assign to each focusable element. Default is -1 which makes the element focusable, but not reachable via sequential keyboard navigation. But it can be focused by calling its focus method programmatically. |

#### Returns

`void`

This function does not return a value.

#### Defined in

[lib/toggleKeyboardFocus.ts:57](https://github.com/daniil4udo/utils/blob/e4121f0/lib/toggleKeyboardFocus.ts#L57)

___

### trimFileExtension

▸ **trimFileExtension**(`path?`): `string`

Removes the file extension from a given path.

This function is useful when you want to retrieve the file name without the extension.
It works by removing all characters after and including the last '.' in the path string.

**`Remarks`**

This function is part of the [@democrance/utils](https://github.com/daniil4udo/utils) library.

**`Throws`**

If the input is not of type 'string'.

**`Example`**

```ts
import { trimFileExtension } from '@democrance/utils';

console.log(trimFileExtension('/path/to/file.txt')); // Outputs: '/path/to/file'
```

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `path` | `string` | `''` | The file path from which to remove the extension. |

#### Returns

`string`

The file path without the extension. If the input path does not contain an
     extension, the same path is returned.

#### Defined in

[lib/getNameFromPath.ts:23](https://github.com/daniil4udo/utils/blob/e4121f0/lib/getNameFromPath.ts#L23)

___

### urlJoin

▸ **urlJoin**(`p1`, `options?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `p1` | `PathArg` |
| `options?` | `Options` |

#### Returns

`string`

#### Defined in

node_modules/.pnpm/@types+proper-url-join@2.1.1/node_modules/@types/proper-url-join/index.d.ts:44

▸ **urlJoin**(`p1`, `p2`, `options?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `p1` | `PathArg` |
| `p2` | `PathArg` |
| `options?` | `Options` |

#### Returns

`string`

#### Defined in

node_modules/.pnpm/@types+proper-url-join@2.1.1/node_modules/@types/proper-url-join/index.d.ts:45

▸ **urlJoin**(`p1`, `p2`, `p3`, `options?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `p1` | `PathArg` |
| `p2` | `PathArg` |
| `p3` | `PathArg` |
| `options?` | `Options` |

#### Returns

`string`

#### Defined in

node_modules/.pnpm/@types+proper-url-join@2.1.1/node_modules/@types/proper-url-join/index.d.ts:46

▸ **urlJoin**(`p1`, `p2`, `p3`, `p4`, `options?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `p1` | `PathArg` |
| `p2` | `PathArg` |
| `p3` | `PathArg` |
| `p4` | `PathArg` |
| `options?` | `Options` |

#### Returns

`string`

#### Defined in

node_modules/.pnpm/@types+proper-url-join@2.1.1/node_modules/@types/proper-url-join/index.d.ts:47

▸ **urlJoin**(`p1`, `p2`, `p3`, `p4`, `p5`, `options?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `p1` | `PathArg` |
| `p2` | `PathArg` |
| `p3` | `PathArg` |
| `p4` | `PathArg` |
| `p5` | `PathArg` |
| `options?` | `Options` |

#### Returns

`string`

#### Defined in

node_modules/.pnpm/@types+proper-url-join@2.1.1/node_modules/@types/proper-url-join/index.d.ts:48

▸ **urlJoin**(`p1`, `p2`, `p3`, `p4`, `p5`, `p6`, `options?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `p1` | `PathArg` |
| `p2` | `PathArg` |
| `p3` | `PathArg` |
| `p4` | `PathArg` |
| `p5` | `PathArg` |
| `p6` | `PathArg` |
| `options?` | `Options` |

#### Returns

`string`

#### Defined in

node_modules/.pnpm/@types+proper-url-join@2.1.1/node_modules/@types/proper-url-join/index.d.ts:49

▸ **urlJoin**(`p1`, `p2`, `p3`, `p4`, `p5`, `p6`, `p7`, `options?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `p1` | `PathArg` |
| `p2` | `PathArg` |
| `p3` | `PathArg` |
| `p4` | `PathArg` |
| `p5` | `PathArg` |
| `p6` | `PathArg` |
| `p7` | `PathArg` |
| `options?` | `Options` |

#### Returns

`string`

#### Defined in

node_modules/.pnpm/@types+proper-url-join@2.1.1/node_modules/@types/proper-url-join/index.d.ts:50

▸ **urlJoin**(`p1`, `p2`, `p3`, `p4`, `p5`, `p6`, `p7`, `p8`, `options?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `p1` | `PathArg` |
| `p2` | `PathArg` |
| `p3` | `PathArg` |
| `p4` | `PathArg` |
| `p5` | `PathArg` |
| `p6` | `PathArg` |
| `p7` | `PathArg` |
| `p8` | `PathArg` |
| `options?` | `Options` |

#### Returns

`string`

#### Defined in

node_modules/.pnpm/@types+proper-url-join@2.1.1/node_modules/@types/proper-url-join/index.d.ts:51

▸ **urlJoin**(`p1`, `p2`, `p3`, `p4`, `p5`, `p6`, `p7`, `p8`, `p9`, `options?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `p1` | `PathArg` |
| `p2` | `PathArg` |
| `p3` | `PathArg` |
| `p4` | `PathArg` |
| `p5` | `PathArg` |
| `p6` | `PathArg` |
| `p7` | `PathArg` |
| `p8` | `PathArg` |
| `p9` | `PathArg` |
| `options?` | `Options` |

#### Returns

`string`

#### Defined in

node_modules/.pnpm/@types+proper-url-join@2.1.1/node_modules/@types/proper-url-join/index.d.ts:52

▸ **urlJoin**(`p1`, `p2`, `p3`, `p4`, `p5`, `p6`, `p7`, `p8`, `p9`, `p10`, `options?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `p1` | `PathArg` |
| `p2` | `PathArg` |
| `p3` | `PathArg` |
| `p4` | `PathArg` |
| `p5` | `PathArg` |
| `p6` | `PathArg` |
| `p7` | `PathArg` |
| `p8` | `PathArg` |
| `p9` | `PathArg` |
| `p10` | `PathArg` |
| `options?` | `Options` |

#### Returns

`string`

#### Defined in

node_modules/.pnpm/@types+proper-url-join@2.1.1/node_modules/@types/proper-url-join/index.d.ts:53

▸ **urlJoin**(`p1`, `p2`, `p3`, `p4`, `p5`, `p6`, `p7`, `p8`, `p9`, `p10`, `p11`, `...args`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `p1` | `PathArg` |
| `p2` | `PathArg` |
| `p3` | `PathArg` |
| `p4` | `PathArg` |
| `p5` | `PathArg` |
| `p6` | `PathArg` |
| `p7` | `PathArg` |
| `p8` | `PathArg` |
| `p9` | `PathArg` |
| `p10` | `PathArg` |
| `p11` | `PathArg` |
| `...args` | (`PathArg` \| `Options`)[] |

#### Returns

`string`

#### Defined in

node_modules/.pnpm/@types+proper-url-join@2.1.1/node_modules/@types/proper-url-join/index.d.ts:54

___

### urlTemplate

▸ **urlTemplate**(`url`, `context`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `context` | `Record`<`string`, `PrimitiveValue` \| `PrimitiveValue`[] \| `Record`<`string`, `PrimitiveValue`\>\> |

#### Returns

`string`

#### Defined in

[lib/urlTemplate.ts:27](https://github.com/daniil4udo/utils/blob/e4121f0/lib/urlTemplate.ts#L27)

___

### zipcelx

▸ **zipcelx**(`config`): `Promise`<`Blob`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `ZipCelXConfig` |

#### Returns

`Promise`<`Blob`\>

#### Defined in

node_modules/.pnpm/@types+zipcelx@1.5.0/node_modules/@types/zipcelx/index.d.ts:55
