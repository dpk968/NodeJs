const dbConnect = require('./connectMongo');


const updateData = async () =>{

    let db = await dbConnect();
    let result  = await db.update({
        name:"Dilip"
    },{
        $set:{name:"dilip"}
    })

    console.log(result);
}

updateData();