import mongoose, { Schema } from 'mongoose';
import { Buffer } from 'buffer';

const TaskSchema = new Schema({
  id: Schema.Types.ObjectId,
  taskLabels: [{ type: Schema.Types.ObjectId, ref: 'TaskLabel' }],
  alerts: [{ type: Schema.Types.ObjectId, ref: 'Alert' }],
  state: { type: Schema.Types.ObjectId, ref: 'TaskState' },
  title: { type: String },
  details: { type: String },
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
  attachments: [{ type: Buffer, contentType: String }],
  created: { type: Date, required: true },
  updated: { type: Date, required: true },
  dueDate: { type: Date },
});

mongoose.model('task', TaskSchema);
