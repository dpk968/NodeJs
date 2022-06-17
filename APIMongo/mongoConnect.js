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