const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user"
    },
    items: [{
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'products',
      },
      quantity: {
        type: Number,
        default: 1,
      },
    }],
  },
  { timestamps: true }
);

const CartModel= mongoose.model("cart", CartSchema);
module.exports = CartModel