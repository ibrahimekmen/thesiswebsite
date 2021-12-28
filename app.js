const express = require("express");
const bodyParser = require("body-parser");

const app = express();


app.set('view engine','pug');

app.get('/', (req, res) => {
    res.render('home',{
        gender: "Women",
    });
})


  

module.exports = app.listen(process.env.PORT || 3001);