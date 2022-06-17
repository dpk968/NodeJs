// const express = require('express');
// const app = express();

// app.get('',(req,res)=>{
//     res.send("hello this is home page");
// });

// app.get("/about",(req,res)=>{
//     res.send("hello this about page");
// });

// app.listen(5000);

const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname,"public");

app.use(express.static(publicPath));
// type file name with .html extension otherwise you can not access the page
app.listen(5000);




