
guideRouterConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function guideRouterConfig($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('app.guide', {
      url: '/guide',
      views: {
        'home': {
          template: require('./guide.html'),
          controller: 'GuideController',
          controllerAs: 'vm',
        }
      }
    });
}
