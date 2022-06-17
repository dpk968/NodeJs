const dbConnect = require('./connectMongo');

let deleteData = async ()=>{
    const db = await dbConnect();

    const result = await db.deleteMany({name:"dilip"});

    if(result.acknowledged){
        console.log("deleted data "+result.deletedCount);
    }

}

deleteData();