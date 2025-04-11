const express = require('express')
const mongoose= require('mongoose')
const app = express()
app.use(express.json());
const port = 3000

const Product = require("./Models/Product.js");
const SignUp = require("./Models/SignUp.js");
const SingUp = require('./Models/SignUp.js');

app.get('/sayhello', (req, res) => {
  res.send("hello world!")
})

app.post('/addproductdata', (req, res) => {
    res.send("hello world!")
  })
// create api to add product data to database
app.post("/addproducts", async (req,res) =>
{ 
    try
    {
        const product = await Product.create(req.body);
        res.json(Product);
        console.log("product added suceessfully");
    }
    catch(error)
    {
        res.status(500).send("Data not added");
    }

}) ;
//create api to fetch all products from database
app.get("/getproducts", async (req,res) =>
{ 
    try
    {
        const products= await Product.find({});
        res.json(products);
        console.log("product fetched successfully");

    }
    catch(error)
    {
        res.status(500).send("Data not fetched");
    }
});
//signup api to add user data
app.post("/SignUp" ,async (req,res)=> {
    try
    {
        const user = await SignUp.create(req.body);
        res.json(user);
    }
    catch(error)
    {
        res.status(500).send("Data not added");
    }
});

//create signin api to login using rool no and password
app.post("/SignIn", async (req,res)=> {
    try
    {
        const user = await SignUp.findOne({name:req.body.name,password:req.body.password});
        if("name")
        {
            res.json(user);
        }
        else
        {
            res.status(404).send("User not found");
        }
    }
    catch(error)
    {
        res.status(500).send("Data not fetched");
    }
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
//connect to mongodb using mongoose
mongoose.connect("mongodb+srv://Rushi:e@p5ecommerce.vjqaxvd.mongodb.net/")
.then(()=>{
    console.log("connected to mongodb successfully");
})
.catch((err) => {
    console.log("error connecting to mongodb",err);
});
