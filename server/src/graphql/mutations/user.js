import { GraphQLNonNull, GraphQLString } from 'graphql';
import mongoose from 'mongoose';
import { UserType } from '../types/userType';

const User = mongoose.model('user');

export default {
  addUser: {
    type: UserType,
    args: {
      firstName: {
        type: new GraphQLNonNull(GraphQLString),
      },
      lastName: {
        type: new GraphQLNonNull(GraphQLString),
      },
      email: {
        type: new GraphQLNonNull(GraphQLString),
      },
      dob: {
        type: GraphQLString,
      },
      role: {
        type: GraphQLString,
      },
    },
    resolve(parentValue, {
      firstName, lastName, email, dob, role,
    }) {
      return (new User({
        firstName, lastName, email, dob, role,
      })).save();
    },
  },
};
