[mutty-utils](../README.md) / [Exports](../modules.md) / Bulletin

# Interface: Bulletin

## Hierarchy

- [`ProcessedDoc`](ProcessedDoc.md)

- [`EmbeddableFields`](../modules.md#embeddablefields)<[`BulletinEmbedMap`](../modules.md#bulletinembedmap)\>

  ↳ **`Bulletin`**

## Table of contents

### Properties

- [bulletinType](Bulletin.md#bulletintype)
- [canComment](Bulletin.md#cancomment)
- [canMessage](Bulletin.md#canmessage)
- [contact](Bulletin.md#contact)
- [contentId](Bulletin.md#contentid)
- [created](Bulletin.md#created)
- [date](Bulletin.md#date)
- [description](Bulletin.md#description)
- [dog](Bulletin.md#dog)
- [dogFound](Bulletin.md#dogfound)
- [endDate](Bulletin.md#enddate)
- [id](Bulletin.md#id)
- [image](Bulletin.md#image)
- [likes](Bulletin.md#likes)
- [location](Bulletin.md#location)
- [locationIDs](Bulletin.md#locationids)
- [tags](Bulletin.md#tags)
- [title](Bulletin.md#title)
- [user](Bulletin.md#user)

## Properties

### bulletinType

• **bulletinType**: [`BulletinType`](../modules.md#bulletintype)

#### Defined in

[src/types/Bulletin.ts:85](https://github.com/jonlaing/mutty-utils/blob/3aaf626/src/types/Bulletin.ts#L85)

___

### canComment

• **canComment**: `boolean`

Set whether a Bulletin can be commented on.

#### Defined in

[src/types/Bulletin.ts:68](https://github.com/jonlaing/mutty-utils/blob/3aaf626/src/types/Bulletin.ts#L68)

___

### canMessage

• **canMessage**: `boolean`

Set whether the author of this Bulletin can be messaged by other
Users.

**`remark`** This isn't currently implemented in the app

#### Defined in

[src/types/Bulletin.ts:74](https://github.com/jonlaing/mutty-utils/blob/3aaf626/src/types/Bulletin.ts#L74)

___

### contact

• `Optional` **contact**: [`Contact`](Contact.md)

#### Defined in

[src/types/Bulletin.ts:95](https://github.com/jonlaing/mutty-utils/blob/3aaf626/src/types/Bulletin.ts#L95)

___

### contentId

• **contentId**: `string`

Content Id for related Bulletins. Because a Bulletin can be associated
with more than one [Dog](Dog.md), we use write multiple copies of the
same Bulletin, and use the `contentId` to associate them.

#### Defined in

[src/types/Bulletin.ts:46](https://github.com/jonlaing/mutty-utils/blob/3aaf626/src/types/Bulletin.ts#L46)

___

### created

• **created**: `number`

Seconds since the epoch that it was created

#### Inherited from

[ProcessedDoc](ProcessedDoc.md).[created](ProcessedDoc.md#created)

#### Defined in

[src/types/FirestoreBaseTypes.ts:15](https://github.com/jonlaing/mutty-utils/blob/3aaf626/src/types/FirestoreBaseTypes.ts#L15)

___

### date

• **date**: `number`

The date of the Bulletin. For a [`meetup`](../modules.md#bulletintype) this
will be the start date of the Meetup represented in seconds since
the epoch. For a [`lostdog`](../modules.md#bulletintype) it represents
when the dog was last seen. For advertisements it will represent
the start date of the campaign.

#### Defined in

[src/types/Bulletin.ts:93](https://github.com/jonlaing/mutty-utils/blob/3aaf626/src/types/Bulletin.ts#L93)

___

### description

• `Optional` **description**: `string`

Description of the Bulletin

#### Defined in

[src/types/Bulletin.ts:66](https://github.com/jonlaing/mutty-utils/blob/3aaf626/src/types/Bulletin.ts#L66)

___

### dog

• **dog**: `string`

#### Inherited from

EmbeddableFields.dog

#### Defined in

[src/types/Bulletin.ts:24](https://github.com/jonlaing/mutty-utils/blob/3aaf626/src/types/Bulletin.ts#L24)

___

### dogFound

• `Optional` **dogFound**: `boolean`

Set whether the dog has been found

#### Defined in

[src/types/Bulletin.ts:99](https://github.com/jonlaing/mutty-utils/blob/3aaf626/src/types/Bulletin.ts#L99)

___

### endDate

• `Optional` **endDate**: `number`

#### Defined in

[src/types/Bulletin.ts:94](https://github.com/jonlaing/mutty-utils/blob/3aaf626/src/types/Bulletin.ts#L94)

___

### id

• **id**: `string`

#### Inherited from

[ProcessedDoc](ProcessedDoc.md).[id](ProcessedDoc.md#id)

#### Defined in

[src/types/FirestoreBaseTypes.ts:9](https://github.com/jonlaing/mutty-utils/blob/3aaf626/src/types/FirestoreBaseTypes.ts#L9)

___

### image

• **image**: `string`

The display image of the Bulletin

#### Defined in

[src/types/Bulletin.ts:78](https://github.com/jonlaing/mutty-utils/blob/3aaf626/src/types/Bulletin.ts#L78)

___

### likes

• **likes**: `number`

The number of likes

#### Defined in

[src/types/Bulletin.ts:84](https://github.com/jonlaing/mutty-utils/blob/3aaf626/src/types/Bulletin.ts#L84)

___

### location

• **location**: [`Location`](Location.md)

[Location](Location.md) of the this Bulletin.

#### Defined in

[src/types/Bulletin.ts:48](https://github.com/jonlaing/mutty-utils/blob/3aaf626/src/types/Bulletin.ts#L48)

___

### locationIDs

• **locationIDs**: `string`[]

Location IDs are used to search Firestore for nearby Bulletins.

**`example`**

```typescript
{latitude, longitude} = bulletin.location.geopoint;
const locationIDs = utils.coordToMatrix(latitude, longitude, 1);
```

**`see`** [coordToFullID](../modules/utils.location.md#coordtofullid)

**`see`** [coordToMatrix](../modules/utils.location.md#coordtomatrix)

#### Defined in

[src/types/Bulletin.ts:62](https://github.com/jonlaing/mutty-utils/blob/3aaf626/src/types/Bulletin.ts#L62)

___

### tags

• `Optional` **tags**: `Record`<`string`, `string`\>

**`see`** [tagifyDog](../modules/utils.tags.md#tagifydog)

#### Defined in

[src/types/Bulletin.ts:80](https://github.com/jonlaing/mutty-utils/blob/3aaf626/src/types/Bulletin.ts#L80)

___

### title

• **title**: `string`

Title of the Bulletin. This is overwritten for [`lostdog`](../modules.md#bulletintype)

#### Defined in

[src/types/Bulletin.ts:64](https://github.com/jonlaing/mutty-utils/blob/3aaf626/src/types/Bulletin.ts#L64)

___

### user

• **user**: `string`

User id for the [User](User.md) that authored the record.

#### Defined in

[src/types/Bulletin.ts:40](https://github.com/jonlaing/mutty-utils/blob/3aaf626/src/types/Bulletin.ts#L40)
