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
- [CommentLensHelper](lenses.md#commentlenshelper)
- [DogLensHelper](lenses.md#doglenshelper)
- [FlagLensHelper](lenses.md#flaglenshelper)
- [FriendshipLensHelper](lenses.md#friendshiplenshelper)
- [HumanLensHelper](lenses.md#humanlenshelper)
- [LikeLensHelper](lenses.md#likelenshelper)
- [MultiBulletinLensHelper](lenses.md#multibulletinlenshelper)
- [MultiPostLensHelper](lenses.md#multipostlenshelper)
- [NotificationLensHelper](lenses.md#notificationlenshelper)
- [PostLensHelper](lenses.md#postlenshelper)
- [RelationshipLensHelper](lenses.md#relationshiplenshelper)
- [UserLensHelper](lenses.md#userlenshelper)
- [safeLens](lenses.md#safelens)

## Variables

### actionType

• `Const` **actionType**: `Lens`<`any`, `Maybe`<[`ActionType`](../modules.md#actiontype)\>\>

#### Defined in

[src/lenses/Notification.ts:17](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/lenses/Notification.ts#L17)

___

### additionalUserInfo

• `Const` **additionalUserInfo**: `Lens`<`any`, `Maybe`<[`AdditionalUserInfo`](../interfaces/AdditionalUserInfo.md)\>\>

#### Defined in

[src/lenses/User.ts:14](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/lenses/User.ts#L14)

___

### author

• `Const` **author**: `Lens`<`any`, `Maybe`<`string`\>\>

#### Defined in

[src/lenses/Base.ts:23](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/lenses/Base.ts#L23)

___

### block

• `Const` **block**: `Lens`<[`Friendship`](../interfaces/Friendship.md), `Maybe`<`string`\>\>

#### Defined in

[src/lenses/Friendship.ts:17](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/lenses/Friendship.ts#L17)

___

### breed

• `Const` **breed**: `Lens`<`any`, `Maybe`<`string`\>\>

#### Defined in

[src/lenses/Dog.ts:7](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/lenses/Dog.ts#L7)

___

### bulletinType

• `Const` **bulletinType**: `Lens`<`any`, `Maybe`<[`BulletinType`](../modules.md#bulletintype)\>\>

#### Defined in

[src/lenses/Bulletin.ts:22](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/lenses/Bulletin.ts#L22)

___

### canComment

• `Const` **canComment**: `Lens`<`any`, `Maybe`<`boolean`\>\>

#### Defined in

[src/lenses/Bulletin.ts:20](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/lenses/Bulletin.ts#L20)

___

### canMessage

• `Const` **canMessage**: `Lens`<`any`, `Maybe`<`boolean`\>\>

#### Defined in

[src/lenses/Bulletin.ts:21](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/lenses/Bulletin.ts#L21)

___

### comments

• `Const` **comments**: `Lens`<`any`, `Maybe`<`number`\>\>

#### Defined in

[src/lenses/Comment.ts:7](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/lenses/Comment.ts#L7)

___

### contact

• `Const` **contact**: `Lens`<`any`, `Maybe`<[`Contact`](../interfaces/Contact.md)\>\>

#### Defined in

[src/lenses/Bulletin.ts:26](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/lenses/Bulletin.ts#L26)

___

### containerType

• `Const` **containerType**: `Lens`<`any`, `Maybe`<`string`\>\>

#### Defined in

[src/lenses/TypedContainer.ts:5](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/lenses/TypedContainer.ts#L5)

___

### content

• `Const` **content**: `Lens`<`any`, `Maybe`<[`MultiBulletin`](../modules.md#multibulletin)\> \| `Maybe`<[`MultiPost`](../modules.md#multipost)\>\>

#### Defined in

[src/lenses/TypedContainer.ts:6](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/lenses/TypedContainer.ts#L6)

___

### created

• `Const` **created**: `Lens`<`any`, `Maybe`<`number`\>\>

#### Defined in

[src/lenses/Base.ts:12](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/lenses/Base.ts#L12)

___

### createdMoment

• `Const` **createdMoment**: `Lens`<`unknown`, `unknown`\>

#### Defined in

[src/lenses/Base.ts:13](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/lenses/Base.ts#L13)

___

### credential

• `Const` **credential**: `Lens`<`any`, `Maybe`<`any`\>\>

#### Defined in

[src/lenses/User.ts:16](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/lenses/User.ts#L16)

___

### date

• `Const` **date**: `Lens`<`any`, `Maybe`<`number`\>\>

#### Defined in

[src/lenses/Bulletin.ts:23](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/lenses/Bulletin.ts#L23)

___

### dayBorn

• `Const` **dayBorn**: `Lens`<`any`, `Maybe`<`number`\>\>

#### Defined in

[src/lenses/Dog.ts:10](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/lenses/Dog.ts#L10)

___

### description

• `Const` **description**: `Lens`<`any`, `Maybe`<`string`\>\>

#### Defined in

[src/lenses/Bulletin.ts:19](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/lenses/Bulletin.ts#L19)

___

### dog

• `Const` **dog**: `Lens`<`any`, `Maybe`<`string` \| [`Dog`](../interfaces/Dog.md)\>\>

#### Defined in

[src/lenses/Base.ts:19](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/lenses/Base.ts#L19)

___

### dog1

• `Const` **dog1**: `Lens`<`any`, `Maybe`<`string` \| [`Dog`](../interfaces/Dog.md)\>\>

#### Defined in

[src/lenses/Friendship.ts:11](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/lenses/Friendship.ts#L11)

___

### dog2

• `Const` **dog2**: `Lens`<`any`, `Maybe`<`string` \| [`Dog`](../interfaces/Dog.md)\>\>

#### Defined in

[src/lenses/Friendship.ts:12](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/lenses/Friendship.ts#L12)

___

### dogFound

• `Const` **dogFound**: `Lens`<`any`, `Maybe`<`boolean`\>\>

#### Defined in

[src/lenses/Bulletin.ts:25](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/lenses/Bulletin.ts#L25)

___

### dogs

• `Const` **dogs**: `Lens`<`any`, `Maybe`<[`Dog`](../interfaces/Dog.md)[]\>\>

#### Defined in

[src/lenses/Comment.ts:5](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/lenses/Comment.ts#L5)

___

### email

• `Const` **email**: `Lens`<`any`, `Maybe`<`string`\>\>

#### Defined in

[src/lenses/Bulletin.ts:37](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/lenses/Bulletin.ts#L37)

___

### endDate

• `Const` **endDate**: `Lens`<`any`, `Maybe`<`number`\>\>

#### Defined in

[src/lenses/Bulletin.ts:24](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/lenses/Bulletin.ts#L24)

___

### enrolledFactors

• `Const` **enrolledFactors**: `Lens`<[`User`](../interfaces/User.md), `Maybe`<`string`[]\>\>

#### Defined in

[src/lenses/User.ts:38](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/lenses/User.ts#L38)

___

### firstProviderData

• `Const` **firstProviderData**: `Lens`<[`User`](../interfaces/User.md), `Maybe`<[`ProviderData`](../interfaces/ProviderData.md)\>\>

#### Defined in

[src/lenses/User.ts:51](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/lenses/User.ts#L51)

___

### flagType

• `Const` **flagType**: `Lens`<`any`, `Maybe`<[`FlagType`](../modules.md#flagtype)\>\>

#### Defined in

[src/lenses/Flag.ts:10](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/lenses/Flag.ts#L10)

___

### friendshipID

• `Const` **friendshipID**: `Lens`<`any`, `Maybe`<`string`\>\>

#### Defined in

[src/lenses/Friendship.ts:13](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/lenses/Friendship.ts#L13)

___

### from

• `Const` **from**: `Lens`<`any`, `Maybe`<`string`[]\>\>

#### Defined in

[src/lenses/Notification.ts:15](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/lenses/Notification.ts#L15)

___

### fullName

• `Const` **fullName**: `Lens`<`any`, `Maybe`<`string`\>\>

#### Defined in

[src/lenses/Dog.ts:5](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/lenses/Dog.ts#L5)

___

### geopoint

• `Const` **geopoint**: `Lens`<`any`, `Maybe`<[`Geopoint`](../interfaces/Geopoint.md)\>\>

#### Defined in

[src/lenses/Location.ts:8](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/lenses/Location.ts#L8)

___

### id

• `Const` **id**: `Lens`<`any`, `Maybe`<`string`\>\>

#### Defined in

[src/lenses/Base.ts:11](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/lenses/Base.ts#L11)

___

### image

• `Const` **image**: `Lens`<`any`, `Maybe`<`string`\>\>

#### Defined in

[src/lenses/Base.ts:24](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/lenses/Base.ts#L24)

___

### isNewUser

• `Const` **isNewUser**: `Lens`<[`User`](../interfaces/User.md), `Maybe`<`boolean`\>\>

#### Defined in

[src/lenses/User.ts:20](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/lenses/User.ts#L20)

___

### latitude

• `Const` **latitude**: `Lens`<`any`, `Maybe`<`number`\>\>

#### Defined in

[src/lenses/Location.ts:13](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/lenses/Location.ts#L13)

___

### likeType

• `Const` **likeType**: `Lens`<`any`, `Maybe`<[`LikeableType`](../modules.md#likeabletype)\>\>

#### Defined in

[src/lenses/Like.ts:9](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/lenses/Like.ts#L9)

___

### liked

• `Const` **liked**: `Lens`<`any`, `Maybe`<`boolean`\>\>

#### Defined in

[src/lenses/Like.ts:12](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/lenses/Like.ts#L12)

___

### likes

• `Const` **likes**: `Lens`<`any`, `Maybe`<`number`\>\>

#### Defined in

[src/lenses/Like.ts:11](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/lenses/Like.ts#L11)

___

### location

• `Const` **location**: `Lens`<`any`, `Maybe`<[`Location`](../interfaces/Location.md)\>\>

#### Defined in

[src/lenses/Location.ts:11](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/lenses/Location.ts#L11)

___

### locationIDs

• `Const` **locationIDs**: `Lens`<`any`, `Maybe`<`string`[]\>\>

#### Defined in

[src/lenses/Bulletin.ts:17](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/lenses/Bulletin.ts#L17)

___

### longitude

• `Const` **longitude**: `Lens`<`any`, `Maybe`<`number`\>\>

#### Defined in

[src/lenses/Location.ts:20](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/lenses/Location.ts#L20)

___

### missing

• `Const` **missing**: `Lens`<`any`, `Maybe`<`string`\>\>

#### Defined in

[src/lenses/Dog.ts:11](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/lenses/Dog.ts#L11)

___

### momentLens

• `Const` **momentLens**: `Lens`<`Maybe`<`number`\>, `Maybe`<`Moment`\>\>

#### Defined in

[src/lenses/Timestamp.ts:6](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/lenses/Timestamp.ts#L6)

___

### monthBorn

• `Const` **monthBorn**: `Lens`<`any`, `Maybe`<`number`\>\>

#### Defined in

[src/lenses/Dog.ts:9](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/lenses/Dog.ts#L9)

___

### multiFactor

• `Const` **multiFactor**: `Lens`<[`User`](../interfaces/User.md), `Maybe`<[`MultiFactor`](../interfaces/MultiFactor.md)\>\>

#### Defined in

[src/lenses/User.ts:32](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/lenses/User.ts#L32)

___

### name

• `Const` **name**: `Lens`<`any`, `Maybe`<`string`\>\>

#### Defined in

[src/lenses/Location.ts:9](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/lenses/Location.ts#L9)

___

### operationType

• `Const` **operationType**: `Lens`<`any`, `Maybe`<`string`\>\>

#### Defined in

[src/lenses/User.ts:17](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/lenses/User.ts#L17)

___

### other

• `Const` **other**: `Lens`<`any`, `Maybe`<`string`\>\>

#### Defined in

[src/lenses/Bulletin.ts:41](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/lenses/Bulletin.ts#L41)

___

### pausePushNotifs

• `Const` **pausePushNotifs**: `Lens`<`any`, `Maybe`<`boolean`\>\>

#### Defined in

[src/lenses/Human.ts:11](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/lenses/Human.ts#L11)

___

### phone

• `Const` **phone**: `Lens`<`any`, `Maybe`<`string`\>\>

#### Defined in

[src/lenses/Bulletin.ts:33](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/lenses/Bulletin.ts#L33)

___

### phoneNumber

• `Const` **phoneNumber**: `Lens`<`any`, `Maybe`<`string`\>\>

#### Defined in

[src/lenses/Human.ts:9](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/lenses/Human.ts#L9)

___

### pics

• `Const` **pics**: `Lens`<`any`, `Maybe`<`string`[]\>\>

#### Defined in

[src/lenses/Dog.ts:6](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/lenses/Dog.ts#L6)

___

### providerData

• `Const` **providerData**: `Lens`<[`User`](../interfaces/User.md), `Maybe`<[`ProviderData`](../interfaces/ProviderData.md)[]\>\>

#### Defined in

[src/lenses/User.ts:44](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/lenses/User.ts#L44)

___

### providerID

• `Const` **providerID**: `Lens`<[`User`](../interfaces/User.md), `Maybe`<`string`\>\>

#### Defined in

[src/lenses/User.ts:26](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/lenses/User.ts#L26)

___

### pushToken

• `Const` **pushToken**: `Lens`<`any`, `Maybe`<`string`\>\>

#### Defined in

[src/lenses/Human.ts:10](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/lenses/Human.ts#L10)

___

### read

• `Const` **read**: `Lens`<`any`, `Maybe`<`boolean`\>\>

#### Defined in

[src/lenses/Notification.ts:18](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/lenses/Notification.ts#L18)

___

### recentLocation

• `Const` **recentLocation**: `Lens`<`any`, `Maybe`<`string`\>\>

#### Defined in

[src/lenses/Human.ts:13](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/lenses/Human.ts#L13)

___

### recoveryEmail

• `Const` **recoveryEmail**: `Lens`<`any`, `Maybe`<`string`\>\>

#### Defined in

[src/lenses/Human.ts:12](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/lenses/Human.ts#L12)

___

### relType

• `Const` **relType**: `Lens`<`any`, `Maybe`<[`RelationshipType`](../modules.md#relationshiptype)\>\>

#### Defined in

[src/lenses/Relationship.ts:5](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/lenses/Relationship.ts#L5)

___

### relationship

• `Const` **relationship**: `Lens`<`any`, `Maybe`<`string` \| [`Relationship`](../interfaces/Relationship.md)\>\>

#### Defined in

[src/lenses/Dog.ts:12](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/lenses/Dog.ts#L12)

___

### status

• `Const` **status**: `Lens`<`any`, `Maybe`<[`FriendshipStatus`](../modules.md#friendshipstatus)\>\>

#### Defined in

[src/lenses/Friendship.ts:14](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/lenses/Friendship.ts#L14)

___

### stsTokenManager

• `Const` **stsTokenManager**: `Lens`<[`User`](../interfaces/User.md), `Maybe`<[`STSTokenManager`](../interfaces/STSTokenManager.md)\>\>

#### Defined in

[src/lenses/User.ts:57](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/lenses/User.ts#L57)

___

### summary

• `Const` **summary**: `Lens`<`any`, `Maybe`<`string`\>\>

#### Defined in

[src/lenses/Base.ts:22](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/lenses/Base.ts#L22)

___

### tags

• `Const` **tags**: `Lens`<`any`, `Maybe`<`Record`<`string`, `string`\>\>\>

#### Defined in

[src/lenses/Base.ts:17](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/lenses/Base.ts#L17)

___

### thumbnail

• `Const` **thumbnail**: `Lens`<`any`, `Maybe`<`string`\>\>

#### Defined in

[src/lenses/Post.ts:19](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/lenses/Post.ts#L19)

___

### title

• `Const` **title**: `Lens`<`any`, `Maybe`<`string`\>\>

#### Defined in

[src/lenses/Bulletin.ts:18](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/lenses/Bulletin.ts#L18)

___

### to

• `Const` **to**: `Lens`<`any`, `Maybe`<`string`\>\>

#### Defined in

[src/lenses/Notification.ts:16](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/lenses/Notification.ts#L16)

___

### uri

• `Const` **uri**: `Lens`<`any`, `Maybe`<`string`\>\>

#### Defined in

[src/lenses/Post.ts:18](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/lenses/Post.ts#L18)

___

### userProp

• `Const` **userProp**: `Lens`<`any`, `Maybe`<`string`\>\>

#### Defined in

[src/lenses/Base.ts:20](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/lenses/Base.ts#L20)

___

### userRecord

• `Const` **userRecord**: `Lens`<`any`, `Maybe`<[`UserUser`](../interfaces/UserUser.md)\>\>

#### Defined in

[src/lenses/User.ts:18](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/lenses/User.ts#L18)

___

### username

• `Const` **username**: `Lens`<`any`, `Maybe`<`string`\>\>

#### Defined in

[src/lenses/Human.ts:8](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/lenses/Human.ts#L8)

___

### version

• `Const` **version**: `Lens`<`any`, `Maybe`<`number`\>\>

#### Defined in

[src/lenses/Base.ts:15](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/lenses/Base.ts#L15)

___

### video

• `Const` **video**: `Lens`<`any`, `Maybe`<[`Video`](../interfaces/Video.md)\>\>

#### Defined in

[src/lenses/Post.ts:17](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/lenses/Post.ts#L17)

___

### videoThumbnail

• `Const` **videoThumbnail**: `Lens`<`any`, `Maybe`<`string`\>\>

#### Defined in

[src/lenses/Post.ts:25](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/lenses/Post.ts#L25)

___

### videoUri

• `Const` **videoUri**: `Lens`<`any`, `Maybe`<`string`\>\>

#### Defined in

[src/lenses/Post.ts:20](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/lenses/Post.ts#L20)

___

### yearBorn

• `Const` **yearBorn**: `Lens`<`any`, `Maybe`<`number`\>\>

#### Defined in

[src/lenses/Dog.ts:8](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/lenses/Dog.ts#L8)

## Functions

### BulletinLensHelper

▸ **BulletinLensHelper**(`obj`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `Maybe`<[`Bulletin`](../interfaces/Bulletin.md)\> |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `bulletinType` | () => `string` |
| `canComment` | () => `boolean` |
| `canMessage` | () => `boolean` |
| `contact` | () => { phone: () =\> string; email: () =\> string; other: () =\> string; } |
| `contentId` | () => `string` |
| `created` | () => `number` |
| `date` | () => `number` |
| `description` | () => `string` |
| `dog` | () => `string` |
| `dogFound` | () => `boolean` |
| `endDate` | () => `number` |
| `id` | () => `string` |
| `image` | () => `string` |
| `likes` | () => `number` |
| `location` | () => { geopoint: () =\> { latitude: () =\> number; longitude: () =\> number; }; name: () =\> Required<string \| null\>; } |
| `locationIDs` | () => `string`[] |
| `tags` | () => { [x: string]: () =\> string; } |
| `title` | () => `string` |
| `user` | () => `string` |

#### Defined in

[src/lenses/Bulletin.ts:46](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/lenses/Bulletin.ts#L46)

___

### CommentLensHelper

▸ **CommentLensHelper**(`obj`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `Maybe`<[`Comment`](../interfaces/Comment.md)\> |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `content` | () => `string` |
| `created` | () => `number` |
| `dogs` | () => `string`[] |
| `id` | () => `string` |
| `likes` | () => `number` |
| `summary` | () => `string` |
| `tags` | () => { [x: string]: () =\> string; } |
| `user` | () => `string` |

#### Defined in

[src/lenses/Comment.ts:13](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/lenses/Comment.ts#L13)

___

### DogLensHelper

▸ **DogLensHelper**(`obj`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `Maybe`<[`Dog`](../interfaces/Dog.md)\> |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `breed` | () => `string` |
| `created` | () => `number` |
| `dayBorn` | () => `number` |
| `fullName` | () => `string` |
| `id` | () => `string` |
| `missing` | () => `string` |
| `monthBorn` | () => `number` |
| `pics` | () => `string`[] |
| `relationship` | () => `string` |
| `summary` | () => `string` |
| `verified` | () => `boolean` |
| `yearBorn` | () => `number` |

#### Defined in

[src/lenses/Dog.ts:14](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/lenses/Dog.ts#L14)

___

### FlagLensHelper

▸ **FlagLensHelper**(`obj`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `Maybe`<[`Flag`](../interfaces/Flag.md)\> |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `contentId` | () => `string` |
| `contentType` | () => `string` |
| `created` | () => `number` |
| `id` | () => `string` |
| `type` | () => `string` |
| `userId` | () => `string` |

#### Defined in

[src/lenses/Flag.ts:12](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/lenses/Flag.ts#L12)

___

### FriendshipLensHelper

▸ **FriendshipLensHelper**(`obj`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `Maybe`<[`Friendship`](../interfaces/Friendship.md)\> |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `author` | () => `string` |
| `block` | () => `string` |
| `created` | () => `number` |
| `dog1` | () => `string` |
| `dog2` | () => `string` |
| `friendshipId` | () => `string` |
| `id` | () => `string` |
| `status` | () => `string` |

#### Defined in

[src/lenses/Friendship.ts:29](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/lenses/Friendship.ts#L29)

___

### HumanLensHelper

▸ **HumanLensHelper**(`obj`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `Maybe`<[`Human`](../interfaces/Human.md)\> |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `created` | () => `number` |
| `id` | () => `string` |
| `pausePushNotifs` | () => `boolean` |
| `phoneNumber` | () => `string` |
| `pushToken` | () => `string` |
| `recentLocation` | () => `string` |
| `recoveryEmail` | () => `string` |
| `relationship` | () => `string` |
| `userid` | () => `string` |
| `username` | () => `string` |

#### Defined in

[src/lenses/Human.ts:15](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/lenses/Human.ts#L15)

___

### LikeLensHelper

▸ **LikeLensHelper**(`obj`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `Maybe`<[`Like`](../interfaces/Like.md)\> |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `content` | () => `string` |
| `created` | () => `number` |
| `id` | () => `string` |
| `type` | () => `string` |
| `user` | () => `string` |

#### Defined in

[src/lenses/Like.ts:14](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/lenses/Like.ts#L14)

___

### MultiBulletinLensHelper

▸ **MultiBulletinLensHelper**(`obj`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `Maybe`<[`MultiBulletin`](../modules.md#multibulletin)\> |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `bulletinType` | () => `string` |
| `canComment` | () => `boolean` |
| `canMessage` | () => `boolean` |
| `comments` | () => `number` |
| `contact` | () => { phone: () =\> string; email: () =\> string; other: () =\> string; } |
| `contentId` | () => `string` |
| `created` | () => `number` |
| `date` | () => `number` |
| `description` | () => `string` |
| `dog` | () => { fullName: () =\> string; pics: () =\> string[]; breed: () =\> string; yearBorn: () =\> number; monthBorn: () =\> number; dayBorn: () =\> number; summary: () =\> string; missing: () =\> string; verified: () =\> boolean; id: () =\> string; created: () =\> number; relationship: () =\> string; } |
| `dogFound` | () => `boolean` |
| `dogs` | () => { fullName: () =\> string; pics: () =\> string[]; breed: () =\> Required<string \| undefined\>; yearBorn: () =\> Required<number \| undefined\>; monthBorn: () =\> Required<number \| undefined\>; ... 6 more ...; relationship: () =\> Required<...\>; }[] |
| `endDate` | () => `number` |
| `id` | () => `string` |
| `image` | () => `string` |
| `liked` | () => `boolean` |
| `likes` | () => `number` |
| `location` | () => { geopoint: () =\> { latitude: () =\> number; longitude: () =\> number; }; name: () =\> Required<string \| null\>; } |
| `locationIDs` | () => `string`[] |
| `tags` | () => { [x: string]: () =\> string; } |
| `title` | () => `string` |
| `user` | () => `string` |

#### Defined in

[src/lenses/Bulletin.ts:47](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/lenses/Bulletin.ts#L47)

___

### MultiPostLensHelper

▸ **MultiPostLensHelper**(`obj`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `Maybe`<[`MultiPost`](../modules.md#multipost)\> |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `comments` | () => `number` |
| `contentId` | () => `string` |
| `created` | () => `number` |
| `dog` | () => { fullName: () =\> string; pics: () =\> string[]; breed: () =\> string; yearBorn: () =\> number; monthBorn: () =\> number; dayBorn: () =\> number; summary: () =\> string; missing: () =\> string; verified: () =\> boolean; id: () =\> string; created: () =\> number; relationship: () =\> string; } |
| `dogs` | () => { fullName: () =\> string; pics: () =\> string[]; breed: () =\> Required<string \| undefined\>; yearBorn: () =\> Required<number \| undefined\>; monthBorn: () =\> Required<number \| undefined\>; ... 6 more ...; relationship: () =\> Required<...\>; }[] |
| `id` | () => `string` |
| `image` | () => `string` |
| `liked` | () => `boolean` |
| `likes` | () => `number` |
| `location` | () => { geopoint: () =\> { latitude: () =\> number; longitude: () =\> number; }; name: () =\> Required<string \| null\>; } |
| `locationID` | () => `string` |
| `summary` | () => `string` |
| `tags` | () => { [x: string]: () =\> string; } |
| `user` | () => `string` |
| `video` | () => { uri: () =\> string; thumbnail: () =\> string; } |

#### Defined in

[src/lenses/Post.ts:32](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/lenses/Post.ts#L32)

___

### NotificationLensHelper

▸ **NotificationLensHelper**(`obj`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `Maybe`<[`Notification`](../interfaces/Notification.md)\> |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `actionType` | () => `string` |
| `author` | () => `string` |
| `contentId` | () => `string` |
| `contentType` | () => `string` |
| `created` | () => `number` |
| `from` | () => `string`[] |
| `id` | () => `string` |
| `read` | () => `boolean` |
| `summary` | () => `string` |
| `to` | () => `string` |

#### Defined in

[src/lenses/Notification.ts:20](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/lenses/Notification.ts#L20)

___

### PostLensHelper

▸ **PostLensHelper**(`obj`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `Maybe`<[`Post`](../interfaces/Post.md)\> |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `contentId` | () => `string` |
| `created` | () => `number` |
| `dog` | () => `string` |
| `id` | () => `string` |
| `image` | () => `string` |
| `likes` | () => `number` |
| `location` | () => { geopoint: () =\> { latitude: () =\> number; longitude: () =\> number; }; name: () =\> Required<string \| null\>; } |
| `locationID` | () => `string` |
| `summary` | () => `string` |
| `tags` | () => { [x: string]: () =\> string; } |
| `user` | () => `string` |
| `video` | () => { uri: () =\> string; thumbnail: () =\> string; } |

#### Defined in

[src/lenses/Post.ts:31](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/lenses/Post.ts#L31)

___

### RelationshipLensHelper

▸ **RelationshipLensHelper**(`obj`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `Maybe`<[`Relationship`](../interfaces/Relationship.md)\> |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `created` | () => `number` |
| `dog` | () => `string` |
| `id` | () => `string` |
| `type` | () => `string` |
| `user` | () => `string` |

#### Defined in

[src/lenses/Relationship.ts:7](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/lenses/Relationship.ts#L7)

___

### UserLensHelper

▸ **UserLensHelper**(`obj`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `Maybe`<[`User`](../interfaces/User.md)\> |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `additionalUserInfo` | () => { isNewUser: () =\> boolean; providerId: () =\> string; } |
| `credential` | () => {}[] \| () => { [x: string]: (() =\> {}[]) \| (() =\> ...); } |
| `operationType` | () => `string` |
| `user` | () => { apiKey: () =\> string; appName: () =\> string; authDomain: () =\> string; createdAt: () =\> string; displayName: () =\> string; email: () =\> string; emailVerified: () =\> boolean; isAnonymous: () =\> boolean; lastLoginAt: () =\> string; ... 7 more ...; uid: () =\> string; } |

#### Defined in

[src/lenses/User.ts:122](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/lenses/User.ts#L122)

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

[src/lenses/Base.ts:6](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/lenses/Base.ts#L6)
