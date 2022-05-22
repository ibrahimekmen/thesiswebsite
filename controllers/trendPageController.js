const services = require('../services.js');

function render(req,res){
    trendName = req.params.trendName;
    return Promise.all([services.getTrendByName(trendName),services.getMostPositiveTweet(trendName),services.getMostNegativeTweet(trendName)]).then(data =>{
        if (data[0][0] == null){
            res.redirect('/error')
        }
        res.render('trend',{
            trend: data[0][0],
            mostPos: data[1][0]['full_text'],
            mostNeg: data[2][0]['full_text']
        });
    }).catch(err=>{
        console.error(err);
    });
}

module.exports = {
    render
}
