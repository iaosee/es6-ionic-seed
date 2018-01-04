
export default class TestService {
  constructor() {
    console.log('Hello, i am test service');

    this.name = 'testService';
  }
  sayHi() {
    console.log(this.name);
    console.log('Hello, every i am test service! ');
  }
}
