[mutty-utils](../README.md) / [Exports](../modules.md) / [utils](utils.md) / likes

# Namespace: likes

[utils](utils.md).likes

## Table of contents

### Functions

- [decLikes](utils.likes.md#declikes)
- [getLikesByUser](utils.likes.md#getlikesbyuser)
- [incLikes](utils.likes.md#inclikes)
- [updateLikes](utils.likes.md#updatelikes)

## Functions

### decLikes

▸ **decLikes**<`L`, `G`, `R`\>(...`args`): `G`[``"length"``] extends ``0`` ? `R` : `G`[``"length"``] extends ``1`` ? `Curry`<(...`args`: `G`) => `R`\> & (...`args`: `G`) => `R` : `Curry`<(...`args`: `G`) => `R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `L` | extends readonly `any`[] |
| `G` | extends readonly `any`[] = `GapsOf`<`L`, [docs: Likeable[], id: string]\> |
| `R` | extends `unknown` = ([`Likeable`](../interfaces/Likeable.md) \| { `created`: `number` ; `id`: `string` ; `liked`: `boolean` ; `likes`: `number`  })[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `Cast`<`L`, [docs: Object \| Likeable[], id: string \| Object]\> |

#### Returns

`G`[``"length"``] extends ``0`` ? `R` : `G`[``"length"``] extends ``1`` ? `Curry`<(...`args`: `G`) => `R`\> & (...`args`: `G`) => `R` : `Curry`<(...`args`: `G`) => `R`\>

#### Defined in

[src/utils/likes.ts:15](https://github.com/jonlaing/mutty-utils/blob/3ab5f76/src/utils/likes.ts#L15)

___

### getLikesByUser

▸ **getLikesByUser**(`fs`, `userId`, `docIds`): `Promise`<[`Like`](../interfaces/Like.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fs` | [`Firestore`](../modules.md#firestore) |
| `userId` | `string` |
| `docIds` | `string`[] |

#### Returns

`Promise`<[`Like`](../interfaces/Like.md)[]\>

#### Defined in

[src/utils/likes.ts:17](https://github.com/jonlaing/mutty-utils/blob/3ab5f76/src/utils/likes.ts#L17)

___

### incLikes

▸ **incLikes**<`L`, `G`, `R`\>(...`args`): `G`[``"length"``] extends ``0`` ? `R` : `G`[``"length"``] extends ``1`` ? `Curry`<(...`args`: `G`) => `R`\> & (...`args`: `G`) => `R` : `Curry`<(...`args`: `G`) => `R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `L` | extends readonly `any`[] |
| `G` | extends readonly `any`[] = `GapsOf`<`L`, [docs: Likeable[], id: string]\> |
| `R` | extends `unknown` = ([`Likeable`](../interfaces/Likeable.md) \| { `created`: `number` ; `id`: `string` ; `liked`: `boolean` ; `likes`: `number`  })[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `Cast`<`L`, [docs: Object \| Likeable[], id: string \| Object]\> |

#### Returns

`G`[``"length"``] extends ``0`` ? `R` : `G`[``"length"``] extends ``1`` ? `Curry`<(...`args`: `G`) => `R`\> & (...`args`: `G`) => `R` : `Curry`<(...`args`: `G`) => `R`\>

#### Defined in

[src/utils/likes.ts:14](https://github.com/jonlaing/mutty-utils/blob/3ab5f76/src/utils/likes.ts#L14)

___

### updateLikes

▸ **updateLikes**<`L`, `G`, `R`\>(...`args`): `G`[``"length"``] extends ``0`` ? `R` : `G`[``"length"``] extends ``1`` ? `Curry`<(...`args`: `G`) => `R`\> & (...`args`: `G`) => `R` : `Curry`<(...`args`: `G`) => `R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `L` | extends readonly `any`[] |
| `G` | extends readonly `any`[] = `GapsOf`<`L`, [val: number, liked: boolean, docs: Likeable[], id: string]\> |
| `R` | extends `unknown` = ([`Likeable`](../interfaces/Likeable.md) \| { `created`: `number` ; `id`: `string` ; `liked`: `boolean` ; `likes`: `number`  })[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `Cast`<`L`, [val: number \| Object, liked: boolean \| Object, docs: Object \| Likeable[], id: string \| Object]\> |

#### Returns

`G`[``"length"``] extends ``0`` ? `R` : `G`[``"length"``] extends ``1`` ? `Curry`<(...`args`: `G`) => `R`\> & (...`args`: `G`) => `R` : `Curry`<(...`args`: `G`) => `R`\>

#### Defined in

[src/utils/likes.ts:7](https://github.com/jonlaing/mutty-utils/blob/3ab5f76/src/utils/likes.ts#L7)
