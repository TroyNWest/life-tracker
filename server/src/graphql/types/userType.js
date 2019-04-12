import { GraphQLObjectType, GraphQLString } from 'graphql';
import mongoose from 'mongoose';

const User = mongoose.model('user');

export const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLString },
    email: { type: GraphQLString },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    role: { type: GraphQLString },
    dob: { type: GraphQLString },
    createdAt: { type: GraphQLString },
  },
});

export const userQuery = {
  user: {
    type: UserType,
    args: { id: { type: GraphQLString } },
    resolve(parentValue, { id }) {
      return User.findById(id);
    },
  },
};

