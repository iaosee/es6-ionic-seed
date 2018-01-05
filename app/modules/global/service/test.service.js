
export default class TestService {

  static $inject = ['$filter'];

  constructor() {

    [ this.$filter,
    ] = [...arguments];

    this.name = 'testService';
  }

  sayHi() {
    console.log(this.name);
    console.log('Hello, every i am test service! ');
    console.log(this.getDate());
  }

  getDate() {
    return this.$filter('date')(new Date(), 'yyyy-MM-dd HH:mm:ss');
  }
}
