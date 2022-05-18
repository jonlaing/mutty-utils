[mutty-utils](../README.md) / [Exports](../modules.md) / ProcessedDoc

# Interface: ProcessedDoc

Base type for all Firestore records

## Hierarchy

- [`HasId`](HasId.md)

- [`HasTimestamp`](HasTimestamp.md)

  ↳ **`ProcessedDoc`**

  ↳↳ [`Bulletin`](Bulletin.md)

  ↳↳ [`Comment`](Comment.md)

  ↳↳ [`Dog`](Dog.md)

  ↳↳ [`Flag`](Flag.md)

  ↳↳ [`Friendship`](Friendship.md)

  ↳↳ [`Human`](Human.md)

  ↳↳ [`Like`](Like.md)

  ↳↳ [`Notification`](Notification.md)

  ↳↳ [`Post`](Post.md)

  ↳↳ [`Relationship`](Relationship.md)

## Table of contents

### Properties

- [created](ProcessedDoc.md#created)
- [id](ProcessedDoc.md#id)

## Properties

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

[HasId](HasId.md).[id](HasId.md#id)

#### Defined in

[src/types/FirestoreBaseTypes.ts:9](https://github.com/jonlaing/mutty-utils/blob/c9372b5/src/types/FirestoreBaseTypes.ts#L9)
