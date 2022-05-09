import { DocBuilder, ProcessedDoc } from "./FirestoreBaseTypes";
import { GUID } from "./GUID";
import { Likeable } from "./Like";
export declare type ContentType = "post" | "comment" | "photo" | "dog" | "bulletin";
export declare type ActionType = "like" | "comment" | "friend" | "tag";
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
export interface NotificationBuilder extends DocBuilder<Omit<Notification, "read">> {
}
export interface LikeNotifIface extends Likeable {
    summary?: string;
}
export declare type LikeNotifWDog<T> = T extends HasProp<T, "dog"> ? LikeNotifIface & {
    dog: GUID;
} : LikeNotifIface & {
    dogs: GUID[];
};
export declare type HasProp<T, K extends string> = T extends {
    [k in K]: any;
} ? true : false;
