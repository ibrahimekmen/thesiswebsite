function getDummyTrends(){
    trends = [{
      "_id": {
        "$oid": "627faeb99c1880553bb21aec"
      },
      "name": "#MyBTSTracks",
      "neg_result": 2,
      "neu_result": 22,
      "pos_result": 76,
      "tweet_volume": 615708
    },{  "_id": {    "$oid": "627faeb99c1880553bb21b99"  },  "name": "LOUDER THAN BOMBS",  "neg_result": 30,  "neu_result": 30,  "pos_result": 140,  "tweet_volume": 279581},
    {  "_id": {    "$oid": "627faeb99c1880553bb21a90"  },  "name": "Keed",  "neg_result": 106,  "neu_result": 119,  "pos_result": 175,  "tweet_volume": 165258},
    {  "_id": {    "$oid": "627fcf799c1880553bfd82b7"  },  "name": "Zelensky",  "neg_result": 31,  "neu_result": 25,  "pos_result": 44,  "tweet_volume": 88581},
    {  "_id": {    "$oid": "627faeb99c1880553bb21a77"  },  "name": "#dreamchat",  "neg_result": 106,  "neu_result": 108,  "pos_result": 386,  "tweet_volume": 78101},
    {  "_id": {    "$oid": "627fcf799c1880553bfd8282"  },  "name": "#FACupFinal",  "neg_result": 11,  "neu_result": 66,  "pos_result": 23,  "tweet_volume": 54852},
    {  "_id": {    "$oid": "627faeb99c1880553bb21a4f"  },  "name": "#FoodShortageJoe",  "neg_result": 75,  "neu_result": 76,  "pos_result": 249,  "tweet_volume": 43605},
    {  "_id": {    "$oid": "627fcbaa9c1880553bf4669c"  },  "name": "#RizeArtvinHavalimanı",  "neg_result": 27,  "neu_result": 5,  "pos_result": 18,  "tweet_volume": 34114},
    {  "_id": {    "$oid": "627faeb99c1880553bb21b6f"  },  "name": "Good Saturday",  "neg_result": 43,  "neu_result": 198,  "pos_result": 59,  "tweet_volume": 28750},
    {  "_id": {    "$oid": "627fc1909c1880553bdc59c5"  },  "name": "Vogue",  "neg_result": 4,  "neu_result": 81,  "pos_result": 115,  "tweet_volume": 27748}
    ];
    return trends;
}

