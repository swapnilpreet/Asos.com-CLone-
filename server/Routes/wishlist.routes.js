const authMiddlewares = require("../Middleware/authMiddlewares");
const { userModel } = require("../Model/user.model");

const router = require("express").Router();


router.put("/add-to-wishlist", authMiddlewares, async (req, res) => {
    const { userId } = req.body;
    const {prodId}  = req.body;
    console.log(userId, prodId);
    try {
      const user = await userModel.findById(userId);
      const alreadyadded = user.wishlist.find((id) => id.toString() === prodId);
      if (alreadyadded) {
        let user = await userModel.findByIdAndUpdate(
          userId,
          {
            $pull: { wishlist: prodId },
          },
          {
            new: true,
          }
        );
        res.send({
          success: true,
          message: "product removed successfully",
          data: user,
        });
      } else {
        let user = await userModel.findByIdAndUpdate(
          userId,
          {
            $push: { wishlist: prodId },
          },
          {
            new: true,
          }
        );
        res.send({
          success: true,
          message: "product added successfully",
          data: user,
        });
      }
    } catch (error) {
      res.send({
        success: false,
        message: error.message,
      });
    }
  });
  
  router.get("/get-wishlist", authMiddlewares, async (req, res) => {
    const { userId } = req.body;
    try {
      const findUser = await userModel.findById(userId).populate("wishlist");
      res.send({
        success: true,
        message: "fetching wishliist successfull",
        // data:findUser.wishlist
        data: findUser,
      });
    } catch (error) {
      res.send({
        success: false,
        message: error.message,
      });
    }
  });


  module.exports = router;

  