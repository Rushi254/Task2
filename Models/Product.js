const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    title:String,
    price:Number,
    description:String,
    category:String,
    image:String,
    rating:Number,
    discount:Number,
    offerprice:Number,
    stock:Number,
    reviews:Number,
    brand:String,
    link:String,
});
const Product = mongoose.model("Product",productSchema);
module.exports = Product;