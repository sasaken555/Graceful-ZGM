var express = require('express');
var router = express.Router();
var axios = require('axios');

/**
 * GET menu page
 * @param /home メニュー画面URL
 * @param req, res, next テンプレ
 * @return meni.ejs ホームページ
 */
router.get('/home', (req, res, next) => {
  res.render('menu', {
    title: 'メニュー画面'
  });
});


/**
 * GET home page
 * @param -
 * @return index.ejs ホームページ
 */
router.get('/list/datas', function(req, res, next) {
  // TODO: 店舗情報を渡して情報を一覧表示
  axios.get('http://localhost:3000/getMeshi')
    .then((response) => {
      res.render('index', {
        title: 'Express',
        items: response.data.rest
      });
    })
    .catch((err) => {
      console.log("Access Failed");;
      console.log(err);
    })
});

/**
 * 店舗情報を返すぐるなびラッパーAPI
 * @param lan 緯度
 * @param lng 経度
 * @return items 店舗情報配列
 */
router.get('/getMeshi', function(req, res, next) {
  // TODO: API実行結果を返す
  // var lat = req.params.lat;
  var lat = 35.7458385;
  // var lng = req.params.lng
  var lng = 139.6220203;
  var keyid = 'MY_KEY';
  paramURL = `https://api.gnavi.co.jp/RestSearchAPI/20150630/?keyid=${keyid}&format=json&latitude=${lat}&longitude=${lng}`;
  return axios.get(paramURL)
    .then((response) => {
      res.json(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
