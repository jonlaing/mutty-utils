[mutty-utils](README.md) / Exports

# mutty-utils

## Table of contents

### Namespaces

- [Dog](modules/Dog.md)
- [GUID](modules/GUID.md)
- [Post](modules/Post.md)
- [Timestamp](modules/Timestamp.md)
- [lenses](modules/lenses.md)
- [utils](modules/utils.md)

### Interfaces

- [AdditionalUserInfo](interfaces/AdditionalUserInfo.md)
- [Advertiser](interfaces/Advertiser.md)
- [Bulletin](interfaces/Bulletin.md)
- [Comment](interfaces/Comment.md)
- [Contact](interfaces/Contact.md)
- [Dog](interfaces/Dog.md)
- [Flag](interfaces/Flag.md)
- [Friendship](interfaces/Friendship.md)
- [Geopoint](interfaces/Geopoint.md)
- [HasId](interfaces/HasId.md)
- [HasTimestamp](interfaces/HasTimestamp.md)
- [Human](interfaces/Human.md)
- [Like](interfaces/Like.md)
- [LikeNotifIface](interfaces/LikeNotifIface.md)
- [Likeable](interfaces/Likeable.md)
- [LikedDogContent](interfaces/LikedDogContent.md)
- [Location](interfaces/Location.md)
- [MultiFactor](interfaces/MultiFactor.md)
- [Notification](interfaces/Notification.md)
- [Post](interfaces/Post.md)
- [ProcessedDoc](interfaces/ProcessedDoc.md)
- [ProviderData](interfaces/ProviderData.md)
- [Relationship](interfaces/Relationship.md)
- [STSTokenManager](interfaces/STSTokenManager.md)
- [User](interfaces/User.md)
- [UserUser](interfaces/UserUser.md)
- [Video](interfaces/Video.md)

### Type aliases

