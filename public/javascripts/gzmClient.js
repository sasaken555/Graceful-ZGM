/**
 * 初期実行関数
 * 現在地取得から地図要素のDOMの埋め込みを受け持つ
 * initFunc()
 * @param -
 * @return mapRendered 地図作成有無を表す 0:正常, 0以外:以上
 */
function initFunc() {
  console.log("Ignite initFunc()");
  /*
    地図描画可否変数
    0: 正常に完了
    1: 地図描画不可
    9: 未実施
  */
  var mapRendered = 9;

  // 緯度経度取得 スタブ取得時は引数に "1" を入れておく
  getPosition(1);
  // 地図のDOM要素を取得
  getZgmMap();
  // TODO: DOM要素を埋め込む
  // ここに埋め込む!!

  return mapRendered;
}

/**
 * 緯度・経度を取得する
 * getPosition(devFlg)
 * @param devFlg 本番フラグ 0:geoLocationAPI使用, 1:スタブ使用
 * @return location 緯度経度オブジェクト
 */
function getPosition(devFlg) {
  var ENV_PRD = 0;
  var ENV_DEV = 1;
  var location = {};

  if (devFlg === ENV_PRD) {
    // TODO: implement later...
    return location;
  }
  else if (devFlg === ENV_DEV) {
    // TODO: access stub
    return location;
  }
  else {
    // TODO: return error
    return location;
  }
}


/**
 * 地図のDOM要素を取得する
 * 店舗情報取得, 地図取得を担当
 * getZgmMap(lat, lng)
 * @param lat 緯度
 * @param lng 経度
 * @return mapNode 地図のDOM要素
 */
function getZgmMap(lat, lng) {
  var mapNode = null;
  // TODO: 以下２つのAPIへの取得を順番に非同期で実施
  // TODO: /getDatas/lat/lng にリクエストして店舗情報をサーバー側で取得させる
  // TODO: /getMap/lat/lng にリクエストして先に取得した情報をもとに地図を取得
  return mapNode;
}
