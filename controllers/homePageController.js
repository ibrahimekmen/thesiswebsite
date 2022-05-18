const services = require('../services.js');
const timeUtil = require('../utility/time.js');

function render(req,res){
    trendName = req.params.trendName
    const today = timeUtil.getLastDay().toISOString();
    const lastWeek = timeUtil.getLastWeek().toISOString();
    const lastMonth = timeUtil.getLastMonth().toISOString();
    const tr = "tr";
    const usa = "en"
    return Promise.all([
        services.getTodayTopTrends(tr),
        services.getTopTrends(tr,lastWeek),
        services.getTopTrends(tr,lastMonth),
        services.getTodayTopTrends(usa),
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
