import mongoose, { Schema } from 'mongoose';

const TaskStateSchema = new Schema({
  id: Schema.Types.ObjectId,
  stateName: { type: String, unique: true },
});

mongoose.model('taskState', TaskStateSchema);
