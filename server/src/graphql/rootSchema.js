import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import {
  taskStateQuery,
  taskLabelQuery,
  commentQuery,
  alertQuery,
  taskQuery,
  userQuery,
} from './types/index';
import { userMutations } from './mutations/index';

const rootQueries = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    ...userQuery,
    ...taskQuery,
    ...alertQuery,
    ...commentQuery,
    ...taskLabelQuery,
    ...taskStateQuery,
  },
});

const rootMutations = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    ...userMutations,
  },
});

export default new GraphQLSchema({
  query: rootQueries,
  mutation: rootMutations,
});
