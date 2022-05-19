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

[src/types/Notification.ts:14](https://github.com/jonlaing/mutty-utils/blob/3ab5f76/src/types/Notification.ts#L14)

___

### author

• **author**: `string`

#### Defined in

[src/types/Notification.ts:9](https://github.com/jonlaing/mutty-utils/blob/3ab5f76/src/types/Notification.ts#L9)

___

### contentId

• **contentId**: `string`

#### Defined in

[src/types/Notification.ts:12](https://github.com/jonlaing/mutty-utils/blob/3ab5f76/src/types/Notification.ts#L12)

___

### contentType

• **contentType**: [`ContentType`](../modules.md#contenttype)

#### Defined in

[src/types/Notification.ts:13](https://github.com/jonlaing/mutty-utils/blob/3ab5f76/src/types/Notification.ts#L13)

___

### created

• **created**: `number`

Seconds since the epoch that it was created

#### Inherited from

[ProcessedDoc](ProcessedDoc.md).[created](ProcessedDoc.md#created)

#### Defined in

[src/types/FirestoreBaseTypes.ts:15](https://github.com/jonlaing/mutty-utils/blob/3ab5f76/src/types/FirestoreBaseTypes.ts#L15)

___

### from

• **from**: `string`[]

#### Defined in

[src/types/Notification.ts:10](https://github.com/jonlaing/mutty-utils/blob/3ab5f76/src/types/Notification.ts#L10)

___

### id

• **id**: `string`

#### Inherited from

[ProcessedDoc](ProcessedDoc.md).[id](ProcessedDoc.md#id)

#### Defined in

[src/types/FirestoreBaseTypes.ts:9](https://github.com/jonlaing/mutty-utils/blob/3ab5f76/src/types/FirestoreBaseTypes.ts#L9)

___

### read

• **read**: `boolean`

#### Defined in

[src/types/Notification.ts:16](https://github.com/jonlaing/mutty-utils/blob/3ab5f76/src/types/Notification.ts#L16)

___

### summary

• `Optional` **summary**: `string`

#### Defined in

[src/types/Notification.ts:15](https://github.com/jonlaing/mutty-utils/blob/3ab5f76/src/types/Notification.ts#L15)

___

### to

• **to**: `string`

#### Defined in

[src/types/Notification.ts:11](https://github.com/jonlaing/mutty-utils/blob/3ab5f76/src/types/Notification.ts#L11)
