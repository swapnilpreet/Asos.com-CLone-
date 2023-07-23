const router = require("express").Router();
const Razorpay = require("razorpay");
const crypto= require("crypto");

router.post("/order", async (req, res) => {
  console.log(req.body.amount);
  let instance = new Razorpay({
    key_id: process.env.KEY_ID,
    key_secret: process.env.SECRET_KEY,
  });

  var option = {
    amount: req.body.amount*10,
    currency: "USD",
  };
  console.log(option.amount);
  instance.orders.create(option, function (err, order) {
    if (err) {
      console.log(err);
      return res.send({
        success: false,
        message: err,
      });
    } else {
      return res.send({
        success: true,
        message: "Order created successfully",
        data: order,
      });
    }
  });
});

router.post("/verify", async (req, res) => {
    console.log(req.body.response);
    let body = req.body.response.razorpay_order_id
    +"|"+ req.body.response.razorpay_payment_id;

    var expectedSignture = crypto.createHmac('sha256',"ajnT9oxT352lwOG8BLcAm8LA").update(body.toString()).digest('hex');

    if(expectedSignture === req.body.response.razorpay_signature
        ) {
        res.send({
            success: true,
            message: "Payment successfully Completed"
        })
    }else{
        res.send({
            success: false,
            message: "signature Invalid"
        })
    }
});
module.exports = router;
