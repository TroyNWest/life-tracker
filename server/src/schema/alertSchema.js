import mongoose, { Schema } from 'mongoose';

const alertSchema = new Schema({
  id: Schema.Types.ObjectId,
  title: { type: String },
  alertDate: { type: Date },
  urgent: { type: Boolean },
});

mongoose.model('alert', alertSchema);
