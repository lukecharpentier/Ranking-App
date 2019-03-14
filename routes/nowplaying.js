var express = require('express');
var router = express.Router();
const request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  request('https://api.themoviedb.org/3/movie/now_playing?api_key=b53152aa7758774efd9a414252e52d34',{json: true},(err, res2, body) => {
    if (err) {return console.log(err);}
    console.log(body);
    res.render('nowplaying', { title: 'Now Playing', body: body.results });
  });
});

module.exports = router;
