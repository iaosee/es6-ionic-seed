

export default class ToolsService {
  static $inject = [];

  constructor() {

  }

  objKeysToLower(origin) {
    if (!origin) {
      return origin;
    }

    if (typeof origin !== 'object') {
      return origin;
    }
    let target, newKey;

    if (angular.isArray(origin)) {
      console.log(objKeysToLower);
      target = [];
      origin.forEach((arrayItem) => {
        target.push(this.objKeysToLower(arrayItem));
      });
    }
    else {
      target = {};
      Object.keys(origin).forEach((objectKey) => {
        newKey = objectKey[0].toLowerCase() + objectKey.slice(1);

        typeof origin[objectKey] === 'object'
          ? target[newKey] = this.objKeysToLower(origin[objectKey])
          : target[newKey] = origin[objectKey];
      });
    }

    return target;
  }

}