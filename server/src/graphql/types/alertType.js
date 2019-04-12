import { GraphQLObjectType, GraphQLString } from 'graphql';
import mongoose from 'mongoose';

const Alert = mongoose.model('alert');

export const AlertType = new GraphQLObjectType({
  name: 'Alert',
  fields: {
    id: { type: GraphQLString },
    title: { type: GraphQLString },
    alertDate: { type: GraphQLString },
    urgent: { type: GraphQLString },
  },
});

export const alertQuery = {
  alert: {
    type: AlertType,
    args: { id: { type: GraphQLString } },
    resolve(parentValue, { id }) {
      return Alert.findById(id);
    },
  },
};