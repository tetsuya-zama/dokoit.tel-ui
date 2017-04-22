import {base64Encode,base64Decode} from './base64'

/*
* ローカルストレージのKeyのプレフィックス
*/
const LOCAL_STORAGE_PREFIX = "kyo-do.co.";

/**
* localStorageへ値をセットする
* @param {string} key キー
* @param {Object} value セットするオブジェクト
* @return {int} 成功すれば0
*/
export function setToStorage(key,value){
  localStorage.setItem(LOCAL_STORAGE_PREFIX + key,base64Encode(JSON.stringify(value)));
  return 0;
}
/**
* localStorageから値を取得する
* @param {string} key キー
* @return {Object} localStorageに保存されたオブジェクト
*/
export function getFromStorage(key){
  return JSON.parse(base64Decode(localStorage.getItem(LOCAL_STORAGE_PREFIX + key)));
}
/**
* localStorageから値を削除する
* @param {string} key キー
* @return {int} 成功すれば0
*/
export function removeFromStorage(key){
  localStorage.removeItem(LOCAL_STORAGE_PREFIX + key);
  return 0;
}

/**
* localStorage上にキーが存在するかを確認する
* @param {string} key キー
* @return {boolean} 存在すればTrue
*/
export function existsKeyOnStorage(key){
  return localStorage.getItem(LOCAL_STORAGE_PREFIX + key) !== null;
}
