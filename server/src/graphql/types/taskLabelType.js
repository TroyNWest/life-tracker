import { GraphQLObjectType, GraphQLString } from 'graphql';
import mongoose from 'mongoose';

const Label = mongoose.model('taskLabel');

export const TaskLabelType = new GraphQLObjectType({
  name: 'Label',
  fields: {
    id: { type: GraphQLString },
    type: { type: GraphQLString },
  },
});

export const taskLabelQuery = {
  label: {
    type: TaskLabelType,
    args: { id: { type: GraphQLString } },
    resolve(parentValue, { id }) {
      return Label.findById(id);
    },
  },
};
