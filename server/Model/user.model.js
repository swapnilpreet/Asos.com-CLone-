const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  email: { 
    type: String,
    required: true 
   },
  firstname: { 
    type: String, 
    required: true 
   },
  lastname: { 
    type: String, 
    required: true 
   },
  password: { 
    type: String, 
    required: true 
   },
  dob: {
    type: String,
    required: true,
  },
  role:{
    type: String,
    default:'user'
  },
  cart: {
    type: Array,
    default:[],
  },
  wishlist: [{
    type: mongoose.Schema.Types.ObjectId,
    ref:'products',
  }],
});
const userModel = mongoose.model("user", userSchema);
module.exports = { userModel };
