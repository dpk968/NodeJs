const fs  = require('fs');
const path = require('path');

const dirPath = path.join(__dirname,"CURD");
const filePath = `${dirPath}/file.txt`;

//for creating a file
fs.writeFileSync(filePath,"This file created in CURD folder with name file.txt using node js");

// for readFile content or read file
fs.readFile(filePath,'utf8',(err,item)=>{
    console.log(item);
})

//for update file content or to append in file
fs.appendFile(filePath," and this text append by node js fs.appendFile function",(err)=>{
    if(!err){
        console.log("file is updated and new content is: ");
        fs.readFile(filePath,'utf8',(err,item)=>{
            console.log(item)
        })
    } 
})

//for deleting file
fs.unlinkSync(filePath);