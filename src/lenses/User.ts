import { lens } from "shonad";
import { maybe } from "shonad";
import {
  AdditionalUserInfo,
  GUID,
  MultiFactor,
  ProviderData,
  STSTokenManager,
  User,
  UserUser,
} from "../types";

export const additionalUserInfo =
  lens.prop<AdditionalUserInfo>("additionalUserInfo");
export const credential = lens.prop<any>("credential");
export const operationType = lens.prop<string>("operationType");
export const userRecord = lens.prop<UserUser>("user");

export const isNewUser = lens.compose<User, maybe.Maybe<boolean>>(
  additionalUserInfo,
  lens.optional({}),
  lens.prop<boolean>("isNewUser")
);

export const providerID = lens.compose<User, maybe.Maybe<string>>(
  additionalUserInfo,
  lens.optional({}),
  lens.prop<string>("providerId")
);

export const multiFactor = lens.compose<User, maybe.Maybe<MultiFactor>>(
  userRecord,
  lens.optional({}),
  lens.prop<MultiFactor>("multiFactor")
);

export const enrolledFactors = lens.compose<User, maybe.Maybe<string[]>>(
  multiFactor,
  lens.optional({}),
  lens.prop<string[]>("enrolledFactors")
);

export const providerData = lens.compose<User, maybe.Maybe<ProviderData[]>>(
  userRecord,
  lens.optional({}),
  lens.prop<ProviderData[]>("providerData")
);

// just gunna get the first one
export const firstProviderData = lens.compose<User, maybe.Maybe<ProviderData>>(
  providerData,
  lens.optional([]),
  lens.head
);

export const stsTokenManager = lens.compose<User, maybe.Maybe<STSTokenManager>>(
  userRecord,
  lens.optional({}),
  lens.prop<STSTokenManager>("stsTokenManager")
);

const maybeUser = lens.compose<User, Record<string, any>>(
  userRecord,
  lens.optional({})
);
export namespace user {
  export const appName = lens.compose<User, maybe.Maybe<string>>(
    maybeUser,
    lens.prop<string>("appName")
  );
  export const authDomain = lens.compose<User, maybe.Maybe<string>>(
    maybeUser,
    lens.prop<string>("authDomain")
  );
  export const createdAt = lens.compose<User, maybe.Maybe<string>>(
    maybeUser,
    lens.prop<string>("createdAt")
  );
  export const displayName = lens.compose<User, maybe.Maybe<string>>(
    maybeUser,
    lens.prop<string>("displayName")
  );
  export const email = lens.compose<User, maybe.Maybe<string>>(
    maybeUser,
    lens.prop<string>("email")
  );
  export const emailVerified = lens.compose<User, maybe.Maybe<boolean>>(
    maybeUser,
    lens.prop<boolean>("emailVerified")
  );
  export const isAnonymous = lens.compose<User, maybe.Maybe<boolean>>(
    maybeUser,
    lens.prop<boolean>("isAnonymous")
  );
  export const lastLoginAt = lens.compose<User, maybe.Maybe<string>>(
    maybeUser,
    lens.prop<string>("lastLoginAt")
  );
  export const phoneNumber = lens.compose<User, maybe.Maybe<string>>(
    maybeUser,
    lens.prop<string>("phoneNumber")
  );
  export const photoURL = lens.compose<User, maybe.Maybe<string>>(
    maybeUser,
    lens.prop<string>("photoURL")
  );
  export const redirectEventId = lens.compose<User, maybe.Maybe<any>>(
    maybeUser,
    lens.prop<any>("redirectEventId")
  );
  export const tenantID = lens.compose<User, maybe.Maybe<string>>(
    maybeUser,
    lens.prop<string>("tenantId")
  );
  export const uid = lens.compose<User, maybe.Maybe<GUID>>(
    maybeUser,
    lens.prop<GUID>("uid")
  );
}
