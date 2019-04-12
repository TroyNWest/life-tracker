import { GraphQLObjectType, GraphQLString } from 'graphql';
import mongoose from 'mongoose';

const TaskState = mongoose.model('taskState');

export const StateType = new GraphQLObjectType({
  name: 'State',
  fields: {
    id: { type: GraphQLString },
    stateName: { type: GraphQLString },
  },
});

export const taskStateQuery = {
  state: {
    type: StateType,
    args: { id: { type: GraphQLString } },
    resolve(parentValue, { id }) {
      return TaskState.findById(id);
    },
  },
};
