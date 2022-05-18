[mutty-utils](../README.md) / [Exports](../modules.md) / Relationship

# Interface: Relationship

## Hierarchy

- [`ProcessedDoc`](ProcessedDoc.md)

- [`EmbeddableFields`](../modules.md#embeddablefields)<[`RelationshipEmbedMap`](../modules.md#relationshipembedmap)\>

  ↳ **`Relationship`**

## Table of contents

### Properties

- [created](Relationship.md#created)
- [dog](Relationship.md#dog)
- [id](Relationship.md#id)
- [type](Relationship.md#type)
- [user](Relationship.md#user)

## Properties

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

[src/types/Relationship.ts:12](https://github.com/jonlaing/mutty-utils/blob/c9372b5/src/types/Relationship.ts#L12)

___

### id

• **id**: `string`

#### Inherited from

[ProcessedDoc](ProcessedDoc.md).[id](ProcessedDoc.md#id)

#### Defined in

[src/types/FirestoreBaseTypes.ts:9](https://github.com/jonlaing/mutty-utils/blob/c9372b5/src/types/FirestoreBaseTypes.ts#L9)

___

### type

• **type**: [`RelationshipType`](../modules.md#relationshiptype)

#### Defined in

[src/types/Relationship.ts:19](https://github.com/jonlaing/mutty-utils/blob/c9372b5/src/types/Relationship.ts#L19)

___

### user

• **user**: `string`

#### Defined in

[src/types/Relationship.ts:18](https://github.com/jonlaing/mutty-utils/blob/c9372b5/src/types/Relationship.ts#L18)
