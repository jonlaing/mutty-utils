[mutty-utils](../README.md) / [Exports](../modules.md) / [utils](utils.md) / lists

# Namespace: lists

[utils](utils.md).lists

## Table of contents

### Functions

- [collectMultiDocs](utils.lists.md#collectmultidocs)
- [fillList](utils.lists.md#filllist)
- [intersperseBulletins](utils.lists.md#interspersebulletins)

## Functions

### collectMultiDocs

▸ **collectMultiDocs**<`T`\>(`ds`): [`MultiDoc`](../modules.md#multidoc)<`T`\>[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`LikedDogContent`](../interfaces/LikedDogContent.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ds` | `T`[] |

#### Returns

[`MultiDoc`](../modules.md#multidoc)<`T`\>[]

#### Defined in

[src/utils/listTransforms.ts:19](https://github.com/jonlaing/mutty-utils/blob/c9372b5/src/utils/listTransforms.ts#L19)

___

### fillList

▸ **fillList**(`length`, `arr`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `length` | `number` |
| `arr` | `any`[] |

#### Returns

`any`

#### Defined in

[src/utils/listTransforms.ts:10](https://github.com/jonlaing/mutty-utils/blob/c9372b5/src/utils/listTransforms.ts#L10)

___

### intersperseBulletins

▸ **intersperseBulletins**(`posts`, `bulletins`): ([`TypedContainer`](../modules.md#typedcontainer)<{ `post`: [`MultiPost`](../modules.md#multipost)  }, ``"type"``\> \| [`TypedContainer`](../modules.md#typedcontainer)<{ `bulletin`: [`MultiBulletin`](../modules.md#multibulletin)  }, ``"type"``\>)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `posts` | [`MultiPost`](../modules.md#multipost)[] |
| `bulletins` | [`MultiBulletin`](../modules.md#multibulletin)[] |

#### Returns

([`TypedContainer`](../modules.md#typedcontainer)<{ `post`: [`MultiPost`](../modules.md#multipost)  }, ``"type"``\> \| [`TypedContainer`](../modules.md#typedcontainer)<{ `bulletin`: [`MultiBulletin`](../modules.md#multibulletin)  }, ``"type"``\>)[]

#### Defined in

[src/utils/listTransforms.ts:48](https://github.com/jonlaing/mutty-utils/blob/c9372b5/src/utils/listTransforms.ts#L48)
