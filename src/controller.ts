import MyService from './service'
// Uncomment the line below to "fix" the issue
// var foo = MyService;

export default class MyController {
  hello: string;
  constructor($myService: MyService) {
    this.hello = $myService.hello();
  }
}