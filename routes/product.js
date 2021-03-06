var express = require('express');
var router = express.Router();
const ProductModel=require("../models/schema");
/* GET home page. */
router.get('/', async function(req, res, next) {
  let products=await ProductModel.find();//products
  //console.log(products); 
  res.render('product/list',{title:"Edureka's Course List",products});  
   
});


router.get("/add", async function (req, res, next) {
  res.render('product/add');
});
 
router.post("/add", async function (req, res, next) {
  let product = new ProductModel(req.body);
  await product.save();
  res.redirect("/product");
});

router.get("/delete/:id", async function (req, res, next) {
  let product = await ProductModel.findByIdAndDelete(req.params.id);
  res.redirect("/product");
  //res.send("/product/delete/"+req.params.id);
});

router.get("/edit/:id", async function (req, res, next) {
  let product = await ProductModel.findById(req.params.id);
  res.render("product/edit", { product });
});

router.post("/edit/:id", async function (req, res, next) {
  let product = await ProductModel.findById(req.params.id);
  product.code = req.body.name;
  product.size = req.body.id;
  product.price = req.body.duration;
  product.stuff = req.body.fee;
  await product.save();
  res.redirect("/product");
});
module.exports = router;
