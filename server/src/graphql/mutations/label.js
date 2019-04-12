import { GraphQLNonNull, GraphQLString } from 'graphql';
import mongoose from 'mongoose';
import {  } from '../types/';

const  = mongoose.model('');

export default {
  add: {
    type: ,
    args: {

    },
    resolve(parentValue, {

    }) {
      return (new ({
        
      })).save();
    },
  },
};