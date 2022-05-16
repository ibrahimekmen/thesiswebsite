const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const { MongoClient } = require('mongodb');
require('dotenv').config();
const database_URI = `mongodb+srv://dbAdmin:${process.env.DB_PASSWORD}@${process.env.DB_NAME}.mongodb.net/cluster0?retryWrites=true&w=majority`;
const client = new MongoClient(database_URI);  

async function getMalMert(){
    const response = await fetch(`http://localhost:8000/malmert/2`);
    return await response.json();
}

async function getTrends(){
    const response = await fetch(`http://localhost:8000/malmert/2`);
    return await response.json();
}

function getTrendByName(trendName) {
    return MongoClient.connect(database_URI)
        .then(mc => mc.db('data_analysis') 
                    .collection('trends')        
                    .find({name: trendName})     
                    .toArray()                   
                    .then(as => (mc.close(), as)))
        .catch(e => console.log(e));
} 

function getMostPositiveTweet(trendName){
    return MongoClient.connect(database_URI)
        .then(mc => mc.db('data_analysis') 
                    .collection('tweets')        
                    .find({trend_name: trendName})
                    .limit(1)
                    .sort({vader_result: -1})
                    .toArray()
                    .then(as => (mc.close(), as)))
        .catch(e => console.log(e));
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
    getTrends,
    getTrendByName,
    getMostPositiveTweet
}