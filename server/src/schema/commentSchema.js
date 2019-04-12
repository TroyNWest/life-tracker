import mongoose, { Schema } from 'mongoose';

const CommentSchema = new Schema({
  id: Schema.Types.ObjectId,
  content: { type: String },
  attachments: [{ type: Buffer, contentType: String }],
  created: { type: Date, required: true },
  updated: { type: Date, required: true },
});

mongoose.model('comment', CommentSchema);
