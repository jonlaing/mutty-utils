import { DocBuilder, HasProp, ProcessedDoc } from "./FirestoreBaseTypes";
import { GUID } from "./GUID";
import { Likeable } from "./Like";
export declare type ContentType = "none" | "post" | "comment" | "photo" | "dog" | "bulletin";
export declare type ActionType = "none" | "like" | "comment" | "friend" | "tag";
export interface Notification extends ProcessedDoc {
    author: GUID;
    from: GUID[];
    to: GUID;
    contentId: GUID;
    contentType: ContentType;
    actionType: ActionType;
    summary?: string;
    read: boolean;
}
export declare type NotificationBuilder = DocBuilder<Omit<Notification, "read">>;
export interface LikeNotifIface extends Likeable {
    summary?: string;
}
export declare type LikeNotifWDog<T> = T extends HasProp<T, "dog"> ? LikeNotifIface & {
    dog: GUID;
} : LikeNotifIface & {
    dogs: GUID[];
};
export declare const emptyNotification: Notification;
