import { lens } from "shonad/control";
import { maybe } from "shonad/data";
import { AdditionalUserInfo, MultiFactor, ProviderData, STSTokenManager, User, UserUser } from "../types";
export declare const additionalUserInfo: lens.Lens<any, maybe.Maybe<AdditionalUserInfo>>;
export declare const credential: lens.Lens<any, maybe.Maybe<any>>;
export declare const operationType: lens.Lens<any, maybe.Maybe<string>>;
export declare const userRecord: lens.Lens<any, maybe.Maybe<UserUser>>;
export declare const isNewUser: lens.Lens<User, maybe.Maybe<boolean>>;
export declare const providerID: lens.Lens<User, maybe.Maybe<string>>;
export declare const multiFactor: lens.Lens<User, maybe.Maybe<MultiFactor>>;
export declare const enrolledFactors: lens.Lens<User, maybe.Maybe<string[]>>;
export declare const providerData: lens.Lens<User, maybe.Maybe<ProviderData[]>>;
export declare const firstProviderData: lens.Lens<User, maybe.Maybe<ProviderData>>;
export declare const stsTokenManager: lens.Lens<User, maybe.Maybe<STSTokenManager>>;
export declare namespace user {
    const appName: lens.Lens<User, maybe.Maybe<string>>;
    const authDomain: lens.Lens<User, maybe.Maybe<string>>;
    const createdAt: lens.Lens<User, maybe.Maybe<string>>;
    const displayName: lens.Lens<User, maybe.Maybe<string>>;
    const email: lens.Lens<User, maybe.Maybe<string>>;
    const emailVerified: lens.Lens<User, maybe.Maybe<boolean>>;
    const isAnonymous: lens.Lens<User, maybe.Maybe<boolean>>;
    const lastLoginAt: lens.Lens<User, maybe.Maybe<string>>;
    const phoneNumber: lens.Lens<User, maybe.Maybe<string>>;
    const photoURL: lens.Lens<User, maybe.Maybe<string>>;
    const redirectEventId: lens.Lens<User, maybe.Maybe<any>>;
    const tenantID: lens.Lens<User, maybe.Maybe<string>>;
    const uid: lens.Lens<User, maybe.Maybe<string>>;
}
