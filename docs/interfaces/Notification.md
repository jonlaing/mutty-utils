[mutty-utils](../README.md) / [Exports](../modules.md) / Notification

# Interface: Notification

## Hierarchy

- [`ProcessedDoc`](ProcessedDoc.md)

  ↳ **`Notification`**

## Table of contents

### Properties

- [actionType](Notification.md#actiontype)
- [author](Notification.md#author)
- [contentId](Notification.md#contentid)
- [contentType](Notification.md#contenttype)
- [created](Notification.md#created)
- [from](Notification.md#from)
- [id](Notification.md#id)
- [read](Notification.md#read)
- [summary](Notification.md#summary)
- [to](Notification.md#to)

## Properties

### actionType

• **actionType**: [`ActionType`](../modules.md#actiontype)

#### Defined in

[src/types/Notification.ts:20](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/types/Notification.ts#L20)

___

### author

• **author**: `string`

#### Defined in

[src/types/Notification.ts:15](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/types/Notification.ts#L15)

___

### contentId

• **contentId**: `string`

#### Defined in

[src/types/Notification.ts:18](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/types/Notification.ts#L18)

___

### contentType

• **contentType**: [`ContentType`](../modules.md#contenttype)

#### Defined in

[src/types/Notification.ts:19](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/types/Notification.ts#L19)

___

### created

• **created**: `number`

Seconds since the epoch that it was created

#### Inherited from

[ProcessedDoc](ProcessedDoc.md).[created](ProcessedDoc.md#created)

#### Defined in

[src/types/FirestoreBaseTypes.ts:15](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/types/FirestoreBaseTypes.ts#L15)

___

### from

• **from**: `string`[]

#### Defined in

[src/types/Notification.ts:16](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/types/Notification.ts#L16)

___

### id

• **id**: `string`

#### Inherited from

[ProcessedDoc](ProcessedDoc.md).[id](ProcessedDoc.md#id)

#### Defined in

[src/types/FirestoreBaseTypes.ts:9](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/types/FirestoreBaseTypes.ts#L9)

___

### read

• **read**: `boolean`

#### Defined in

[src/types/Notification.ts:22](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/types/Notification.ts#L22)

___

### summary

• `Optional` **summary**: `string`

#### Defined in

[src/types/Notification.ts:21](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/types/Notification.ts#L21)

___

### to

• **to**: `string`

#### Defined in

[src/types/Notification.ts:17](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/types/Notification.ts#L17)
