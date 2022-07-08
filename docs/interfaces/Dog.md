[mutty-utils](../README.md) / [Exports](../modules.md) / Dog

# Interface: Dog

## Hierarchy

- [`ProcessedDoc`](ProcessedDoc.md)

- [`EmbeddableFields`](../modules.md#embeddablefields)<[`DogEmbedMap`](../modules.md#dogembedmap)\>

  ↳ **`Dog`**

## Table of contents

### Properties

- [breed](Dog.md#breed)
- [created](Dog.md#created)
- [dayBorn](Dog.md#dayborn)
- [fullName](Dog.md#fullname)
- [id](Dog.md#id)
- [missing](Dog.md#missing)
- [monthBorn](Dog.md#monthborn)
- [pics](Dog.md#pics)
- [relationship](Dog.md#relationship)
- [summary](Dog.md#summary)
- [verified](Dog.md#verified)
- [yearBorn](Dog.md#yearborn)

## Properties

### breed

• `Optional` **breed**: `string`

String representing the breed of the dog

#### Defined in

[src/types/Dog.ts:20](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/types/Dog.ts#L20)

___

### created

• **created**: `number`

Seconds since the epoch that it was created

#### Inherited from

[ProcessedDoc](ProcessedDoc.md).[created](ProcessedDoc.md#created)

#### Defined in

[src/types/FirestoreBaseTypes.ts:15](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/types/FirestoreBaseTypes.ts#L15)

___

### dayBorn

• `Optional` **dayBorn**: `number`

Zero-index day the dog was born

#### Defined in

[src/types/Dog.ts:26](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/types/Dog.ts#L26)

___

### fullName

• **fullName**: `string`

Full name of the dog

#### Defined in

[src/types/Dog.ts:16](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/types/Dog.ts#L16)

___

### id

• **id**: `string`

#### Inherited from

[ProcessedDoc](ProcessedDoc.md).[id](ProcessedDoc.md#id)

#### Defined in

[src/types/FirestoreBaseTypes.ts:9](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/types/FirestoreBaseTypes.ts#L9)

___

### missing

• `Optional` **missing**: `string`

Content ID for the a `lostdog` [Bulletin](Bulletin.md)

#### Defined in

[src/types/Dog.ts:30](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/types/Dog.ts#L30)

___

### monthBorn

• `Optional` **monthBorn**: `number`

Zero-indexed month the dog was born

#### Defined in

[src/types/Dog.ts:24](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/types/Dog.ts#L24)

___

### pics

• **pics**: `string`[]

List of URIs to profile pictures.

#### Defined in

[src/types/Dog.ts:18](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/types/Dog.ts#L18)

___

### relationship

• `Optional` **relationship**: `string`

#### Inherited from

EmbeddableFields.relationship

#### Defined in

[src/types/Dog.ts:11](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/types/Dog.ts#L11)

___

### summary

• **summary**: `string`

Profile text

#### Defined in

[src/types/Dog.ts:28](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/types/Dog.ts#L28)

___

### verified

• `Optional` **verified**: `boolean`

Is this a verified account?

#### Defined in

[src/types/Dog.ts:32](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/types/Dog.ts#L32)

___

### yearBorn

• `Optional` **yearBorn**: `number`

Year the dog was born

#### Defined in

[src/types/Dog.ts:22](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/types/Dog.ts#L22)
