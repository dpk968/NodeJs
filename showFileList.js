const fs = require('fs');


const path = require('path');

const dirname = path.join(__dirname,"FileList");

for (let i = 0; i < 5; i++) {

    fs.writeFileSync(`${dirname}/apple ${i+1}.txt`,`simple text file${i}`);
    
}

fs.readdir(dirname,(err,file)=>{
    file.forEach(element => {
        console.log(element);
    });
});