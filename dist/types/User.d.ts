export interface User {
    additionalUserInfo: {
        isNewUser: boolean;
        providerId: "phone";
    };
    credential: any;
    operationType: string;
    user: {
        apiKey: string;
        appName: string;
        authDomain: string;
        createdAt: string;
        displayName: string | null;
        email: string | null;
        emailVerified: boolean;
        isAnonymous: boolean;
        lastLoginAt: string;
        multiFactor: {
            enrolledFactors: string[];
        };
        phoneNumber: string;
        photoURL: string | null;
        providerData: {
            displayName: string | null;
            email: string | null;
            phoneNumber: string;
            photoURL: string | null;
            providerId: string;
            uid: string;
        }[];
        redirectEventId: any;
        stsTokenManager: {
            accessToken: string;
            apiKey: string;
            expirationTime: number;
            refreshToken: string;
        };
        tenantId: string | null;
        uid: string;
    };
}
