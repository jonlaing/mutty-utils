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

[src/utils/tag.ts:19](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/utils/tag.ts#L19)

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

[src/utils/tag.ts:6](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/utils/tag.ts#L6)

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

[src/utils/tag.ts:5](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/utils/tag.ts#L5)

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

[src/utils/tag.ts:26](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/utils/tag.ts#L26)

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

[src/utils/tag.ts:10](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/utils/tag.ts#L10)

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

[src/utils/tag.ts:17](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/utils/tag.ts#L17)
