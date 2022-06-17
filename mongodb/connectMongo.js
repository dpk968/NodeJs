// const {MongoClient} = require('mongodb');
// const url = 'mongodb://localhost:27017';
// const dbName = 'College';
// const client = new MongoClient(url);

// async function getData() {

//     let result = await client.connect();
//     let db = result.db(dbName);
//     let collection = db.collection('Students');
//     return  collection;

// }


// getData().then((res)=>{
//     res.find().toArray().then((data)=>{
//         console.log(data);
//     })
// });


// let  main = async () =>{
//     let data = await getData();
//     data = await data.find().toArray();
//     console.log(data);
// }

// main();


/////////////// used as external connection file////////////


const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const dbName = 'College';
const client = new MongoClient(url);

async function getConnection() {

    let result = await client.connect();
    let db = result.db(dbName);
    let collection = db.collection('Students');
    return  collection;

}

module.exports = getConnection;