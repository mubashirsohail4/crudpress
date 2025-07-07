import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const articleSchema = new Schema({
  title: String,
  content: String,
});
const article = model('articles', articleSchema);

export default article;