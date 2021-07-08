import { GraphQLServer } from 'graphql-yoga';
import path from 'path';
import resolvers from './resolvers';

import mongoose from 'mongoose';

mongoose.connect(
	`mongodb+srv://genericuser:graphqltest@cluster0.zn95p.gcp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
	}
);

const server = new GraphQLServer({
	typeDefs: path.resolve(__dirname, 'schema.graphql'),
	resolvers: resolvers,
});

server.start();
