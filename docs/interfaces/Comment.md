[mutty-utils](../README.md) / [Exports](../modules.md) / Comment

# Interface: Comment

## Hierarchy

- [`ProcessedDoc`](ProcessedDoc.md)

- [`EmbeddableFields`](../modules.md#embeddablefields)<[`CommentEmbedMap`](../modules.md#commentembedmap)\>

  ↳ **`Comment`**

## Table of contents

### Properties

- [content](Comment.md#content)
- [created](Comment.md#created)
- [dogs](Comment.md#dogs)
- [id](Comment.md#id)
- [likes](Comment.md#likes)
- [summary](Comment.md#summary)
- [tags](Comment.md#tags)
- [user](Comment.md#user)

## Properties

### content

• **content**: `string`

The Content Id of the associated [Post](Post.md) or [Bulletin](Bulletin.md)

#### Defined in

[src/types/Comment.ts:24](https://github.com/jonlaing/mutty-utils/blob/3aaf626/src/types/Comment.ts#L24)

___

### created

• **created**: `number`

Seconds since the epoch that it was created

#### Inherited from

[ProcessedDoc](ProcessedDoc.md).[created](ProcessedDoc.md#created)

#### Defined in

[src/types/FirestoreBaseTypes.ts:15](https://github.com/jonlaing/mutty-utils/blob/3aaf626/src/types/FirestoreBaseTypes.ts#L15)

___

### dogs

• **dogs**: `string`[]

#### Inherited from

EmbeddableFields.dogs

#### Defined in

[src/types/Comment.ts:15](https://github.com/jonlaing/mutty-utils/blob/3aaf626/src/types/Comment.ts#L15)

___

### id

• **id**: `string`

#### Inherited from

[ProcessedDoc](ProcessedDoc.md).[id](ProcessedDoc.md#id)

#### Defined in

[src/types/FirestoreBaseTypes.ts:9](https://github.com/jonlaing/mutty-utils/blob/3aaf626/src/types/FirestoreBaseTypes.ts#L9)

___

### likes

• **likes**: `number`

#### Defined in

[src/types/Comment.ts:27](https://github.com/jonlaing/mutty-utils/blob/3aaf626/src/types/Comment.ts#L27)

___

### summary

• **summary**: `string`

Text content of the Comment

#### Defined in

[src/types/Comment.ts:26](https://github.com/jonlaing/mutty-utils/blob/3aaf626/src/types/Comment.ts#L26)

___

### tags

• `Optional` **tags**: `Record`<`string`, `string`\>

**`see`** [tagifyDog](../modules/utils.tags.md#tagifydog)

#### Defined in

[src/types/Comment.ts:29](https://github.com/jonlaing/mutty-utils/blob/3aaf626/src/types/Comment.ts#L29)

___

### user

• **user**: `string`

[User](User.md) id for the author of the comment

#### Defined in

[src/types/Comment.ts:22](https://github.com/jonlaing/mutty-utils/blob/3aaf626/src/types/Comment.ts#L22)
