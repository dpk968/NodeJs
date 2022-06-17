const dbConnect = require('./connectMongo');

let  readData = async () =>{
    let data = await dbConnect();
    data = await data.find().toArray();
    console.log(data);
}
readData();