function getDummyTweets(){
  tweets = [
    {  "_id": {    "$oid": "627fcf6ffef2c239046719f8"  },  "created_at": "Sat May 14 15:46:01 +0000 2022",  "id": {    "$numberLong": "1525502701911650308"  },  "retweet_count": 37,  "favorite_count": 104,  "full_text": "Through their inappropriate Yalta II behavior Macron and Scholz are discrediting not only themselves but also the EU. Ursula von der Leyen &amp; Charles Michel should tell them to stop going behind the back of Zelensky &amp; Ukraine. https://t.co/l2H42pbejO",  "vader_result": -0.4215,  "trend_name": "Zelensky",  "lang": "en"},
    {  "_id": {    "$oid": "627fc74c60d4f0f2da810baa"  },  "created_at": "Sat May 14 14:56:30 +0000 2022",  "id": {    "$numberLong": "1525490242215628800"  },  "lang": "en",  "retweet_count": 3,  "favorite_count": 36,  "full_text": "Lori Harvey finally opened her mouth to speak &amp; it was to admit she had the diet &amp; physical activity of a 4-year-old. \n\nJesus 😭",  "vader_result": -0.3182,  "trend_name": "Lori Harvey"},
    {  "_id": {    "$oid": "627fcf58fef2c239046717cc"  },  "created_at": "Sat May 14 15:36:58 +0000 2022",  "id": {    "$numberLong": "1525500426791026691"  },  "retweet_count": 4,  "favorite_count": 35,  "full_text": "Happy #Caturday https://t.co/aTU842SLHM",  "vader_result": 0.5719,  "trend_name": "#Caturday",  "lang": "en"},
    {  "_id": {    "$oid": "627fc18ed347a1d16669d210"  },  "created_at": "Sat May 14 14:44:18 +0000 2022",  "id": {    "$numberLong": "1525487171997687810"  },  "lang": "en",  "retweet_count": 5,  "favorite_count": 35,  "full_text": "Bella Hadid was out and about wearing one of the most daring trends of the moment: https://t.co/vNsH4B7OBV",  "vader_result": 0.4201,  "trend_name": "Vogue"},
    {  "_id": {    "$oid": "627fcf60fef2c2390467185b"  },  "created_at": "Sat May 14 15:41:22 +0000 2022",  "id": {    "$numberLong": "1525501534649389057"  },  "retweet_count": 6,  "favorite_count": 33,  "full_text": "They are now blaming #FoodShortageJoe on Russia. I think if Biden gets a pimple on his balls he is going to blame Russia.",  "vader_result": -0.6808,  "trend_name": "#FoodShortageJoe",  "lang": "en"},
    {  "_id": {    "$oid": "627fc74060d4f0f2da810a49"  },  "created_at": "Sat May 14 15:09:21 +0000 2022",  "id": {    "$numberLong": "1525493476707942400"  },  "lang": "en",  "retweet_count": 0,  "favorite_count": 32,  "full_text": "I officially get the keys to my awesome new apartment today! Movers will be here on the 26th &amp; my old lease ends on the 31st, so I have plenty of time to make this move as stress-free as possible. Let the decorating funtimes begin! #SaturdayVibes https://t.co/CQppfxaFZ9",  "vader_result": 0.6892,  "trend_name": "#SaturdayVibes"},
    {  "_id": {    "$oid": "627fc17bd347a1d16669d049"  },  "created_at": "Sat May 14 14:42:55 +0000 2022",  "id": {    "$numberLong": "1525486822083600384"  },  "lang": "en",  "retweet_count": 2,  "favorite_count": 29,  "full_text": "In other news, it’s…#Caturday…\n\n…and I forgot \n…because I was out too late at a friend’s birthday shenanigans…\n\n…oh well, here’s a kitty https://t.co/zah29OEAVb",  "vader_result": 0.2732,  "trend_name": "#Caturday"},
    {  "_id": {    "$oid": "627fc73460d4f0f2da810953"  },  "created_at": "Sat May 14 15:04:20 +0000 2022",  "id": {    "$numberLong": "1525492212267724802"  },  "lang": "en",  "retweet_count": 2,  "favorite_count": 29,  "full_text": "Fez isn't upside down. You're upside down. Fez is right and the world is wrong.\n\n#Caturday https://t.co/D25A7caD10",  "vader_result": -0.4767,  "trend_name": "#Caturday"},
    {  "_id": {    "$oid": "627fc74860d4f0f2da810b46"  },  "created_at": "Sat May 14 14:56:03 +0000 2022",  "id": {    "$numberLong": "1525490126360653824"  },  "lang": "en",  "retweet_count": 7,  "favorite_count": 25,  "full_text": "Melania Trump attacks Vogue for putting Jill Biden on the cover https://t.co/wj0fn5gcyN",  "vader_result": -0.4404,  "trend_name": "Vogue"},
    {  "_id": {    "$oid": "627fc18ed347a1d16669d23e"  },  "created_at": "Sat May 14 14:30:45 +0000 2022",  "id": {    "$numberLong": "1525483760942194688"  },  "lang": "en",  "retweet_count": 4,  "favorite_count": 23,  "full_text": "Melania Trump was never on the cover of Vogue because nobody wants to see her, think about her, or remember her ever again. \n\nOn the upside \nThere’s always Hustler, They would def let her do a porn shoot, no talking required.",  "vader_result": -0.5574,  "trend_name": "Vogue"}
  ]
  return tweets
} 

module.exports = {
    getDummyTrends,
    getDummyTweets
}