const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const { MongoClient } = require('mongodb');

require('dotenv').config();

const database_URI = `mongodb+srv://dbAdmin:${process.env.DB_PASSWORD}@${process.env.DB_NAME}.mongodb.net/cluster0?retryWrites=true&w=majority`; 

function getTopTrends(lang, time) {
    return MongoClient.connect(database_URI)
        .then(mc => mc.db('data_analysis') 
                    .collection('trends')
                    .find({"created_at" : {$exists: true, $gt: time}, "lang" : lang})
                    .limit(10)
                    .sort({"tweet_volume": -1})
                    .toArray()
                    .then(as => ((mc.close()), as)))
        .catch(e => console.log(e));
}

function getTodayTopTrends(lang) {
    return MongoClient.connect(database_URI)
        .then(mc => mc.db('data_analysis') 
                    .collection('trends')
                    .find({"created_at" : {$exists: true}, "lang" : lang})
                    .limit(10)
                    .sort({"tweet_volume": -1})
                    .toArray()
                    .then(as => ((mc.close()), as)))
        .catch(e => console.log(e));
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

function getFavoriteTweets(lang, time) {
    return MongoClient.connect(database_URI)
        .then(mc => mc.db('data_analysis')
                    .collection('tweets')
                    .find({"created_at" : {$exists: true, $type: "date", $gt: time}, "lang" : lang})
                    .limit(10)
                    .sort({"favorite_count": -1, "created_at": -1,})
                    .toArray()
                    .then(as => (mc.close(), as)))
        .catch(e => console.log(e));
}

function getFavoriteTweetsToday(lang) {
    return MongoClient.connect(database_URI)
        .then(mc => mc.db('data_analysis')
                    .collection('tweets')
                    .find({"created_at" : {$exists: true}, "lang" : lang})
                    .limit(10)
                    .sort({"favorite_count": -1,"created_at" : -1})
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

module.exports = {
    getTrendByName,
    getTodayTopTrends,
    getMostPositiveTweet,
    getTopTrends,
    getFavoriteTweets,
    getFavoriteTweetsToday
}