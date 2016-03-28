import app from './app'
import MyController from './controller';

app.config((
  $urlRouterProvider: ng.ui.IUrlRouterProvider,
  $stateProvider: ng.ui.IStateProvider
) => {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      template: '<h1>{{$ctrl.hello}}</h1',
      controller: MyController,
      controllerAs: '$ctrl'
    })
});