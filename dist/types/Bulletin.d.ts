import { Dog } from "./Dog";
import { DocBuilder, EmbeddableFields, ProcessedDoc } from "./FirestoreBaseTypes";
import { GUID } from "./GUID";
import { Location } from "./Location";
/**
 * {@link Bulletin} record for mutty. This comes in two flavors (for now). Currently it can
 * be either {@link BulletinType | `meetup`} or {@link BulletinType | `lostdog`}, but {@link BulletinType | `ad`} is a valid {@link BulletinType}.
 * Advertisements haven't yet been implemented.
 */
/**
 * The type for a {@link Bulletin}. Advertisements haven't been implemented yet,
 * so while `ad` is valid, it won't do anything in the interface.
 */
export declare type BulletinType = "meetup" | "lostdog" | "ad";
/** @see {@link EmbedFields} */
export declare type BulletinEmbedMap = {
    dog: Dog;
};
/**
 * Contact fields for {@link Bulletin}. Currently we don't really use `other`.
 */
export interface Contact {
    phone?: string;
    email?: string;
    other?: string;
}
export interface Bulletin extends ProcessedDoc, EmbeddableFields<BulletinEmbedMap> {
    /** User id for the {@link User} that authored the record. */
    user: GUID;
    /**
     * Content Id for related Bulletins. Because a Bulletin can be associated
     * with more than one {@link Dog}, we use write multiple copies of the
     * same Bulletin, and use the `contentId` to associate them.
     */
    contentId: GUID;
    /** {@link Location} of the this Bulletin. */
    location: Location;
    /**
     * Location IDs are used to search Firestore for nearby Bulletins.
     *
     * @example
     *
     * ```typescript
     * {latitude, longitude} = bulletin.location.geopoint;
     * const locationIDs = utils.coordToMatrix(latitude, longitude, 1);
     * ```
     *
     * @see {@link coordToFullID}
     * @see {@link coordToMatrix}
     */
    locationIDs: string[];
    /** Title of the Bulletin. This is overwritten for {@link BulletinType | `lostdog`} */
    title: string;
    /** Description of the Bulletin */
    description?: string;
    /** Set whether a Bulletin can be commented on. */
    canComment: boolean;
    /**
     * Set whether the author of this Bulletin can be messaged by other
     * Users.
     * @remark This isn't currently implemented in the app
     */
    canMessage: boolean;
    /**
     * The display image of the Bulletin
     */
    image: string;
    /** @see {@link tagifyDog} */
    tags?: Record<string, GUID>;
    /**
     * The number of likes
     */
    likes: number;
    bulletinType: BulletinType;
    /**
     * The date of the Bulletin. For a {@link BulletinType | `meetup`} this
     * will be the start date of the Meetup represented in seconds since
     * the epoch. For a {@link BulletinType | `lostdog`} it represents
     * when the dog was last seen. For advertisements it will represent
     * the start date of the campaign.
     */
    date: number;
    endDate?: number;
    contact?: Contact;
    /**
     * Set whether the dog has been found
     */
    dogFound?: boolean;
}
export declare type BulletinBuilder<HasLikes extends boolean = true> = HasLikes extends true ? DocBuilder<Bulletin> : DocBuilder<Omit<Bulletin, "likes">>;
export declare const emptyBulletin: Bulletin;
