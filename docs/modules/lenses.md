[mutty-utils](../README.md) / [Exports](../modules.md) / lenses

# Namespace: lenses

## Table of contents

### Namespaces

- [Geopoint](lenses.Geopoint.md)
- [bulletin](lenses.bulletin.md)
- [comment](lenses.comment.md)
- [flag](lenses.flag.md)
- [human](lenses.human.md)
- [like](lenses.like.md)
- [notification](lenses.notification.md)
- [post](lenses.post.md)
- [user](lenses.user.md)

### Variables

- [actionType](lenses.md#actiontype)
- [additionalUserInfo](lenses.md#additionaluserinfo)
- [author](lenses.md#author)
- [block](lenses.md#block)
- [breed](lenses.md#breed)
- [bulletinType](lenses.md#bulletintype)
- [canComment](lenses.md#cancomment)
- [canMessage](lenses.md#canmessage)
- [comments](lenses.md#comments)
- [contact](lenses.md#contact)
- [containerType](lenses.md#containertype)
- [content](lenses.md#content)
- [created](lenses.md#created)
- [createdMoment](lenses.md#createdmoment)
- [credential](lenses.md#credential)
- [date](lenses.md#date)
- [dayBorn](lenses.md#dayborn)
- [description](lenses.md#description)
- [dog](lenses.md#dog)
- [dog1](lenses.md#dog1)
- [dog2](lenses.md#dog2)
- [dogFound](lenses.md#dogfound)
- [dogs](lenses.md#dogs)
- [email](lenses.md#email)
- [endDate](lenses.md#enddate)
- [enrolledFactors](lenses.md#enrolledfactors)
- [firstProviderData](lenses.md#firstproviderdata)
- [flagType](lenses.md#flagtype)
- [friendshipID](lenses.md#friendshipid)
- [from](lenses.md#from)
- [fullName](lenses.md#fullname)
- [geopoint](lenses.md#geopoint)
- [id](lenses.md#id)
- [image](lenses.md#image)
- [isNewUser](lenses.md#isnewuser)
- [latitude](lenses.md#latitude)
- [likeType](lenses.md#liketype)
- [liked](lenses.md#liked)
- [likes](lenses.md#likes)
- [location](lenses.md#location)
- [locationIDs](lenses.md#locationids)
- [longitude](lenses.md#longitude)
- [missing](lenses.md#missing)
- [momentLens](lenses.md#momentlens)
- [monthBorn](lenses.md#monthborn)
- [multiFactor](lenses.md#multifactor)
- [name](lenses.md#name)
- [operationType](lenses.md#operationtype)
- [other](lenses.md#other)
- [pausePushNotifs](lenses.md#pausepushnotifs)
- [phone](lenses.md#phone)
- [phoneNumber](lenses.md#phonenumber)
- [pics](lenses.md#pics)
- [providerData](lenses.md#providerdata)
- [providerID](lenses.md#providerid)
- [pushToken](lenses.md#pushtoken)
- [read](lenses.md#read)
- [recentLocation](lenses.md#recentlocation)
- [recoveryEmail](lenses.md#recoveryemail)
- [relType](lenses.md#reltype)
- [relationship](lenses.md#relationship)
- [status](lenses.md#status)
- [stsTokenManager](lenses.md#ststokenmanager)
- [summary](lenses.md#summary)
- [tags](lenses.md#tags)
- [thumbnail](lenses.md#thumbnail)
- [title](lenses.md#title)
- [to](lenses.md#to)
- [uri](lenses.md#uri)
- [userProp](lenses.md#userprop)
- [userRecord](lenses.md#userrecord)
- [username](lenses.md#username)
- [version](lenses.md#version)
- [video](lenses.md#video)
- [videoThumbnail](lenses.md#videothumbnail)
- [videoUri](lenses.md#videouri)
- [yearBorn](lenses.md#yearborn)

### Functions

- [BulletinLensHelper](lenses.md#bulletinlenshelper)
- [safeLens](lenses.md#safelens)

## Variables

### actionType

• `Const` **actionType**: `Lens`<`any`, `Maybe`<[`ActionType`](../modules.md#actiontype)\>\>

#### Defined in

[src/lenses/Notification.ts:11](https://github.com/jonlaing/mutty-utils/blob/d7d0eb8/src/lenses/Notification.ts#L11)

___

### additionalUserInfo

• `Const` **additionalUserInfo**: `Lens`<`any`, `Maybe`<[`AdditionalUserInfo`](../interfaces/AdditionalUserInfo.md)\>\>

#### Defined in

[src/lenses/User.ts:13](https://github.com/jonlaing/mutty-utils/blob/d7d0eb8/src/lenses/User.ts#L13)

___

### author

• `Const` **author**: `Lens`<`any`, `Maybe`<`string`\>\>

#### Defined in

[src/lenses/Base.ts:22](https://github.com/jonlaing/mutty-utils/blob/d7d0eb8/src/lenses/Base.ts#L22)

___

### block

• `Const` **block**: `Lens`<[`Friendship`](../interfaces/Friendship.md), `Maybe`<`string`\>\>

#### Defined in

[src/lenses/Friendship.ts:10](https://github.com/jonlaing/mutty-utils/blob/d7d0eb8/src/lenses/Friendship.ts#L10)

___

### breed

• `Const` **breed**: `Lens`<`any`, `Maybe`<`string`\>\>

#### Defined in

[src/lenses/Dog.ts:6](https://github.com/jonlaing/mutty-utils/blob/d7d0eb8/src/lenses/Dog.ts#L6)

___

### bulletinType

• `Const` **bulletinType**: `Lens`<`any`, `Maybe`<[`BulletinType`](../modules.md#bulletintype)\>\>

#### Defined in

[src/lenses/Bulletin.ts:15](https://github.com/jonlaing/mutty-utils/blob/d7d0eb8/src/lenses/Bulletin.ts#L15)

___

### canComment

• `Const` **canComment**: `Lens`<`any`, `Maybe`<`boolean`\>\>

#### Defined in

[src/lenses/Bulletin.ts:13](https://github.com/jonlaing/mutty-utils/blob/d7d0eb8/src/lenses/Bulletin.ts#L13)

___

### canMessage

• `Const` **canMessage**: `Lens`<`any`, `Maybe`<`boolean`\>\>

#### Defined in

[src/lenses/Bulletin.ts:14](https://github.com/jonlaing/mutty-utils/blob/d7d0eb8/src/lenses/Bulletin.ts#L14)

___

### comments

• `Const` **comments**: `Lens`<`any`, `Maybe`<`number`\>\>

#### Defined in

[src/lenses/Comment.ts:6](https://github.com/jonlaing/mutty-utils/blob/d7d0eb8/src/lenses/Comment.ts#L6)

___

### contact

• `Const` **contact**: `Lens`<`any`, `Maybe`<[`Contact`](../interfaces/Contact.md)\>\>

#### Defined in

[src/lenses/Bulletin.ts:19](https://github.com/jonlaing/mutty-utils/blob/d7d0eb8/src/lenses/Bulletin.ts#L19)

___

### containerType

• `Const` **containerType**: `Lens`<`any`, `Maybe`<`string`\>\>

#### Defined in

[src/lenses/TypedContainer.ts:4](https://github.com/jonlaing/mutty-utils/blob/d7d0eb8/src/lenses/TypedContainer.ts#L4)

___

### content

• `Const` **content**: `Lens`<`any`, `Maybe`<[`MultiBulletin`](../modules.md#multibulletin)\> \| `Maybe`<[`MultiPost`](../modules.md#multipost)\>\>

#### Defined in

[src/lenses/TypedContainer.ts:5](https://github.com/jonlaing/mutty-utils/blob/d7d0eb8/src/lenses/TypedContainer.ts#L5)

___

### created

• `Const` **created**: `Lens`<`any`, `Maybe`<`number`\>\>

#### Defined in

[src/lenses/Base.ts:11](https://github.com/jonlaing/mutty-utils/blob/d7d0eb8/src/lenses/Base.ts#L11)

___

### createdMoment

• `Const` **createdMoment**: `Lens`<`unknown`, `unknown`\>

#### Defined in

[src/lenses/Base.ts:12](https://github.com/jonlaing/mutty-utils/blob/d7d0eb8/src/lenses/Base.ts#L12)

___

### credential

• `Const` **credential**: `Lens`<`any`, `Maybe`<`any`\>\>

#### Defined in

[src/lenses/User.ts:15](https://github.com/jonlaing/mutty-utils/blob/d7d0eb8/src/lenses/User.ts#L15)

___

### date

• `Const` **date**: `Lens`<`any`, `Maybe`<`number`\>\>

#### Defined in

[src/lenses/Bulletin.ts:16](https://github.com/jonlaing/mutty-utils/blob/d7d0eb8/src/lenses/Bulletin.ts#L16)

___

### dayBorn

• `Const` **dayBorn**: `Lens`<`any`, `Maybe`<`number`\>\>

#### Defined in

[src/lenses/Dog.ts:9](https://github.com/jonlaing/mutty-utils/blob/d7d0eb8/src/lenses/Dog.ts#L9)

___

### description

• `Const` **description**: `Lens`<`any`, `Maybe`<`string`\>\>

#### Defined in

[src/lenses/Bulletin.ts:12](https://github.com/jonlaing/mutty-utils/blob/d7d0eb8/src/lenses/Bulletin.ts#L12)

___

### dog

• `Const` **dog**: `Lens`<`any`, `Maybe`<`string` \| [`Dog`](../interfaces/Dog.md)\>\>

#### Defined in

[src/lenses/Base.ts:18](https://github.com/jonlaing/mutty-utils/blob/d7d0eb8/src/lenses/Base.ts#L18)

___

### dog1

• `Const` **dog1**: `Lens`<`any`, `Maybe`<`string` \| [`Dog`](../interfaces/Dog.md)\>\>

#### Defined in

[src/lenses/Friendship.ts:4](https://github.com/jonlaing/mutty-utils/blob/d7d0eb8/src/lenses/Friendship.ts#L4)

___

### dog2

• `Const` **dog2**: `Lens`<`any`, `Maybe`<`string` \| [`Dog`](../interfaces/Dog.md)\>\>

#### Defined in

[src/lenses/Friendship.ts:5](https://github.com/jonlaing/mutty-utils/blob/d7d0eb8/src/lenses/Friendship.ts#L5)

___

### dogFound

• `Const` **dogFound**: `Lens`<`any`, `Maybe`<`boolean`\>\>

#### Defined in

[src/lenses/Bulletin.ts:18](https://github.com/jonlaing/mutty-utils/blob/d7d0eb8/src/lenses/Bulletin.ts#L18)

___

### dogs

• `Const` **dogs**: `Lens`<`any`, `Maybe`<[`Dog`](../interfaces/Dog.md)[]\>\>

#### Defined in

[src/lenses/Comment.ts:4](https://github.com/jonlaing/mutty-utils/blob/d7d0eb8/src/lenses/Comment.ts#L4)

___

### email

• `Const` **email**: `Lens`<`any`, `Maybe`<`string`\>\>

#### Defined in

[src/lenses/Bulletin.ts:30](https://github.com/jonlaing/mutty-utils/blob/d7d0eb8/src/lenses/Bulletin.ts#L30)

___

### endDate

• `Const` **endDate**: `Lens`<`any`, `Maybe`<`number`\>\>

#### Defined in

[src/lenses/Bulletin.ts:17](https://github.com/jonlaing/mutty-utils/blob/d7d0eb8/src/lenses/Bulletin.ts#L17)

___

### enrolledFactors

• `Const` **enrolledFactors**: `Lens`<[`User`](../interfaces/User.md), `Maybe`<`string`[]\>\>

#### Defined in

[src/lenses/User.ts:37](https://github.com/jonlaing/mutty-utils/blob/d7d0eb8/src/lenses/User.ts#L37)

___

### firstProviderData

• `Const` **firstProviderData**: `Lens`<[`User`](../interfaces/User.md), `Maybe`<[`ProviderData`](../interfaces/ProviderData.md)\>\>

#### Defined in

[src/lenses/User.ts:50](https://github.com/jonlaing/mutty-utils/blob/d7d0eb8/src/lenses/User.ts#L50)

___

### flagType

• `Const` **flagType**: `Lens`<`any`, `Maybe`<[`FlagType`](../modules.md#flagtype)\>\>

#### Defined in

[src/lenses/Flag.ts:9](https://github.com/jonlaing/mutty-utils/blob/d7d0eb8/src/lenses/Flag.ts#L9)

___

### friendshipID

• `Const` **friendshipID**: `Lens`<`any`, `Maybe`<`string`\>\>

#### Defined in

[src/lenses/Friendship.ts:6](https://github.com/jonlaing/mutty-utils/blob/d7d0eb8/src/lenses/Friendship.ts#L6)

___

### from

• `Const` **from**: `Lens`<`any`, `Maybe`<`string`[]\>\>

#### Defined in

[src/lenses/Notification.ts:9](https://github.com/jonlaing/mutty-utils/blob/d7d0eb8/src/lenses/Notification.ts#L9)

___

### fullName

• `Const` **fullName**: `Lens`<`any`, `Maybe`<`string`\>\>

#### Defined in

[src/lenses/Dog.ts:4](https://github.com/jonlaing/mutty-utils/blob/d7d0eb8/src/lenses/Dog.ts#L4)

___

### geopoint

• `Const` **geopoint**: `Lens`<`any`, `Maybe`<[`Geopoint`](../interfaces/Geopoint.md)\>\>

#### Defined in

[src/lenses/Location.ts:7](https://github.com/jonlaing/mutty-utils/blob/d7d0eb8/src/lenses/Location.ts#L7)

___

### id

• `Const` **id**: `Lens`<`any`, `Maybe`<`string`\>\>

#### Defined in

[src/lenses/Base.ts:10](https://github.com/jonlaing/mutty-utils/blob/d7d0eb8/src/lenses/Base.ts#L10)

___

### image

• `Const` **image**: `Lens`<`any`, `Maybe`<`string`\>\>

#### Defined in

[src/lenses/Base.ts:23](https://github.com/jonlaing/mutty-utils/blob/d7d0eb8/src/lenses/Base.ts#L23)

___

### isNewUser

• `Const` **isNewUser**: `Lens`<[`User`](../interfaces/User.md), `Maybe`<`boolean`\>\>

#### Defined in

[src/lenses/User.ts:19](https://github.com/jonlaing/mutty-utils/blob/d7d0eb8/src/lenses/User.ts#L19)

___

### latitude

• `Const` **latitude**: `Lens`<`any`, `Maybe`<`number`\>\>

#### Defined in

[src/lenses/Location.ts:12](https://github.com/jonlaing/mutty-utils/blob/d7d0eb8/src/lenses/Location.ts#L12)

___

### likeType

• `Const` **likeType**: `Lens`<`any`, `Maybe`<[`LikeableType`](../modules.md#likeabletype)\>\>

#### Defined in

[src/lenses/Like.ts:8](https://github.com/jonlaing/mutty-utils/blob/d7d0eb8/src/lenses/Like.ts#L8)

___

### liked

• `Const` **liked**: `Lens`<`any`, `Maybe`<`boolean`\>\>

#### Defined in

[src/lenses/Like.ts:11](https://github.com/jonlaing/mutty-utils/blob/d7d0eb8/src/lenses/Like.ts#L11)

___

### likes

• `Const` **likes**: `Lens`<`any`, `Maybe`<`number`\>\>

#### Defined in

[src/lenses/Like.ts:10](https://github.com/jonlaing/mutty-utils/blob/d7d0eb8/src/lenses/Like.ts#L10)

___

### location

• `Const` **location**: `Lens`<`any`, `Maybe`<[`Location`](../interfaces/Location.md)\>\>

#### Defined in

[src/lenses/Location.ts:10](https://github.com/jonlaing/mutty-utils/blob/d7d0eb8/src/lenses/Location.ts#L10)

___

### locationIDs

• `Const` **locationIDs**: `Lens`<`any`, `Maybe`<`string`[]\>\>

#### Defined in

[src/lenses/Bulletin.ts:10](https://github.com/jonlaing/mutty-utils/blob/d7d0eb8/src/lenses/Bulletin.ts#L10)

___

### longitude

• `Const` **longitude**: `Lens`<`any`, `Maybe`<`number`\>\>

#### Defined in

[src/lenses/Location.ts:19](https://github.com/jonlaing/mutty-utils/blob/d7d0eb8/src/lenses/Location.ts#L19)

___

### missing

• `Const` **missing**: `Lens`<`any`, `Maybe`<`string`\>\>

#### Defined in

[src/lenses/Dog.ts:10](https://github.com/jonlaing/mutty-utils/blob/d7d0eb8/src/lenses/Dog.ts#L10)

___

### momentLens

• `Const` **momentLens**: `Lens`<`Maybe`<`number`\>, `Maybe`<`Moment`\>\>

#### Defined in

[src/lenses/Timestamp.ts:5](https://github.com/jonlaing/mutty-utils/blob/d7d0eb8/src/lenses/Timestamp.ts#L5)

___

### monthBorn

• `Const` **monthBorn**: `Lens`<`any`, `Maybe`<`number`\>\>

#### Defined in

[src/lenses/Dog.ts:8](https://github.com/jonlaing/mutty-utils/blob/d7d0eb8/src/lenses/Dog.ts#L8)

___

### multiFactor

• `Const` **multiFactor**: `Lens`<[`User`](../interfaces/User.md), `Maybe`<[`MultiFactor`](../interfaces/MultiFactor.md)\>\>

#### Defined in

[src/lenses/User.ts:31](https://github.com/jonlaing/mutty-utils/blob/d7d0eb8/src/lenses/User.ts#L31)

___

### name

• `Const` **name**: `Lens`<`any`, `Maybe`<`string`\>\>

#### Defined in

[src/lenses/Location.ts:8](https://github.com/jonlaing/mutty-utils/blob/d7d0eb8/src/lenses/Location.ts#L8)

___

### operationType

• `Const` **operationType**: `Lens`<`any`, `Maybe`<`string`\>\>

#### Defined in

[src/lenses/User.ts:16](https://github.com/jonlaing/mutty-utils/blob/d7d0eb8/src/lenses/User.ts#L16)

___

### other

• `Const` **other**: `Lens`<`any`, `Maybe`<`string`\>\>

#### Defined in

[src/lenses/Bulletin.ts:34](https://github.com/jonlaing/mutty-utils/blob/d7d0eb8/src/lenses/Bulletin.ts#L34)

___

### pausePushNotifs

• `Const` **pausePushNotifs**: `Lens`<`any`, `Maybe`<`boolean`\>\>

#### Defined in

[src/lenses/Human.ts:10](https://github.com/jonlaing/mutty-utils/blob/d7d0eb8/src/lenses/Human.ts#L10)

___

### phone

• `Const` **phone**: `Lens`<`any`, `Maybe`<`string`\>\>

#### Defined in

[src/lenses/Bulletin.ts:26](https://github.com/jonlaing/mutty-utils/blob/d7d0eb8/src/lenses/Bulletin.ts#L26)

___

### phoneNumber

• `Const` **phoneNumber**: `Lens`<`any`, `Maybe`<`string`\>\>

#### Defined in

[src/lenses/Human.ts:8](https://github.com/jonlaing/mutty-utils/blob/d7d0eb8/src/lenses/Human.ts#L8)

___

### pics

• `Const` **pics**: `Lens`<`any`, `Maybe`<`string`[]\>\>

#### Defined in

[src/lenses/Dog.ts:5](https://github.com/jonlaing/mutty-utils/blob/d7d0eb8/src/lenses/Dog.ts#L5)

___

### providerData

• `Const` **providerData**: `Lens`<[`User`](../interfaces/User.md), `Maybe`<[`ProviderData`](../interfaces/ProviderData.md)[]\>\>

#### Defined in

[src/lenses/User.ts:43](https://github.com/jonlaing/mutty-utils/blob/d7d0eb8/src/lenses/User.ts#L43)

___

### providerID

• `Const` **providerID**: `Lens`<[`User`](../interfaces/User.md), `Maybe`<`string`\>\>

#### Defined in

[src/lenses/User.ts:25](https://github.com/jonlaing/mutty-utils/blob/d7d0eb8/src/lenses/User.ts#L25)

___

### pushToken

• `Const` **pushToken**: `Lens`<`any`, `Maybe`<`string`\>\>

#### Defined in

[src/lenses/Human.ts:9](https://github.com/jonlaing/mutty-utils/blob/d7d0eb8/src/lenses/Human.ts#L9)

___

### read

• `Const` **read**: `Lens`<`any`, `Maybe`<`boolean`\>\>

#### Defined in

[src/lenses/Notification.ts:12](https://github.com/jonlaing/mutty-utils/blob/d7d0eb8/src/lenses/Notification.ts#L12)

___

### recentLocation

• `Const` **recentLocation**: `Lens`<`any`, `Maybe`<`string`\>\>

#### Defined in

[src/lenses/Human.ts:12](https://github.com/jonlaing/mutty-utils/blob/d7d0eb8/src/lenses/Human.ts#L12)

___

### recoveryEmail

• `Const` **recoveryEmail**: `Lens`<`any`, `Maybe`<`string`\>\>

#### Defined in

[src/lenses/Human.ts:11](https://github.com/jonlaing/mutty-utils/blob/d7d0eb8/src/lenses/Human.ts#L11)

___

### relType

• `Const` **relType**: `Lens`<`any`, `Maybe`<[`RelationshipType`](../modules.md#relationshiptype)\>\>

#### Defined in

[src/lenses/Relationship.ts:4](https://github.com/jonlaing/mutty-utils/blob/d7d0eb8/src/lenses/Relationship.ts#L4)

___

### relationship

• `Const` **relationship**: `Lens`<`any`, `Maybe`<`string` \| [`Relationship`](../interfaces/Relationship.md)\>\>

#### Defined in

[src/lenses/Dog.ts:11](https://github.com/jonlaing/mutty-utils/blob/d7d0eb8/src/lenses/Dog.ts#L11)

___

### status

• `Const` **status**: `Lens`<`any`, `Maybe`<[`FriendshipStatus`](../modules.md#friendshipstatus)\>\>

#### Defined in

[src/lenses/Friendship.ts:7](https://github.com/jonlaing/mutty-utils/blob/d7d0eb8/src/lenses/Friendship.ts#L7)

___

### stsTokenManager

• `Const` **stsTokenManager**: `Lens`<[`User`](../interfaces/User.md), `Maybe`<[`STSTokenManager`](../interfaces/STSTokenManager.md)\>\>

#### Defined in

[src/lenses/User.ts:56](https://github.com/jonlaing/mutty-utils/blob/d7d0eb8/src/lenses/User.ts#L56)

___

### summary

• `Const` **summary**: `Lens`<`any`, `Maybe`<`string`\>\>

#### Defined in

[src/lenses/Base.ts:21](https://github.com/jonlaing/mutty-utils/blob/d7d0eb8/src/lenses/Base.ts#L21)

___

### tags

• `Const` **tags**: `Lens`<`any`, `Maybe`<`Record`<`string`, `string`\>\>\>

#### Defined in

[src/lenses/Base.ts:16](https://github.com/jonlaing/mutty-utils/blob/d7d0eb8/src/lenses/Base.ts#L16)

___

### thumbnail

• `Const` **thumbnail**: `Lens`<`any`, `Maybe`<`string`\>\>

#### Defined in

[src/lenses/Post.ts:11](https://github.com/jonlaing/mutty-utils/blob/d7d0eb8/src/lenses/Post.ts#L11)

___

### title

• `Const` **title**: `Lens`<`any`, `Maybe`<`string`\>\>

#### Defined in

[src/lenses/Bulletin.ts:11](https://github.com/jonlaing/mutty-utils/blob/d7d0eb8/src/lenses/Bulletin.ts#L11)

___

### to

• `Const` **to**: `Lens`<`any`, `Maybe`<`string`\>\>

#### Defined in

[src/lenses/Notification.ts:10](https://github.com/jonlaing/mutty-utils/blob/d7d0eb8/src/lenses/Notification.ts#L10)

___

### uri

• `Const` **uri**: `Lens`<`any`, `Maybe`<`string`\>\>

#### Defined in

[src/lenses/Post.ts:10](https://github.com/jonlaing/mutty-utils/blob/d7d0eb8/src/lenses/Post.ts#L10)

___

### userProp

• `Const` **userProp**: `Lens`<`any`, `Maybe`<`string`\>\>

#### Defined in

[src/lenses/Base.ts:19](https://github.com/jonlaing/mutty-utils/blob/d7d0eb8/src/lenses/Base.ts#L19)

___

### userRecord

• `Const` **userRecord**: `Lens`<`any`, `Maybe`<[`UserUser`](../interfaces/UserUser.md)\>\>

#### Defined in

[src/lenses/User.ts:17](https://github.com/jonlaing/mutty-utils/blob/d7d0eb8/src/lenses/User.ts#L17)

___

### username

• `Const` **username**: `Lens`<`any`, `Maybe`<`string`\>\>

#### Defined in

[src/lenses/Human.ts:7](https://github.com/jonlaing/mutty-utils/blob/d7d0eb8/src/lenses/Human.ts#L7)

___

### version

• `Const` **version**: `Lens`<`any`, `Maybe`<`number`\>\>

#### Defined in

[src/lenses/Base.ts:14](https://github.com/jonlaing/mutty-utils/blob/d7d0eb8/src/lenses/Base.ts#L14)

___

### video

• `Const` **video**: `Lens`<`any`, `Maybe`<[`Video`](../interfaces/Video.md)\>\>

#### Defined in

[src/lenses/Post.ts:9](https://github.com/jonlaing/mutty-utils/blob/d7d0eb8/src/lenses/Post.ts#L9)

___

### videoThumbnail

• `Const` **videoThumbnail**: `Lens`<`any`, `Maybe`<`string`\>\>

#### Defined in

[src/lenses/Post.ts:17](https://github.com/jonlaing/mutty-utils/blob/d7d0eb8/src/lenses/Post.ts#L17)

___

### videoUri

• `Const` **videoUri**: `Lens`<`any`, `Maybe`<`string`\>\>

#### Defined in

[src/lenses/Post.ts:12](https://github.com/jonlaing/mutty-utils/blob/d7d0eb8/src/lenses/Post.ts#L12)

___

### yearBorn

• `Const` **yearBorn**: `Lens`<`any`, `Maybe`<`number`\>\>

#### Defined in

[src/lenses/Dog.ts:7](https://github.com/jonlaing/mutty-utils/blob/d7d0eb8/src/lenses/Dog.ts#L7)

## Functions

### BulletinLensHelper

▸ **BulletinLensHelper**(`b`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `Maybe`<[`MultiBulletin`](../modules.md#multibulletin)\> |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `canComment` | () => `boolean` |
| `canMessage` | () => `boolean` |
| `contentId` | () => `string` |
| `date` | () => `number` |
| `description` | () => `string` |
| `dogFound` | () => `boolean` |
| `endDate` | () => `number` |
| `image` | () => `string` |
| `likes` | () => `number` |
| `locationIDs` | () => `string`[] |
| `tags` | () => `Record`<`string`, `string`\> |
| `title` | () => `string` |
| `user` | () => `string` |

#### Defined in

[src/lenses/Bulletin.ts:39](https://github.com/jonlaing/mutty-utils/blob/d7d0eb8/src/lenses/Bulletin.ts#L39)

___

### safeLens

▸ **safeLens**<`T`, `U`\>(`fallback`, `f`): `Lens`<`T`, `U`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Maybe`<`any`, `T`\> |
| `U` | `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fallback` | `U` |
| `f` | `Lens`<`T`, `Maybe`<`U`\>\> |

#### Returns

`Lens`<`T`, `U`\>

#### Defined in

[src/lenses/Base.ts:5](https://github.com/jonlaing/mutty-utils/blob/d7d0eb8/src/lenses/Base.ts#L5)
