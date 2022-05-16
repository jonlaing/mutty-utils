export interface AdditionalUserInfo {
    isNewUser: boolean;
    providerId: string;
}
export interface MultiFactor {
    enrolledFactors: string[];
}
export interface ProviderData {
    displayName?: string;
    email?: string;
    phoneNumber: string;
    photoURL?: string;
    providerId: string;
    uid: string;
}
export interface STSTokenManager {
    accessToken: string;
    apiKey: string;
    expirationTime: number;
    refreshToken: string;
}
export interface UserUser {
    apiKey: string;
    appName: string;
    authDomain: string;
    createdAt: string;
    displayName?: string;
    email?: string;
    emailVerified: boolean;
    isAnonymous: boolean;
    lastLoginAt: string;
    multiFactor: MultiFactor;
    phoneNumber: string;
    photoURL?: string;
    providerData: ProviderData[];
    redirectEventId: any;
    stsTokenManager: STSTokenManager;
    tenantId?: string;
    uid: string;
}
export interface User {
    additionalUserInfo: AdditionalUserInfo;
    credential: any;
    operationType: string;
    user: UserUser;
}
