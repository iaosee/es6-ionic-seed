

export default class ToolsService {
  static $inject = [];

  constructor() {

  }

  functionBeforeHook(fn, hook) {
    return function () {
      if (hook.apply(this, arguments) === false) return false;
      return fn.apply(this, arguments);
    }
  }

  functionAfterHook(fn, hook) {
    return function () {
      if (fn.apply(this, arguments) === false) return false;
      return hook.apply(this, arguments);
    }
  }

/*
  Function.prototype.before = function (fn) {
    var _self = this;
    return function () {
      if (fn.apply(this, arguments) === false) return false;
      return _self.apply(this, arguments);
    }
  }
*/

  objKeysToLower(origin) {
    if (!origin) {
      return origin;
    }

    if (typeof origin !== 'object') {
      return origin;
    }
    let target, newKey;

    if (angular.isArray(origin)) {
      target = [];
      origin.forEach((arrayItem) => {
        target.push(this.objKeysToLower(arrayItem));
      });
    }
    else {
      target = {};
      Object.keys(origin).forEach((objectKey) => {
        newKey = objectKey[0].toLowerCase() + objectKey.slice(1);

        target[newKey] = typeof origin[objectKey] === 'object'
                       ? this.objKeysToLower(origin[objectKey])
                       : target[newKey] = origin[objectKey];
      });
    }

    return target;
  }

}
