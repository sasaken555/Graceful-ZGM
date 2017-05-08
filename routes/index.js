var express = require('express');
var router = express.Router();
var axios = require('axios');

/**
 * メニュー画面表示API
 * @param /home メニュー画面URL
 * @param req, res, next リクエスト/レスポンス格納変数
 * @return menu.ejs ホームページ
 */
router.get('/home', (req, res, next) => {
  res.render('menu', {
    title: 'メニュー画面'
  });
});


/**
 * 全店舗マーカー付き地図画面API
 * @param /list/map 地図画面URL
 * @param req, res, next リクエスト/レスポンス格納変数
 * @return GzmMap.ejs 地図画面
 */
router.get('/list/map', (req, res, next) => {
  res.render('GzmMap', {
    title: '地図表示画面'
  });
});

/**
 * 店舗一覧画面API
 * @param /list/datas 一覧画面URL
 * @param req, res, next リクエスト/レスポンス格納変数
 * @return index.ejs ホームページ
 */
router.get('/list/datas', function(req, res, next) {
  // TODO: 店舗情報を渡して情報を一覧表示
  res.render('GzmList', {
    title: '一覧画面'
  });
});


/**
* 店舗情報取得API ぐるなびAPIのラッパー
* @param /getDatas/lat/lng 店舗情報取得URL lat:緯度 lng:経度
* @param req, res, next リクエスト/レスポンス格納変数
* @return resultSet ぐるなびAPIから取得した店舗情報を格納するJSONデータ
*/
router.get('/getDatas/lat/lng', (req, res, next) => {
  // TODO: AJAXでAPIからJSONを取得する処理
  res.json({
    name: "MidNightRest",
    opentime: "PM 17:00 - AM 05:00",
    midnight: true
  });
});

/**
 * 地図取得API
 * @param /getMap/lat/lng 一覧画面URL lat:緯度 lng:経度
 * @param req, res, next リクエスト/レスポンス格納変数
 * @return mapNode 地図のDOM要素
 */
 router.get('/getMap/lat/lng', (req, res, next) => {
   res.send("Map");
 });


/**
 * 店舗情報を返すぐるなびラッパーAPI 過去分
 * @param lan 緯度
 * @param lng 経度
 * @return items 店舗情報配列
 */
/*
router.get('/getMeshi', function(req, res, next) {
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
*/


/**
 * ログイン画面表示API
 * @param /login ログイン画面URL
 * @param req, res, next リクエスト/レスポンス格納変数
 * @return menu.ejs ホームページ
 */
router.get('/login', (req, res, next) => {
  // TODO: ログインページを実装
  res.render('menu', {
    title: 'メニュー画面'
  });
});

module.exports = router;
