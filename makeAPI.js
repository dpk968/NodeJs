/////////////// make and API ///////////////


const http = require('http');

http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'application\json'});
    res.write(JSON.stringify([
                            {name:"Deepak",email:"dpk@test.com"},
                            {name:"Dev",email:"dev@gmail.com"}
                        ]));
    res.end();
}).listen(9300);


//add data from external data file

// const http = require('http');
// const data = require('./data');
// http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'application\json' });
//     res.write(JSON.stringify(data));
//     res.end();
// }).listen(9300);