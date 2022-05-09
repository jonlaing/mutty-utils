import { Dog } from "./Dog";
import { DocBuilder, EmbeddableFields, ProcessedDoc } from "./FirestoreBaseTypes";
import { GUID } from "./GUID";
import { Location } from "./Location";
export declare type BulletinType = "meetup" | "lostdog" | "ad";
export declare type BulletinEmbedMap = {
    dog: Dog;
};
export interface Bulletin extends ProcessedDoc, EmbeddableFields<BulletinEmbedMap> {
    user: GUID;
    contentId: GUID;
    location: Location;
    locationIDs: string[];
    title: string;
    description?: string;
    canComment: boolean;
    canMessage: boolean;
    image: string;
    tags?: Record<string, GUID>;
    likes: number;
    bulletinType: BulletinType;
    date: number;
    endDate?: number;
    contact?: {
        phone?: string;
        email?: string;
        other?: string;
    };
    dogFound?: boolean;
}
export declare type BulletinBuilder<HasLikes extends boolean = true> = HasLikes extends true ? DocBuilder<Bulletin> : DocBuilder<Omit<Bulletin, "likes">>;
