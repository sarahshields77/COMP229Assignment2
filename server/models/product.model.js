import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    published: Boolean,
    category: String,
  });

  const Product = mongoose.model('Product', ProductSchema);

  export default mongoose.model('Product', ProductSchema);