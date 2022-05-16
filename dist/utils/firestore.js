"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.batchGetById = exports.batchGetByField = exports.batchGetByFieldWithConstraints = exports.batchField = exports.reduceQueryToDocs = exports.reduceDocs = exports.reduceQuery = exports.dataToDoc = void 0;
const R = __importStar(require("ramda"));
const firebase_1 = __importDefault(require("firebase"));
const dataToDoc = (res) => {
    var _a;
    const data = res.data();
    return Object.assign(Object.assign({}, data), { id: res.id, created: ((_a = data === null || data === void 0 ? void 0 : data.created) === null || _a === void 0 ? void 0 : _a.seconds) || (data === null || data === void 0 ? void 0 : data.created) });
};
exports.dataToDoc = dataToDoc;
const reduceQuery = (constraints, query) => constraints.reduce((acc, c) => c(acc), query);
exports.reduceQuery = reduceQuery;
const reduceDocs = (q) => q.get().then(({ docs }) => docs.map(exports.dataToDoc));
exports.reduceDocs = reduceDocs;
exports.reduceQueryToDocs = R.pipe(exports.reduceQuery, exports.reduceDocs);
function batchField(constraints, field, vals) {
    const fieldBatch = vals.length < 10 ? [vals] : R.splitEvery(9, vals);
    return fieldBatch.map((vs) => {
        return [
            (q) => q.where(field, "in", vs),
            ...constraints,
        ];
    });
}
exports.batchField = batchField;
function batchGetByFieldWithConstraints(query, field, constraints, vals) {
    return __awaiter(this, void 0, void 0, function* () {
        if (vals.length === 0)
            return [];
        const promiseBatch = batchField(constraints, field, vals).map((extendedConstraints) => (0, exports.reduceQueryToDocs)(extendedConstraints, query));
        const docBatch = yield Promise.all(promiseBatch);
        const docs = R.unnest(docBatch);
        return docs;
    });
}
exports.batchGetByFieldWithConstraints = batchGetByFieldWithConstraints;
function batchGetByField(query, field, vals) {
    return __awaiter(this, void 0, void 0, function* () {
        if (vals.length === 0)
            return [];
        const promiseBatch = batchField([], field, vals).map((constraints) => (0, exports.reduceQueryToDocs)(constraints, query));
        const docBatch = yield Promise.all(promiseBatch);
        const docs = R.unnest(docBatch);
        return docs;
    });
}
exports.batchGetByField = batchGetByField;
function batchGetById(query, ids) {
    return __awaiter(this, void 0, void 0, function* () {
        return batchGetByField(query, firebase_1.default.firestore.FieldPath.documentId(), ids);
    });
}
exports.batchGetById = batchGetById;
//# sourceMappingURL=firestore.js.map