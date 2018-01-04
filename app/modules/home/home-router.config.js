
homeRouterConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function homeRouterConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('app.home', {
        url: '/home',
        views: {
          'menuContent': {
            template: require('./templates/home.html'),
            controller: 'HomeController',
            controllerAs: 'home',
          }
        }
      });
}
