const express = require("express");
const bodyParser = require("body-parser");
const services = require('./services.js');
const dummyData = require('./dummyData.js');
const trendPageController = require('./controllers/trendPageController.js');
const homePageController = require('./controllers/homePageController.js');
const app = express();
const path = require('path');

app.use('/static', express.static(path.join(__dirname, 'public')))


app.set('view engine','pug');

app.get('/', (req, res) => {
    homePageController.render(req,res);
})

app.get('/trend', (req, res) => {
    res.render('home',{
        trends : dummyData.getDummyTrends(),
        tweets : dummyData.getDummyTweets()
    });
})


app.get('/trend/:trendName', (req, res) => {
    trendPageController.render(req,res)
})

app.use(function(req, res, next) {
    var error404 = new Error('Route Not Found');
    error404.status = 404;
    next(error404);
});

app.use(function(err, req, res, next) {
    res.locals.message = err.message;
    // render the error page
    res.status(err.status || 500);
    res.render('error',{
        message: err.message,
        error: err
    });
  });

module.exports = app.listen(process.env.PORT || 3000);