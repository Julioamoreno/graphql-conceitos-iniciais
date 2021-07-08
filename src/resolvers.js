"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var User_1 = __importDefault(require("./User"));
exports.default = {
    Query: {
        users: function () { return User_1.default.find(); },
        user: function (_, _a) {
            var id = _a.id;
            return User_1.default.findById(id);
        },
    },
    Mutation: {
        createUser: function (_, _a) {
            var name = _a.name, email = _a.email;
            return User_1.default.create({ name: name, email: email });
        },
    },
};
