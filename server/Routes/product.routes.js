const router = require("express").Router();
const authMiddlewares = require("../Middleware/authMiddlewares");
const { productModel } = require("../Model/product.model");


router.post("/add-products", authMiddlewares, async (req, res) => {
  try {
    const newProduct = new productModel(req.body);
    await newProduct.save();
    res.send({
      success: true,
      message: "Product added successfully",
      data: newProduct,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});

router.post("/get-all-products-with-filters",authMiddlewares,
  async (req, res) => {
    try {
      const {
        gender,
        priceRange,
        style,
        bodyfit,
        subcategory,
        color,
        category,
        brand,
        sort,
        discount,
        size,
        topshop,
        braned,
      } = req.body;
      let filteredProducts = await productModel.find();

      if (
        gender ||
        subcategory ||
        style ||
        bodyfit ||
        priceRange ||
        category ||
        brand ||
        color ||
        discount ||
        size ||
        topshop ||
        braned
      ) {
        if (gender){
          filteredProducts = filteredProducts.filter(
            (product) => product.gender === gender
          );
        }
        if (topshop){
          filteredProducts = filteredProducts.filter(
            (product) => product.topshop === topshop
          );
        }
        if (braned){
          filteredProducts = filteredProducts.filter(
            (product) => product.braned === braned
          );
        }
        if (category){
          filteredProducts = filteredProducts.filter(
            (product) => product.category === category
          );
        }
        if (brand){
          filteredProducts = filteredProducts.filter(
            (product) => product.brand === brand
          );
        }
        if (color){
          filteredProducts = filteredProducts.filter(
            (product) => product.color === color
          );
        }
        if (subcategory){
          filteredProducts = filteredProducts.filter(
            (product) => product.subcategory === subcategory
          );
        }
        if (style){
          filteredProducts = filteredProducts.filter(
            (product) => product.style === style
          );
        }
        if (size){
          filteredProducts = filteredProducts.filter(
            (product) => product.size === size
          );
        }
        if (bodyfit){
          filteredProducts = filteredProducts.filter(
            (product) => product.bodyfit === bodyfit
          );
        }
        if (priceRange){
          filteredProducts = filteredProducts.filter(
            (product) => product.price <= priceRange
          );
        }
        if (discount){
          if(discount<=9){
            filteredProducts = filteredProducts.filter(
              (product) => product.discount <= discount
            );
          }else{
            filteredProducts = filteredProducts.filter(
              (product) => product.discount >= discount
            );
          }
        }
      }

      // Sorting the products based on the given sort value
      if (sort) {
        switch (sort) {
          case "asc":
            filteredProducts.sort((a, b) => a.price - b.price);
            break;
          case "desc":
            filteredProducts.sort((a, b) => b.price - a.price);
            break;
          default:
            // For any other value of sort, the original order will be maintained
            break;
        }
      }
      // const products= ;
      res.send({
        success: true,
        data: filteredProducts,
      });
    } catch (error) {
      res.send({
        success: false,
        message: error.message,
      });
    }
  }
);

router.get('/product-by-id/:id',authMiddlewares,async (req,res)=>{
  try {
    const singlefood = await productModel.findById(req.params.id);
    res.send({
         success: true,
         data: singlefood
    });
}catch(error){
    res.send({
         success: false,
         message: error.message,
    })
}
})

router.get('/search/:key',async(req,res)=>{
  try {
       const response=await productModel.find({
          '$or':[
              {name:{$regex:req.params.key}},
          ]
       });
       res.send({
          success:true,
          data:response,
      })
  } catch (error) {
      res.send({
          success:false,
          message:error.message,
      })
  }
})


module.exports = router;
