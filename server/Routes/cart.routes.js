const router = require("express").Router();
const authMiddlewares = require("../Middleware/authMiddlewares");
const validateMongoDbId = require("../Middleware/validateMongoDbId");
const CartModel = require("../Model/cart.model");
const { productModel } = require("../Model/product.model");
const { userModel } = require("../Model/user.model");

router.post("/add-to-cart", authMiddlewares, async (req, res) => {
  const {productId, quantity } = req.body;
  const {userId} =  req.body;
  // console.log(userId,productId,quantity);
  try {
    const user = await userModel.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found.' });
    }

    const product = await productModel.findById(productId);
    if (!product) {
      return res.status(404).json({ error: 'Product not found.' });
    }

    let cart = await CartModel.findOne({ userId: userId });

    if (!cart) {
      // Create a new cart if it doesn't exist for the user
      cart = new CartModel({ userId: userId });
    }

    const cartItemIndex = cart.items.findIndex(item => item.product.equals(productId));

    if (cartItemIndex > -1) {
      // Update quantity if the product is already in the cart
      cart.items[cartItemIndex].quantity += quantity;
    } else {
      cart.items.push({ product: productId, quantity });
    }

    await cart.save();
    res.send({
      message: 'Success',
      data:cart
    })
    // res.status(200).json({ message: 'Item added to cart successfully.', cart });
  } catch (error) {
    res.send({
      message: error.message,
    })
    // res.status(500).json({ error: 'Internal server error.' });
  }
});
  

router.get("/get-user-cart", authMiddlewares, async (req, res) => {
  try {
    const { userId } = req.body;
    const user = await userModel.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found.' });
    }
    const cart = await CartModel.findOne({ userId: userId }).populate('items.product');
    if (!cart) {
      return res.status(404).json({ error: 'Cart not found.' });
    }
    res.status(200).json({ cart });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error.' });
  }
});
  


router.delete("/clear-cart", authMiddlewares, async (req, res) => {
  try {
    const { userId } = req.body;

    const user = await userModel.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found.' });
    }

    const cart = await CartModel.findOne({ userId: userId });
    if (!cart) {
      return res.status(404).json({ error: 'Cart not found.' });
    }
    cart.items = [];
    await cart.save();

    res.status(200).json({ message: 'Cart cleared successfully.', cart });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error.' });
  }
});

router.post('/remove-from-cart', authMiddlewares, async(req,res)=>{
  try {
    const { userId, productId} = req.body;
    const user = await userModel.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found.' });
    }
    const cart = await CartModel.findOne({ userId: userId });
    if (!cart) {
      return res.status(404).json({ error: 'Cart not found.' });
    }
    const cartItemIndex = cart.items.findIndex(item => item.product.equals(productId));
    if (cartItemIndex > -1) {
      cart.items.splice(cartItemIndex, 1);
      await cart.save();
      res.status(200).json({ message: 'Item removed from cart successfully.', cart });
    } else {
      res.status(404).json({ error: 'Item not found in cart.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error.' });
  }
})
  

module.exports = router;