


routerConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

export default function routerConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  // $locationProvider.html5Mode(true);

  $stateProvider
    .state('app', {
      url: '/app',
      abstract: true,
      template: require('./templates/tabs.html'),
      controller: 'CommonController',
      controllerAs: 'vm'
    });

  $urlRouterProvider.otherwise('/app/home');
}

