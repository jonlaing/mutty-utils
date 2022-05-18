[mutty-utils](../README.md) / [Exports](../modules.md) / Flag

# Interface: Flag

## Hierarchy

- [`ProcessedDoc`](ProcessedDoc.md)

- [`HasTimestamp`](HasTimestamp.md)

  ↳ **`Flag`**

## Table of contents

### Properties

- [contentId](Flag.md#contentid)
- [contentType](Flag.md#contenttype)
- [created](Flag.md#created)
- [id](Flag.md#id)
- [type](Flag.md#type)
- [userId](Flag.md#userid)

## Properties

### contentId

• **contentId**: `string`

#### Defined in

[src/types/Flag.ts:14](https://github.com/jonlaing/mutty-utils/blob/c9372b5/src/types/Flag.ts#L14)

___

### contentType

• **contentType**: [`FlaggableType`](../modules.md#flaggabletype)

#### Defined in

[src/types/Flag.ts:15](https://github.com/jonlaing/mutty-utils/blob/c9372b5/src/types/Flag.ts#L15)

___

### created

• **created**: `number`

Seconds since the epoch that it was created

#### Inherited from

[HasTimestamp](HasTimestamp.md).[created](HasTimestamp.md#created)

#### Defined in

[src/types/FirestoreBaseTypes.ts:15](https://github.com/jonlaing/mutty-utils/blob/c9372b5/src/types/FirestoreBaseTypes.ts#L15)

___

### id

• **id**: `string`

#### Inherited from

[ProcessedDoc](ProcessedDoc.md).[id](ProcessedDoc.md#id)

#### Defined in

[src/types/FirestoreBaseTypes.ts:9](https://github.com/jonlaing/mutty-utils/blob/c9372b5/src/types/FirestoreBaseTypes.ts#L9)

___

### type

• **type**: [`FlagType`](../modules.md#flagtype)

#### Defined in

[src/types/Flag.ts:16](https://github.com/jonlaing/mutty-utils/blob/c9372b5/src/types/Flag.ts#L16)

___

### userId

• **userId**: `string`

#### Defined in

[src/types/Flag.ts:13](https://github.com/jonlaing/mutty-utils/blob/c9372b5/src/types/Flag.ts#L13)
