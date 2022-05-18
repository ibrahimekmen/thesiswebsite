const services = require('../services.js');

function render(req,res){
    trendName = req.params.trendName
    return Promise.all([services.getTrendByName(trendName),services.getMostPositiveTweet()]).then(data =>{
        res.render('trend',{
            trend: data[0][0],
            mostPos: data[1][0]
        });
    }).catch(err=>{
        console.error(err);
    });
}

module.exports = {
    render
}
