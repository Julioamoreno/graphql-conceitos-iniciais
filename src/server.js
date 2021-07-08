"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_yoga_1 = require("graphql-yoga");
var path_1 = __importDefault(require("path"));
var resolvers_1 = __importDefault(require("./resolvers"));
var mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.connect("mongodb+srv://genericuser:graphqltest@cluster0.zn95p.gcp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
var server = new graphql_yoga_1.GraphQLServer({
    typeDefs: path_1.default.resolve(__dirname, 'schema.graphql'),
    resolvers: resolvers_1.default,
});
server.start();
