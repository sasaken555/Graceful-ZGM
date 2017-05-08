var express = require('express');
var router = express.Router();

/**
 * 位置情報スタブAPI geoLocationAPIの代替API
 * @param /getLocation 位置情報取得スタブのURL
 * @param req, res, next リクエスト/レスポンス格納変数
 * @return stubLocation 緯度経度のオブジェクト(JSON形式)
 */
router.get('/getLocation', (req, res, next) => {
  const stubLocation = { lat: 35, lng: 135 };
  res.json(stubLocation);
});

module.exports = router;
