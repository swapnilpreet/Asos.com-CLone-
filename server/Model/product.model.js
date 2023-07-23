const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  name: { 
    type: String,
    required: true 
   },
   price: {
    type: Number,
    required:true,
  },
  color: {
    type: String,
    required:true,
  },
  size: {
    type: String,
    required:true,
  },
  productDetails: { 
    type: String, 
    required: true 
   },
   brand:{
    type: String,
    required: true
   },
   aboutme: {
    type: String,
  },
  lookafterme: {
    type: String,
  },
  category: { 
    type: String, 
    required: true 
   },
  gender: { 
    type: String, 
    required: true 
   },
  images: {
    type: Array,
    default: [],
  },
  subcategory:{
    type: String,
    required:true
  },
  discount: {
    type: Number,
    required:true,
  },
  style: {
    type: String,
    required:true,
  },
  bodyfit: {
    type: String,
    required:true,
  },
  braned: {
    type: Boolean,
    default:false
  },
  topshop: {
    type: Boolean,
    default:false
  },
});
const productModel = mongoose.model("products", productSchema);
module.exports = { productModel };
