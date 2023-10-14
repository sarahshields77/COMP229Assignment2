import mongoose from 'mongoose'
//const mongoose = require('mongoose');

// below is me for assignment
// Product model
const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  published: Boolean,
  category: String,
});

const Product = mongoose.model('Product', productSchema);

//Category model
const categorySchema = new mongoose.Schema({
  status: {
  category: String,
  enum: ['Men', 'Women', 'teens']
  }
})

const Category = mongoose.model('Category', categorySchema);