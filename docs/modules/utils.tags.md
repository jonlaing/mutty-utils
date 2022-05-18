[mutty-utils](../README.md) / [Exports](../modules.md) / [utils](utils.md) / tags

# Namespace: tags

[utils](utils.md).tags

## Table of contents

### Functions

- [extractTaggedDogs](utils.tags.md#extracttaggeddogs)
- [lastTag](utils.tags.md#lasttag)
- [matchTag](utils.tags.md#matchtag)
- [splitTags](utils.tags.md#splittags)
- [tagifyDog](utils.tags.md#tagifydog)
- [tagifyDogs](utils.tags.md#tagifydogs)

## Functions

### extractTaggedDogs

▸ **extractTaggedDogs**(`s`, `allDogs`): [`Dog`](../interfaces/Dog.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` |
| `allDogs` | [`Dog`](../interfaces/Dog.md)[] |

#### Returns

[`Dog`](../interfaces/Dog.md)[]

#### Defined in

[src/utils/tag.ts:18](https://github.com/jonlaing/mutty-utils/blob/c9372b5/src/utils/tag.ts#L18)

___

### lastTag

▸ **lastTag**(...`args`): `undefined` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [`string`] |

#### Returns

`undefined` \| `string`

#### Defined in

[src/utils/tag.ts:5](https://github.com/jonlaing/mutty-utils/blob/c9372b5/src/utils/tag.ts#L5)

___

### matchTag

▸ **matchTag**(`str`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`string`[]

#### Defined in

[src/utils/tag.ts:4](https://github.com/jonlaing/mutty-utils/blob/c9372b5/src/utils/tag.ts#L4)

___

### splitTags

▸ **splitTags**(`s`): `TagChunk`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` |

#### Returns

`TagChunk`[]

#### Defined in

[src/utils/tag.ts:25](https://github.com/jonlaing/mutty-utils/blob/c9372b5/src/utils/tag.ts#L25)

___

### tagifyDog

▸ **tagifyDog**(`d`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `d` | [`Dog`](../interfaces/Dog.md) |

#### Returns

`string`

#### Defined in

[src/utils/tag.ts:9](https://github.com/jonlaing/mutty-utils/blob/c9372b5/src/utils/tag.ts#L9)

___

### tagifyDogs

▸ **tagifyDogs**(`list`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `list` | readonly [`Dog`](../interfaces/Dog.md)[] |

#### Returns

`string`[]

#### Defined in

[src/utils/tag.ts:16](https://github.com/jonlaing/mutty-utils/blob/c9372b5/src/utils/tag.ts#L16)
