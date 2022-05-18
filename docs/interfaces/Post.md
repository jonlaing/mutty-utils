[mutty-utils](../README.md) / [Exports](../modules.md) / Post

# Interface: Post

## Hierarchy

- [`ProcessedDoc`](ProcessedDoc.md)

- [`EmbeddableFields`](../modules.md#embeddablefields)<[`PostEmbedMap`](../modules.md#postembedmap)\>

  ↳ **`Post`**

## Table of contents

### Properties

- [contentId](Post.md#contentid)
- [created](Post.md#created)
- [dog](Post.md#dog)
- [id](Post.md#id)
- [image](Post.md#image)
- [likes](Post.md#likes)
- [location](Post.md#location)
- [locationID](Post.md#locationid)
- [summary](Post.md#summary)
- [tags](Post.md#tags)
- [user](Post.md#user)
- [video](Post.md#video)

## Properties

### contentId

• **contentId**: `string`

#### Defined in

[src/types/Post.ts:21](https://github.com/jonlaing/mutty-utils/blob/c9372b5/src/types/Post.ts#L21)

___

### created

• **created**: `number`

Seconds since the epoch that it was created

#### Inherited from

[ProcessedDoc](ProcessedDoc.md).[created](ProcessedDoc.md#created)

#### Defined in

[src/types/FirestoreBaseTypes.ts:15](https://github.com/jonlaing/mutty-utils/blob/c9372b5/src/types/FirestoreBaseTypes.ts#L15)

___

### dog

• **dog**: `string`

#### Inherited from

EmbeddableFields.dog

#### Defined in

[src/types/Post.ts:11](https://github.com/jonlaing/mutty-utils/blob/c9372b5/src/types/Post.ts#L11)

___

### id

• **id**: `string`

#### Inherited from

[ProcessedDoc](ProcessedDoc.md).[id](ProcessedDoc.md#id)

#### Defined in

[src/types/FirestoreBaseTypes.ts:9](https://github.com/jonlaing/mutty-utils/blob/c9372b5/src/types/FirestoreBaseTypes.ts#L9)

___

### image

• `Optional` **image**: `string`

#### Defined in

[src/types/Post.ts:25](https://github.com/jonlaing/mutty-utils/blob/c9372b5/src/types/Post.ts#L25)

___

### likes

• **likes**: `number`

#### Defined in

[src/types/Post.ts:27](https://github.com/jonlaing/mutty-utils/blob/c9372b5/src/types/Post.ts#L27)

___

### location

• **location**: [`Location`](Location.md)

#### Defined in

[src/types/Post.ts:22](https://github.com/jonlaing/mutty-utils/blob/c9372b5/src/types/Post.ts#L22)

___

### locationID

• `Optional` **locationID**: `string`

#### Defined in

[src/types/Post.ts:23](https://github.com/jonlaing/mutty-utils/blob/c9372b5/src/types/Post.ts#L23)

___

### summary

• **summary**: `string`

#### Defined in

[src/types/Post.ts:24](https://github.com/jonlaing/mutty-utils/blob/c9372b5/src/types/Post.ts#L24)

___

### tags

• `Optional` **tags**: `Record`<`string`, `string`\>

#### Defined in

[src/types/Post.ts:28](https://github.com/jonlaing/mutty-utils/blob/c9372b5/src/types/Post.ts#L28)

___

### user

• **user**: `string`

#### Defined in

[src/types/Post.ts:20](https://github.com/jonlaing/mutty-utils/blob/c9372b5/src/types/Post.ts#L20)

___

### video

• `Optional` **video**: [`Video`](Video.md)

#### Defined in

[src/types/Post.ts:26](https://github.com/jonlaing/mutty-utils/blob/c9372b5/src/types/Post.ts#L26)
