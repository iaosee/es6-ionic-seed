

listRouterConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
export default function listRouterConfig($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('app.list', {
      url: '/list',
      views: {
        'list': {
          template: require('./list.html'),
          controller: 'ListController',
          controllerAs: 'vm',
        }
      }
    });
}
