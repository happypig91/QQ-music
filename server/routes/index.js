var express = require('express');
var router = express.Router();
const bodyParser=require('body-parser');
const bodyParserMiddleware=bodyParser.urlencoded({extended:false});
const {Api,Login}=require('../controller/user')
const {SwiperList}=require('../controller/list')
const {getMusicLists}=require('../controller/lists');
const { AddMoview, MovieList } = require('../controller/movie')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/api',Api);
router.post('/user/login',bodyParserMiddleware,Login);
//轮播图的接口
router.get('/getSwiper',SwiperList)
//音乐列表的接口
router.get('/getmusiclist',getMusicLists);

router.get('/getMovieList', MovieList)
router.post('/addMovie',bodyParserMiddleware, AddMoview)
module.exports = router;
