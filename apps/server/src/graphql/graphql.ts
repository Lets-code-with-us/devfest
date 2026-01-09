// import { GraphQLString,GraphQLSchema,GraphQLObjectType } from "graphql";

import { buildSchema } from "graphql";

// export const schema = new GraphQLSchema({
//   query: new GraphQLObjectType({
//     name: 'Query',
//     fields: {
//       hello: {
//         type: GraphQLString,
//         resolve: () => 'Hello world!'
//       },
//       start:{
//         type:GraphQLString,
//         resolve:()=>'This is how we start'
//       }
//     },
//   }),
// });

export const schema = buildSchema(
	`
    type Query{
        hello(name:String):String

    }    
    `,
);

export const rootValue = {
	hello: (args: any) => {
		return "Hello" + args.name;
	},
};
