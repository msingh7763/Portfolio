import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  github: { type: String, required: true },
  live: { type: String },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('Project', projectSchema);
