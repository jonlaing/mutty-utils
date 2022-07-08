"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelationshipLensHelper = exports.relType = void 0;
const shonad_1 = require("shonad");
const types_1 = require("../types");
exports.relType = shonad_1.lens.prop("type");
exports.RelationshipLensHelper = shonad_1.dict.makeDictHelper(types_1.emptyRelationship);
//# sourceMappingURL=Relationship.js.map