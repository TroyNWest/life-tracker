import { GraphQLObjectType, GraphQLString } from 'graphql';
import mongoose from 'mongoose';

const Comment = mongoose.model('comment');

export const CommentType = new GraphQLObjectType({
  name: 'Comment',
  fields: {
    id: { type: GraphQLString },
    content: { type: GraphQLString },
    created: { type: GraphQLString },
    updated: { type: GraphQLString },
    // content:
  },
});

export const commentQuery = {
  comment: {
    type: CommentType,
    args: { id: { type: GraphQLString } },
    resolve(parentValue, { id }) {
      return Comment.findById(id);
    },
  },
};
