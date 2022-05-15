const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
var client = require('mongodb').MongoClient;
var database_URL = `mongodb+srv://dbAdmin:${process.env.DB_PASSWORD}@${process.env.DB_NAME}.mongodb.net/cluster0?retryWrites=true&w=majority`;

async function getMalMert(){
    const response = await fetch(`http://localhost:8000/malmert/2`);
    return await response.json();
}

async function getTrends(){
    const response = await fetch(`http://localhost:8000/malmert/2`);
    return await response.json();
}

// async function run() {
//     try {
//       await client.connect();
//       const database = client.db('data_analysis');
//       const movies = database.collection('trends');
//       // Query for a movie that has the title 'Back to the Future'
//       const query = { title: 'Back to the Future' };
//       const movie = await movies.findOne(query);
//       console.log(movie);
//     } finally {
//       // Ensures that the client will close when you finish/error
//       await client.close();
//     }
//   }
//   run().catch(console.dir);

module.exports = {
    getMalMert,
    getTrends
}