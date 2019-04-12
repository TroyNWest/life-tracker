import { GraphQLNonNull, GraphQLString, GraphQLInt, GraphQLList } from 'graphql';
import mongoose from 'mongoose';
import { TaskType } from '../types/taskType';

const Task = mongoose.model('task');

export default {
  addTask: {
    type: TaskType,
    args: {
      title: {
        type: new GraphQLNonNull(GraphQLString),
      },
      details: {
        type: GraphQLString,
      },
      dueDate: {
        type: GraphQLInt,
      },
      state: {
        type: GraphQLString,
      },
      taskLabels: {
        type: new GraphQLList(GraphQLString),
      },
      alerts: {
        type: new GraphQLList(GraphQLString),
      },
      comments: {
        type: new GraphQLList(GraphQLString),
      },
    },
    resolve(parentValue, {
      title,
      details,
      dueDate,
      state,
      taskLabels = [],
      alerts = [],
      comments = [],
    }) {
      const created = Date.now();
      const updated = Date.now();
      return (new Task({
        title,
        details,
        created,
        updated,
        dueDate,
        taskLabels,
        alerts,
        state,
        comments,
      })).save();
    },
  },
  addLabel: {
    type: TaskType,
    args: {

    },
  },
  addAlert: {
    type: TaskType,
    args: {

    },
  },
  addComment: {
    type: TaskType,
    args: {

    },
  },
};
