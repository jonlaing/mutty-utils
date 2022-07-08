"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emptyMultiBulletin = exports.emptyMultiPost = void 0;
const Dog_1 = require("./Dog");
exports.emptyMultiPost = {
    id: "",
    created: 0,
    contentId: "",
    user: "",
    location: {
        geopoint: {
            latitude: 0,
            longitude: 0,
        },
        name: "",
    },
    locationID: "",
    summary: "",
    video: {
        uri: "",
        thumbnail: "",
    },
    image: "",
    likes: 0,
    liked: false,
    tags: {},
    dogs: [],
    dog: Dog_1.emptyDog,
};
exports.emptyMultiBulletin = {
    id: "",
    created: 0,
    dog: Dog_1.emptyDog,
    dogs: [],
    contact: {
        phone: "",
        email: "",
        other: "",
    },
    user: "",
    contentId: "",
    location: {
        geopoint: {
            latitude: 0,
            longitude: 0,
        },
        name: "",
    },
    locationIDs: [],
    title: "",
    description: "",
    canComment: false,
    canMessage: false,
    image: "",
    tags: {},
    likes: 0,
    liked: false,
    bulletinType: "meetup",
    date: 0,
    endDate: 0,
    dogFound: false,
};
//# sourceMappingURL=MultiDoc.js.map