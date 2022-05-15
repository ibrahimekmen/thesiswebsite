const express = require("express");
const bodyParser = require("body-parser");
const services = require('./services.js');
const dummyData = require('./dummyData.js');
const app = express();
const path = require('path');

app.use('/static', express.static(path.join(__dirname, 'public')))


app.set('view engine','pug');

app.get('/', (req, res) => {
    res.render('home',{
        trends : dummyData.getDummyTrends(),
        tweets : dummyData.getDummyTweets()
    });
})

app.get('/trend/:trendName', (req, res) => {
    res.render('trend',{
        trendName : req.params.trendName
    });
})

app.use(function(req, res, next) {
    var error404 = new Error('Route Not Found');
    error404.status = 404;
    next(error404);
});



module.exports = app.listen(process.env.PORT || 3000);