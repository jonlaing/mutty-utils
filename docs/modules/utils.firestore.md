[mutty-utils](../README.md) / [Exports](../modules.md) / [utils](utils.md) / firestore

# Namespace: firestore

[utils](utils.md).firestore

## Table of contents

### Functions

- [batchField](utils.firestore.md#batchfield)
- [batchGetByField](utils.firestore.md#batchgetbyfield)
- [batchGetByFieldWithConstraints](utils.firestore.md#batchgetbyfieldwithconstraints)
- [dataToDoc](utils.firestore.md#datatodoc)
- [reduceDocs](utils.firestore.md#reducedocs)
- [reduceQuery](utils.firestore.md#reducequery)
- [reduceQueryToDocs](utils.firestore.md#reducequerytodocs)

## Functions

### batchField

▸ **batchField**<`U`\>(`constraints`, `field`, `vals`): [`QueryConstraintSyncFn`](../modules.md#queryconstraintsyncfn)[][]

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `constraints` | [`QueryConstraintSyncFn`](../modules.md#queryconstraintsyncfn)<[`Query`](../modules.md#query)\>[] |
| `field` | `string` \| [`FieldPath`](../modules.md#fieldpath) |
| `vals` | `U`[] |

#### Returns

[`QueryConstraintSyncFn`](../modules.md#queryconstraintsyncfn)[][]

#### Defined in

[src/utils/firestore.ts:31](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/utils/firestore.ts#L31)

___

### batchGetByField

▸ **batchGetByField**<`T`, `U`\>(`query`, `field`, `vals`): `Promise`<`T`[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ProcessedDoc`](../interfaces/ProcessedDoc.md) |
| `U` | `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | [`Query`](../modules.md#query) |
| `field` | `string` \| [`FieldPath`](../modules.md#fieldpath) |
| `vals` | `U`[] |

#### Returns

`Promise`<`T`[]\>

#### Defined in

[src/utils/firestore.ts:64](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/utils/firestore.ts#L64)

___

### batchGetByFieldWithConstraints

▸ **batchGetByFieldWithConstraints**<`T`, `U`\>(`query`, `field`, `constraints`, `vals`): `Promise`<`T`[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ProcessedDoc`](../interfaces/ProcessedDoc.md) |
| `U` | `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | [`Query`](../modules.md#query) |
| `field` | `string` \| [`FieldPath`](../modules.md#fieldpath) |
| `constraints` | [`QueryConstraintSyncFn`](../modules.md#queryconstraintsyncfn)<[`Query`](../modules.md#query)\>[] |
| `vals` | `U`[] |

#### Returns

`Promise`<`T`[]\>

#### Defined in

[src/utils/firestore.ts:45](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/utils/firestore.ts#L45)

___

### dataToDoc

▸ **dataToDoc**<`T`\>(`res`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ProcessedDoc`](../interfaces/ProcessedDoc.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `res` | [`DocumentData`](../modules.md#documentdata) |

#### Returns

`T`

#### Defined in

[src/utils/firestore.ts:7](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/utils/firestore.ts#L7)

___

### reduceDocs

▸ **reduceDocs**<`T`\>(`q`): `Promise`<`T`[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ProcessedDoc`](../interfaces/ProcessedDoc.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `q` | [`Query`](../modules.md#query) |

#### Returns

`Promise`<`T`[]\>

#### Defined in

[src/utils/firestore.ts:21](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/utils/firestore.ts#L21)

___

### reduceQuery

▸ **reduceQuery**(`constraints`, `query`): [`Query`](../modules.md#query)

#### Parameters

| Name | Type |
| :------ | :------ |
| `constraints` | [`QueryConstraintSyncFn`](../modules.md#queryconstraintsyncfn)<[`Query`](../modules.md#query)\>[] |
| `query` | [`Query`](../modules.md#query) |

#### Returns

[`Query`](../modules.md#query)

#### Defined in

[src/utils/firestore.ts:16](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/utils/firestore.ts#L16)

___

### reduceQueryToDocs

▸ **reduceQueryToDocs**<`T`\>(`cs`, `q`): `Promise`<`T`[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ProcessedDoc`](../interfaces/ProcessedDoc.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cs` | [`QueryConstraintSyncFn`](../modules.md#queryconstraintsyncfn)<[`Query`](../modules.md#query)\>[] |
| `q` | [`Query`](../modules.md#query) |

#### Returns

`Promise`<`T`[]\>

#### Defined in

[src/utils/firestore.ts:24](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/utils/firestore.ts#L24)
