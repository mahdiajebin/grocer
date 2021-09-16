// load all modules 
let express = require("express");
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
let cors = require("cors");
// let routerProduct = require("./router/product.router");
let adminRouter = require("./router/adminLogin.router");
let productRouter = require("./router/product.router");


// create the reference of express 
let app = express();

// add middleware 
app.use(cors());
app.use(bodyParser.json())

//url database 
let url = "mongodb://localhost:27017/tcsmean"


// connect the database 
mongoose.connect(url).then(res => console.log("connected")).catch(error => console.log(error));

//advance rest client: check the data 
// http://localhost:9090/api/admin/signIn        : post adminSignIn
app.use("/api/admin", adminRouter);
app.use("/api/admin", productRouter);









app.listen(9090, () => console.log("Server running on port number 9090"))