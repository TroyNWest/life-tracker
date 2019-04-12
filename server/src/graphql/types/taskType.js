import mongoose from 'mongoose';
import { GraphQLObjectType, GraphQLString, GraphQLList } from 'graphql';
import { TaskLabelType } from './taskLabelType';
import { AlertType } from './alertType';
import { StateType } from './taskStateType';
import { CommentType } from './commentType';

const Task = mongoose.model('task');
const Label = mongoose.model('taskLabel');
const TaskState = mongoose.model('taskState');
const Alert = mongoose.model('alert');
const Comment = mongoose.model('comment');


export const TaskType = new GraphQLObjectType({
  name: 'Task',
  fields: {
    id: { type: GraphQLString },
    title: { type: GraphQLString },
    details: { type: GraphQLString },
    attachments: { type: GraphQLString },
    created: { type: GraphQLString },
    updated: { type: GraphQLString },
    dueDate: { type: GraphQLString },
    taskLabels: {
      type: new GraphQLList(TaskLabelType),
      resolve: (source, args, context) => {
        return source.map((id) => {
          return Label.findById(id); // instead of looking up here resulve by creating new TaskLabelType.
        });
      },
    },
    alerts: {
      type: new GraphQLList(AlertType),
      resolve: (source, args, context) => {
        return source.alerts.map((id) => {
          return Alert.findById(id);
        });
      },
    },
    state: {
      type: StateType,
      resolve: (source, args, context) => {
        return TaskState.findById(source.state);
      },
    },
    comments: {
      type: new GraphQLList(CommentType),
      resolve: (source, args, context) => {
        return source.comments.map((id) => {
          return Comment.findById(id);
        });
      },
    },
  },
});

export const taskQuery = {
  task: {
    type: TaskType,
    args: { id: { type: GraphQLString } },
    resolve(parentValue, { id }) {
      return Task.findById(id);
    },
  },
};
