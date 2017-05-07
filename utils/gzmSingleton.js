/*
  モジュールパターンとシングルトンパターンで
  店舗情報の入ったJSONを扱うインスタンスを定義する
*/

// 名前空間の準備
let GZM_SINGLETON = GZM_SINGLETON || {};

// モジュールを定義
// 無名関数で作成することで、メソッドをプライベートに設定
GZM_SINGLETON.datas = () => {
  // TODO: メソッドを定義

  // TODO: 外部に公開するAPIを作成して返す

}


/**
 * 全店舗情報を格納・返却するシングルトンを作成する
 * gzmSingleton()
 * @param -
 * @return -
 */
function gzmSingleton() {
  // some code here...
  return GZM_SINGLETON;
}
