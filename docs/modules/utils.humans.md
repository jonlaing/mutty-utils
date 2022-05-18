[mutty-utils](../README.md) / [Exports](../modules.md) / [utils](utils.md) / humans

# Namespace: humans

[utils](utils.md).humans

## Table of contents

### Functions

- [getByUser](utils.humans.md#getbyuser)
- [updatePushToken](utils.humans.md#updatepushtoken)
- [validateUsername](utils.humans.md#validateusername)

## Functions

### getByUser

▸ **getByUser**(`fs`, `userId`): `Promise`<[`Human`](../interfaces/Human.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fs` | [`Firestore`](../modules.md#firestore) |
| `userId` | `string` |

#### Returns

`Promise`<[`Human`](../interfaces/Human.md)\>

#### Defined in

[src/utils/human.ts:12](https://github.com/jonlaing/mutty-utils/blob/c9372b5/src/utils/human.ts#L12)

___

### updatePushToken

▸ **updatePushToken**(`fs`, `userId`, `pushToken`): `Promise`<`void` \| `WriteResult`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fs` | [`Firestore`](../modules.md#firestore) |
| `userId` | `string` |
| `pushToken` | `string` |

#### Returns

`Promise`<`void` \| `WriteResult`\>

#### Defined in

[src/utils/human.ts:24](https://github.com/jonlaing/mutty-utils/blob/c9372b5/src/utils/human.ts#L24)

___

### validateUsername

▸ **validateUsername**(...`args`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [str: string] |

#### Returns

`string`

#### Defined in

[src/utils/human.ts:5](https://github.com/jonlaing/mutty-utils/blob/c9372b5/src/utils/human.ts#L5)