- [ActionType](modules.md#actiontype)
- [BulletinBuilder](modules.md#bulletinbuilder)
- [BulletinEmbedMap](modules.md#bulletinembedmap)
- [BulletinType](modules.md#bulletintype)
- [CommentBuilder](modules.md#commentbuilder)
- [CommentEmbedMap](modules.md#commentembedmap)
- [ContentType](modules.md#contenttype)
- [DocBuilder](modules.md#docbuilder)
- [DocumentData](modules.md#documentdata)
- [DogBuilder](modules.md#dogbuilder)
- [DogEmbedMap](modules.md#dogembedmap)
- [EmbedAllAsGUID](modules.md#embedallasguid)
- [EmbedAsGUID](modules.md#embedasguid)
- [EmbedField](modules.md#embedfield)
- [EmbedFields](modules.md#embedfields)
- [EmbeddableFields](modules.md#embeddablefields)
- [FieldPath](modules.md#fieldpath)
- [Firestore](modules.md#firestore)
- [FlagBuilder](modules.md#flagbuilder)
- [FlagType](modules.md#flagtype)
- [FlaggableType](modules.md#flaggabletype)
- [FriendEmbedMap](modules.md#friendembedmap)
- [FriendshipBuilder](modules.md#friendshipbuilder)
- [FriendshipStatus](modules.md#friendshipstatus)
- [GUID](modules.md#guid)
- [HasProp](modules.md#hasprop)
- [HumanBuider](modules.md#humanbuider)
- [HumanEmbedMap](modules.md#humanembedmap)
- [LikeBuilder](modules.md#likebuilder)
- [LikeNotifWDog](modules.md#likenotifwdog)
- [LikeableType](modules.md#likeabletype)
- [Liked](modules.md#liked)
- [MultiBulletin](modules.md#multibulletin)
- [MultiDoc](modules.md#multidoc)
- [MultiPost](modules.md#multipost)
- [NotificationBuilder](modules.md#notificationbuilder)
- [PostBuilder](modules.md#postbuilder)
- [PostEmbedMap](modules.md#postembedmap)
- [PropFn](modules.md#propfn)
- [Query](modules.md#query)
- [QueryConstraintSyncFn](modules.md#queryconstraintsyncfn)
- [RelationshipBuilder](modules.md#relationshipbuilder)
- [RelationshipEmbedMap](modules.md#relationshipembedmap)
- [RelationshipType](modules.md#relationshiptype)
- [Timestamp](modules.md#timestamp)
- [TypedContainer](modules.md#typedcontainer)
- [WithComments](modules.md#withcomments)

## Type aliases

### ActionType

Ƭ **ActionType**: ``"like"`` \| ``"comment"`` \| ``"friend"`` \| ``"tag"``

#### Defined in

[src/types/Notification.ts:6](https://github.com/jonlaing/mutty-utils/blob/c9372b5/src/types/Notification.ts#L6)

___

### BulletinBuilder

Ƭ **BulletinBuilder**<`HasLikes`\>: `HasLikes` extends ``true`` ? [`DocBuilder`](modules.md#docbuilder)<[`Bulletin`](interfaces/Bulletin.md)\> : [`DocBuilder`](modules.md#docbuilder)<`Omit`<[`Bulletin`](interfaces/Bulletin.md), ``"likes"``\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `HasLikes` | extends `boolean` = ``true`` |

#### Defined in

[src/types/Bulletin.ts:102](https://github.com/jonlaing/mutty-utils/blob/c9372b5/src/types/Bulletin.ts#L102)

___

### BulletinEmbedMap

Ƭ **BulletinEmbedMap**: `Object`

**`see`** [EmbedFields](modules.md#embedfields)

#### Type declaration

| Name | Type |
| :------ | :------ |
| `dog` | [`Dog`](interfaces/Dog.md) |

#### Defined in

[src/types/Bulletin.ts:23](https://github.com/jonlaing/mutty-utils/blob/c9372b5/src/types/Bulletin.ts#L23)

___

### BulletinType

Ƭ **BulletinType**: ``"meetup"`` \| ``"lostdog"`` \| ``"ad"``

The type for a [Bulletin](interfaces/Bulletin.md). Advertisements haven't been implemented yet,
so while `ad` is valid, it won't do anything in the interface.

#### Defined in

[src/types/Bulletin.ts:20](https://github.com/jonlaing/mutty-utils/blob/c9372b5/src/types/Bulletin.ts#L20)

___

### CommentBuilder

Ƭ **CommentBuilder**: [`DocBuilder`](modules.md#docbuilder)<[`Comment`](interfaces/Comment.md)\>

#### Defined in

[src/types/Comment.ts:32](https://github.com/jonlaing/mutty-utils/blob/c9372b5/src/types/Comment.ts#L32)

___

### CommentEmbedMap

Ƭ **CommentEmbedMap**: `Object`

**`see`** [EmbedFields](modules.md#embedfields)

#### Type declaration

| Name | Type |
| :------ | :------ |
| `dogs` | [`Dog`](interfaces/Dog.md)[] |

#### Defined in

[src/types/Comment.ts:14](https://github.com/jonlaing/mutty-utils/blob/c9372b5/src/types/Comment.ts#L14)

___

### ContentType

Ƭ **ContentType**: ``"post"`` \| ``"comment"`` \| ``"photo"`` \| ``"dog"`` \| ``"bulletin"``

#### Defined in

[src/types/Notification.ts:5](https://github.com/jonlaing/mutty-utils/blob/c9372b5/src/types/Notification.ts#L5)

___

### DocBuilder

Ƭ **DocBuilder**<`T`\>: `Omit`<`T`, ``"id"``\> & { `version`: `number`  }

Strips `id` from the [ProcessedDoc](interfaces/ProcessedDoc.md) since it would be redundant
in Firestore. It also adds a `version` field to keep track which
version of the API we're using. This is imporant because there
are Firebase Functions that will perform automatic processes
that are handled manually in older versions of the app. Using
`version` we can ensure they only run for certain versions of the app.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ProcessedDoc`](interfaces/ProcessedDoc.md) |

#### Defined in

[src/types/FirestoreBaseTypes.ts:105](https://github.com/jonlaing/mutty-utils/blob/c9372b5/src/types/FirestoreBaseTypes.ts#L105)

___

### DocumentData

Ƭ **DocumentData**: `firebase.firestore.DocumentData` \| `admin.firestore.DocumentData`

#### Defined in

[src/types/Firestore.ts:22](https://github.com/jonlaing/mutty-utils/blob/c9372b5/src/types/Firestore.ts#L22)

___

### DogBuilder

Ƭ **DogBuilder**: [`DocBuilder`](modules.md#docbuilder)<[`Dog`](interfaces/Dog.md)\>

#### Defined in

[src/types/Dog.ts:33](https://github.com/jonlaing/mutty-utils/blob/c9372b5/src/types/Dog.ts#L33)

___

### DogEmbedMap

Ƭ **DogEmbedMap**: `Object`

**`see`** [EmbedFields](modules.md#embedfields)

#### Type declaration

| Name | Type |
| :------ | :------ |
| `relationship?` | [`Relationship`](interfaces/Relationship.md) |

#### Defined in

[src/types/Dog.ts:10](https://github.com/jonlaing/mutty-utils/blob/c9372b5/src/types/Dog.ts#L10)

___

### EmbedAllAsGUID

Ƭ **EmbedAllAsGUID**<`T`, `EmbedMap`\>: `Omit`<`T`, keyof `EmbedMap`\> & { [key in keyof EmbedMap]: EmbedMap[key] extends infer U[] ? GUID[] : GUID }

**`see`** [EmbedAsGUID](modules.md#embedasguid)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `EmbedMap` | extends `Partial`<`T`\> |

#### Defined in

[src/types/FirestoreBaseTypes.ts:62](https://github.com/jonlaing/mutty-utils/blob/c9372b5/src/types/FirestoreBaseTypes.ts#L62)

___

### EmbedAsGUID

Ƭ **EmbedAsGUID**<`T`, `K`\>: `T` & { [key in K]: GUID }

Ensures that the nested record is referenced as a string

**`see`** [EmbedField](modules.md#embedfield)

**`see`** [EmbedAllAsGUID](modules.md#embedallasguid)

**`see`** [EmbeddableFields](modules.md#embeddablefields)

**`see`** [EmbedFields](modules.md#embedfields)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `K` | extends keyof `T` |

#### Defined in

[src/types/FirestoreBaseTypes.ts:57](https://github.com/jonlaing/mutty-utils/blob/c9372b5/src/types/FirestoreBaseTypes.ts#L57)

___

### EmbedField

Ƭ **EmbedField**<`T`, `K`, `V`\>: `Omit`<`T`, `K`\> & { [key in K]: T[key] extends infer U[] ? V[] : V }

Since it would be ridiculous to store nested records being that
some records can change after they've been created, it makes
more sense to just store the `id` of the record as a string.
However, in the interface, it makes sense to have the records
nested sometimes, so this type is able to represent the duality
of nested or referenced records.

**`example`**
```typescript
const dogs: Dog[] = getDogs() // not a real function in this library
const comment: EmbedField<Comment, "dogs", Dog> = {
  dogs: dogs
  //...
}

@see [EmbedAsGUID](modules.md#embedasguid)
@see [EmbedAllAsGUID](modules.md#embedallasguid)
@see [EmbeddableFields](modules.md#embeddablefields)
@see [EmbedFields](modules.md#embedfields)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ProcessedDoc`](interfaces/ProcessedDoc.md) |
| `K` | extends keyof `T` |
| `V` | `V` |

#### Defined in

[src/types/FirestoreBaseTypes.ts:42](https://github.com/jonlaing/mutty-utils/blob/c9372b5/src/types/FirestoreBaseTypes.ts#L42)

___

### EmbedFields

Ƭ **EmbedFields**<`T`, `EmbedMap`\>: `Omit`<`T`, keyof `EmbedMap`\> & `EmbedMap`

Embeds all fields as nested records rather than id references

**`see`** [EmbedField](modules.md#embedfield)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `EmbedMap` | extends { [k in keyof Partial<T\>]: any } |

#### Defined in

[src/types/FirestoreBaseTypes.ts:92](https://github.com/jonlaing/mutty-utils/blob/c9372b5/src/types/FirestoreBaseTypes.ts#L92)

___

### EmbeddableFields

Ƭ **EmbeddableFields**<`EmbedMap`\>: { [key in keyof EmbedMap]: EmbedMap[key] extends infer U[] ? GUID[] : GUID }

Denotes that a record has embeddable fields

**`example`**
```typescript
export type CommentEmbedMap = {
  dogs: Dog[];
};

export interface Comment
  extends ProcessedDoc,
    EmbeddableFields<CommentEmbedMap> {
  // ...
}

#### Type parameters

| Name |
| :------ |
| `EmbedMap` |

#### Defined in

[src/types/FirestoreBaseTypes.ts:84](https://github.com/jonlaing/mutty-utils/blob/c9372b5/src/types/FirestoreBaseTypes.ts#L84)

___

### FieldPath

Ƭ **FieldPath**: `firebase.firestore.FieldPath` \| `admin.firestore.FieldPath`

#### Defined in

[src/types/Firestore.ts:26](https://github.com/jonlaing/mutty-utils/blob/c9372b5/src/types/Firestore.ts#L26)

___

### Firestore

Ƭ **Firestore**: `firebase.firestore.Firestore` \| `admin.firestore.Firestore`

Base types trying to make `mutty-utils` work with both `firebase`
and `firebase-admin`. Pretty ridiculous, but they apparently have
different, but very closely related types. I would love to get this
out of here and not need to import both libraries, but I guess
that's where I'm at for now.

#### Defined in

[src/types/Firestore.ts:12](https://github.com/jonlaing/mutty-utils/blob/c9372b5/src/types/Firestore.ts#L12)

___

### FlagBuilder

Ƭ **FlagBuilder**: [`DocBuilder`](modules.md#docbuilder)<[`Flag`](interfaces/Flag.md)\>

#### Defined in

[src/types/Flag.ts:19](https://github.com/jonlaing/mutty-utils/blob/c9372b5/src/types/Flag.ts#L19)

___

### FlagType

Ƭ **FlagType**: ``"not-dog"`` \| ``"inappropriate"`` \| ``"spam"`` \| ``"other"``

#### Defined in

[src/types/Flag.ts:4](https://github.com/jonlaing/mutty-utils/blob/c9372b5/src/types/Flag.ts#L4)

___

### FlaggableType

Ƭ **FlaggableType**: ``"post"`` \| ``"comment"`` \| ``"photo"`` \| ``"profile"`` \| ``"bulletin"``

#### Defined in

[src/types/Flag.ts:5](https://github.com/jonlaing/mutty-utils/blob/c9372b5/src/types/Flag.ts#L5)

___

### FriendEmbedMap

Ƭ **FriendEmbedMap**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `dog1` | [`Dog`](interfaces/Dog.md) |
| `dog2` | [`Dog`](interfaces/Dog.md) |

#### Defined in

[src/types/Friendship.ts:11](https://github.com/jonlaing/mutty-utils/blob/c9372b5/src/types/Friendship.ts#L11)

___

### FriendshipBuilder

Ƭ **FriendshipBuilder**: [`DocBuilder`](modules.md#docbuilder)<[`Friendship`](interfaces/Friendship.md)\>

#### Defined in

[src/types/Friendship.ts:25](https://github.com/jonlaing/mutty-utils/blob/c9372b5/src/types/Friendship.ts#L25)

___

### FriendshipStatus

Ƭ **FriendshipStatus**: ``"requested"`` \| ``"confirmed"`` \| ``"rejected"``

#### Defined in

[src/types/Friendship.ts:9](https://github.com/jonlaing/mutty-utils/blob/c9372b5/src/types/Friendship.ts#L9)

___

### GUID

Ƭ **GUID**: `string`

#### Defined in

[src/types/GUID.ts:2](https://github.com/jonlaing/mutty-utils/blob/c9372b5/src/types/GUID.ts#L2)

___

### HasProp

Ƭ **HasProp**<`T`, `K`\>: `T` extends { [k in K]: any } ? ``true`` : ``false``

A type to check if a record has a property

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `K` | extends `string` |

#### Defined in

[src/types/FirestoreBaseTypes.ts:133](https://github.com/jonlaing/mutty-utils/blob/c9372b5/src/types/FirestoreBaseTypes.ts#L133)

___

### HumanBuider

Ƭ **HumanBuider**: [`DocBuilder`](modules.md#docbuilder)<[`Human`](interfaces/Human.md)\>

#### Defined in

[src/types/Human.ts:23](https://github.com/jonlaing/mutty-utils/blob/c9372b5/src/types/Human.ts#L23)

___

### HumanEmbedMap

Ƭ **HumanEmbedMap**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `relationship?` | [`Relationship`](interfaces/Relationship.md) |

#### Defined in

[src/types/Human.ts:9](https://github.com/jonlaing/mutty-utils/blob/c9372b5/src/types/Human.ts#L9)

___

### LikeBuilder

Ƭ **LikeBuilder**: [`DocBuilder`](modules.md#docbuilder)<[`Like`](interfaces/Like.md)\>

#### Defined in

[src/types/Like.ts:12](https://github.com/jonlaing/mutty-utils/blob/c9372b5/src/types/Like.ts#L12)

___

### LikeNotifWDog

Ƭ **LikeNotifWDog**<`T`\>: `T` extends [`HasProp`](modules.md#hasprop)<`T`, ``"dog"``\> ? [`LikeNotifIface`](interfaces/LikeNotifIface.md) & { `dog`: [`GUID`](modules.md#guid)  } : [`LikeNotifIface`](interfaces/LikeNotifIface.md) & { `dogs`: [`GUID`](modules.md#guid)[]  }

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[src/types/Notification.ts:25](https://github.com/jonlaing/mutty-utils/blob/c9372b5/src/types/Notification.ts#L25)

___

### LikeableType

Ƭ **LikeableType**: ``"post"`` \| ``"comment"`` \| ``"photo"`` \| ``"bulletin"``

#### Defined in

[src/types/Like.ts:4](https://github.com/jonlaing/mutty-utils/blob/c9372b5/src/types/Like.ts#L4)

___

### Liked

Ƭ **Liked**<`T`\>: `T` & { `liked`: `boolean`  }

Adds the `liked` field to a record. Since this is user specific
we only use this on the front end. It should not be saved to Firestore

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[src/types/FirestoreBaseTypes.ts:113](https://github.com/jonlaing/mutty-utils/blob/c9372b5/src/types/FirestoreBaseTypes.ts#L113)

___

### MultiBulletin

Ƭ **MultiBulletin**: [`MultiDoc`](modules.md#multidoc)<[`WithComments`](modules.md#withcomments)<[`Liked`](modules.md#liked)<[`EmbedField`](modules.md#embedfield)<[`Bulletin`](interfaces/Bulletin.md), ``"dog"``, [`Dog`](interfaces/Dog.md)\>\>\>\>

#### Defined in

[src/types/MultiDoc.ts:22](https://github.com/jonlaing/mutty-utils/blob/c9372b5/src/types/MultiDoc.ts#L22)

___

### MultiDoc

Ƭ **MultiDoc**<`T`\>: `T` & { `dogs`: [`Dog`](interfaces/Dog.md)[]  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`LikedDogContent`](interfaces/LikedDogContent.md) |

#### Defined in

[src/types/MultiDoc.ts:15](https://github.com/jonlaing/mutty-utils/blob/c9372b5/src/types/MultiDoc.ts#L15)

___

### MultiPost

Ƭ **MultiPost**: [`MultiDoc`](modules.md#multidoc)<[`WithComments`](modules.md#withcomments)<[`Liked`](modules.md#liked)<[`EmbedField`](modules.md#embedfield)<[`Post`](interfaces/Post.md), ``"dog"``, [`Dog`](interfaces/Dog.md)\>\>\>\>

#### Defined in

[src/types/MultiDoc.ts:19](https://github.com/jonlaing/mutty-utils/blob/c9372b5/src/types/MultiDoc.ts#L19)

___

### NotificationBuilder

Ƭ **NotificationBuilder**: [`DocBuilder`](modules.md#docbuilder)<`Omit`<[`Notification`](interfaces/Notification.md), ``"read"``\>\>

#### Defined in

[src/types/Notification.ts:19](https://github.com/jonlaing/mutty-utils/blob/c9372b5/src/types/Notification.ts#L19)

___

### PostBuilder

Ƭ **PostBuilder**<`HasLikes`\>: `HasLikes` extends ``true`` ? [`DocBuilder`](modules.md#docbuilder)<[`Post`](interfaces/Post.md)\> : [`DocBuilder`](modules.md#docbuilder)<`Omit`<[`Post`](interfaces/Post.md), ``"likes"``\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `HasLikes` | extends `boolean` = ``true`` |

#### Defined in

[src/types/Post.ts:31](https://github.com/jonlaing/mutty-utils/blob/c9372b5/src/types/Post.ts#L31)

___

### PostEmbedMap

Ƭ **PostEmbedMap**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `dog` | [`Dog`](interfaces/Dog.md) |

#### Defined in

[src/types/Post.ts:10](https://github.com/jonlaing/mutty-utils/blob/c9372b5/src/types/Post.ts#L10)

___

### PropFn

Ƭ **PropFn**<`T`, `K`\>: (`x`: `T`) => `T`[`K`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `K` | extends keyof `T` |

#### Type declaration

▸ (`x`): `T`[`K`]

##### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `T` |

##### Returns

`T`[`K`]

#### Defined in

[src/types/UtilTypes.ts:1](https://github.com/jonlaing/mutty-utils/blob/c9372b5/src/types/UtilTypes.ts#L1)

___

### Query

Ƭ **Query**: `firebase.firestore.Query`<[`DocumentData`](modules.md#documentdata)\> \| `admin.firestore.Query`<[`DocumentData`](modules.md#documentdata)\> \| `firebase.firestore.CollectionReference`<[`DocumentData`](modules.md#documentdata)\> \| `admin.firestore.CollectionReference`<[`DocumentData`](modules.md#documentdata)\>

#### Defined in

[src/types/Firestore.ts:16](https://github.com/jonlaing/mutty-utils/blob/c9372b5/src/types/Firestore.ts#L16)

___

### QueryConstraintSyncFn

Ƭ **QueryConstraintSyncFn**<`Q`\>: (`q`: `Q`) => `Q`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Q` | extends [`Query`](modules.md#query) = [`Query`](modules.md#query) |

#### Type declaration

▸ (`q`): `Q`

##### Parameters

| Name | Type |
| :------ | :------ |
| `q` | `Q` |

##### Returns

`Q`

#### Defined in

[src/types/Query.ts:3](https://github.com/jonlaing/mutty-utils/blob/c9372b5/src/types/Query.ts#L3)

___

### RelationshipBuilder

Ƭ **RelationshipBuilder**: [`DocBuilder`](modules.md#docbuilder)<[`Relationship`](interfaces/Relationship.md)\>

#### Defined in

[src/types/Relationship.ts:22](https://github.com/jonlaing/mutty-utils/blob/c9372b5/src/types/Relationship.ts#L22)

___

### RelationshipEmbedMap

Ƭ **RelationshipEmbedMap**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `dog` | [`Dog`](interfaces/Dog.md) |

#### Defined in

[src/types/Relationship.ts:11](https://github.com/jonlaing/mutty-utils/blob/c9372b5/src/types/Relationship.ts#L11)

___

### RelationshipType

Ƭ **RelationshipType**: ``"parent"`` \| ``"friend"`` \| ``"caregiver"``

#### Defined in

[src/types/Relationship.ts:9](https://github.com/jonlaing/mutty-utils/blob/c9372b5/src/types/Relationship.ts#L9)

___

### Timestamp

Ƭ **Timestamp**: `number`

#### Defined in

[src/types/Timestamp.ts:3](https://github.com/jonlaing/mutty-utils/blob/c9372b5/src/types/Timestamp.ts#L3)

___

### TypedContainer

Ƭ **TypedContainer**<`TypeMap`, `FieldName`\>: { [k in keyof TypeMap]: TypeMap[k] } & { [field in FieldName]: keyof TypeMap }

Box the type when mixing content types.

**`see`** [intersperseBulletins](modules/utils.lists.md#interspersebulletins)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TypeMap` | `TypeMap` |
| `FieldName` | extends `string` = ``"type"`` |

#### Defined in

[src/types/FirestoreBaseTypes.ts:128](https://github.com/jonlaing/mutty-utils/blob/c9372b5/src/types/FirestoreBaseTypes.ts#L128)

___

### WithComments

Ƭ **WithComments**<`T`\>: `T` & { `comments?`: `number`  }

Adds the comment count to the record. This is dynamically calculated
so this is only used on the front-end.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[src/types/FirestoreBaseTypes.ts:120](https://github.com/jonlaing/mutty-utils/blob/c9372b5/src/types/FirestoreBaseTypes.ts#L120)
