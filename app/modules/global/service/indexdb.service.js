
export default class IndexDbService {
  
  static $inject = ['$window'];

  _indexedDB = null;
  _IDBTransaction = null;
  _IDBKeyRange = null;

  constructor($window) {
    
    // refrence <https://developer.mozilla.org/zh-CN/docs/Web/API/IndexedDB_API/Using_IndexedDB>
    this._indexedDB       = $window.indexedDB 
                        || $window.mozIndexedDB 
                        || $window.webkitIndexedDB 
                        || $window.msIndexedDB;
    this._IDBKeyRange     = $window.IDBKeyRange 
                        || $window.webkitIDBKeyRange 
                        || $window.msIDBKeyRange;
    this._IDBTransaction  = $window.IDBTransaction 
                        || $window.webkitIDBTransaction 
                        || $window.msIDBTransaction;

    if (!this._indexedDB) 
      throw new Error('Your browser doesn\'t support a stable version of IndexedDB.');
  }

  open(database, version) {
    return this._indexedDB.open(database, version);
  }

  

}