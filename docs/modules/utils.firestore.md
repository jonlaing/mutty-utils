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

[src/utils/firestore.ts:30](https://github.com/jonlaing/mutty-utils/blob/d7d0eb8/src/utils/firestore.ts#L30)

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

[src/utils/firestore.ts:63](https://github.com/jonlaing/mutty-utils/blob/d7d0eb8/src/utils/firestore.ts#L63)

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

[src/utils/firestore.ts:44](https://github.com/jonlaing/mutty-utils/blob/d7d0eb8/src/utils/firestore.ts#L44)

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

[src/utils/firestore.ts:6](https://github.com/jonlaing/mutty-utils/blob/d7d0eb8/src/utils/firestore.ts#L6)

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

[src/utils/firestore.ts:20](https://github.com/jonlaing/mutty-utils/blob/d7d0eb8/src/utils/firestore.ts#L20)

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

[src/utils/firestore.ts:15](https://github.com/jonlaing/mutty-utils/blob/d7d0eb8/src/utils/firestore.ts#L15)

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

[src/utils/firestore.ts:23](https://github.com/jonlaing/mutty-utils/blob/d7d0eb8/src/utils/firestore.ts#L23)
