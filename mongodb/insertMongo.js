const dbConnect = require('./connectMongo');

let insert =async () =>{
    let db = await dbConnect();
    const result  = await db.insertOne({name:"dilip",email:"dkg@gmail.com"});
     if(result.acknowledged){
        console.log("data inserted");
     }
}

insert();