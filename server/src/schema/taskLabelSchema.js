import mongoose, { Schema } from 'mongoose';

const TaskLabelSchema = new Schema({
  id: Schema.Types.ObjectId,
  type: { type: String, unique: true },
});

mongoose.model('taskLabel', TaskLabelSchema);
