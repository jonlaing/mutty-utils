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

[src/utils/human.ts:13](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/utils/human.ts#L13)

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

[src/utils/human.ts:25](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/utils/human.ts#L25)

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

[src/utils/human.ts:6](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/utils/human.ts#L6)
