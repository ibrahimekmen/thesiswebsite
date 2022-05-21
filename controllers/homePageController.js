const services = require('../services.js');
const timeUtil = require('../utility/time.js');

function render(req,res){
    // her trendin ve tweetin created_at attribute u date e çevrildemediği için sıkıntı çıkıyor toISOString() eklenebilir
    trendName = req.params.trendName
    const today = timeUtil.getLastDay();
    const lastWeek = timeUtil.getLastWeek();
    const lastMonth = timeUtil.getLastMonth();
    const tr = "tr";
    const usa = "en"
    return Promise.all([
        services.getTopTrends(tr,today),
        services.getTopTrends(tr,lastWeek),
        services.getTopTrends(tr,lastMonth),
        services.getTopTrends(usa,today),
        services.getTopTrends(usa,lastWeek),
        services.getTopTrends(usa,lastMonth),
        services.getFavoriteTweets(tr,today),
        services.getFavoriteTweets(tr,lastWeek),
        services.getFavoriteTweets(tr,lastMonth),
        services.getFavoriteTweets(usa,today),
        services.getFavoriteTweets(usa,lastWeek),
        services.getFavoriteTweets(usa,lastMonth)]).then(data =>{
        res.render('home2',{
            trendTrToday: data[0],
            trendTrLastWeek: data[1],
            trendTrLastMonth: data[2],
            trendUsaToday: data[3],
            trendUsaLastWeek: data[4],
            trendUsaLastMonth: data[5],
            tweetTrToday: data[6],
            tweetTrLastWeek: data[7],
            tweetTrLastMonth: data[8],
            tweetUsaToday: data[9],
            tweetUsaLastWeek: data[10],
            tweetUsaLastMonth: data[11]
        });
    }).catch(err=>{
        console.error(err);
    });
}

module.exports = {
    render
}
