import app from './app'

export default class MyService {
  hello() {
    return 'hello';
  }
}

app.service('$myService', MyService);
