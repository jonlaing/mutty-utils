[mutty-utils](../README.md) / [Exports](../modules.md) / [utils](utils.md) / notifications

# Namespace: notifications

[utils](utils.md).notifications

## Table of contents

### Functions

- [findCommentDogs](utils.notifications.md#findcommentdogs)
- [findFriendDogs](utils.notifications.md#findfrienddogs)
- [findFriendships](utils.notifications.md#findfriendships)
- [findLikeContent](utils.notifications.md#findlikecontent)
- [findLikeDogs](utils.notifications.md#findlikedogs)
- [groupLikeNotifs](utils.notifications.md#grouplikenotifs)
- [sendPushNotification](utils.notifications.md#sendpushnotification)
- [stringifyNotif](utils.notifications.md#stringifynotif)

## Functions

### findCommentDogs

▸ **findCommentDogs**(`notif`, `dogs`): [`Dog`](../interfaces/Dog.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `notif` | [`Notification`](../interfaces/Notification.md) |
| `dogs` | [`Dog`](../interfaces/Dog.md)[] |

#### Returns

[`Dog`](../interfaces/Dog.md)[]

#### Defined in

[src/utils/notification.ts:43](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/utils/notification.ts#L43)

___

### findFriendDogs

▸ **findFriendDogs**(`notif`, `dogs`, `friendships`): [`Dog`](../interfaces/Dog.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `notif` | [`Notification`](../interfaces/Notification.md) |
| `dogs` | [`Dog`](../interfaces/Dog.md)[] |
| `friendships` | [`Friendship`](../interfaces/Friendship.md)[] |

#### Returns

[`Dog`](../interfaces/Dog.md)[]

#### Defined in

[src/utils/notification.ts:60](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/utils/notification.ts#L60)

___

### findFriendships

▸ **findFriendships**(`notif`, `friendships`): [`Friendship`](../interfaces/Friendship.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `notif` | [`Notification`](../interfaces/Notification.md) |
| `friendships` | [`Friendship`](../interfaces/Friendship.md)[] |

#### Returns

[`Friendship`](../interfaces/Friendship.md)[]

#### Defined in

[src/utils/notification.ts:47](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/utils/notification.ts#L47)

___

### findLikeContent

▸ **findLikeContent**(`notif`, `posts`, `comments`): `undefined` \| [`Post`](../interfaces/Post.md) \| [`Comment`](../interfaces/Comment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `notif` | [`Notification`](../interfaces/Notification.md) |
| `posts` | [`Post`](../interfaces/Post.md)[] |
| `comments` | [`Comment`](../interfaces/Comment.md)[] |

#### Returns

`undefined` \| [`Post`](../interfaces/Post.md) \| [`Comment`](../interfaces/Comment.md)

#### Defined in

[src/utils/notification.ts:12](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/utils/notification.ts#L12)

___

### findLikeDogs

▸ **findLikeDogs**(`notif`, `content`, `dogs`): [`Dog`](../interfaces/Dog.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `notif` | [`Notification`](../interfaces/Notification.md) |
| `content` | [`Post`](../interfaces/Post.md) \| [`Comment`](../interfaces/Comment.md) |
| `dogs` | [`Dog`](../interfaces/Dog.md)[] |

#### Returns

[`Dog`](../interfaces/Dog.md)[]

#### Defined in

[src/utils/notification.ts:25](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/utils/notification.ts#L25)

___

### groupLikeNotifs

▸ **groupLikeNotifs**(`ns`): [`Notification`](../interfaces/Notification.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `ns` | [`Notification`](../interfaces/Notification.md)[] |

#### Returns

[`Notification`](../interfaces/Notification.md)[]

#### Defined in

[src/utils/notification.ts:71](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/utils/notification.ts#L71)

___

### sendPushNotification

▸ **sendPushNotification**(`to`, `title`, `body`, `data`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `to` | `string` |
| `title` | `string` |
| `body` | `string` |
| `data` | `any` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/utils/notification.ts:127](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/utils/notification.ts#L127)

___

### stringifyNotif

▸ **stringifyNotif**(`notif`, `fromHuman`, `fromDogs`): `undefined` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `notif` | [`Notification`](../interfaces/Notification.md) \| [`NotificationBuilder`](../modules.md#notificationbuilder) |
| `fromHuman` | `undefined` \| [`Human`](../interfaces/Human.md) |
| `fromDogs` | [`Dog`](../interfaces/Dog.md)[] |

#### Returns

`undefined` \| `string`

#### Defined in

[src/utils/notification.ts:98](https://github.com/jonlaing/mutty-utils/blob/f9c02d2/src/utils/notification.ts#L98)
