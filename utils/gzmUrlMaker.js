/**
 * ぐるなびWebAPIのリクエスト用URLを組み立てる
 * makeGrnvUrl(lat, lng)
 * @param lat 緯度
 * @param lng 経度
 * @return grnvUrl ぐるなびWebAPIのリクエストURL
 */
export function makeGrnvUrl(lat, lng) {
  grnvUrl = '';
  var key = 'YOUR_KEY';
  //  TODO: key, format, lat, lng, rangeを含めて組み立てる
  return grnvUrl;
}


/**
 * Static Map APIのリクエスト用URLを組み立てる
 * makeStaticMapUrl(lat, lng)
 * @param lat 緯度
 * @param lng 経度
 * @return staticMapUrl ぐるなびWebAPIのリクエストURL
 */
export function makeStaticMapUrl(lat, lng) {
  staticMapUrl = '';
  var key = 'YOUR_KEY';
  //  TODO: center(lat,lng), zoom, size, markers, keyを含めて組み立てる
  return staticMapUrl;
}
