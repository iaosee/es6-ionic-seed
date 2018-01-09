
homeRouterConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function homeRouterConfig($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('app.home', {
      url: '/home',
      views: {
        'home': {
          template: require('./home.html'),
          controller: 'HomeController',
          controllerAs: 'vm',
        }
      },
     /*  templateProvider: ['$q', ($q) => {
        let defer = $q.defer();
        require.ensure([''], () => {
          defer.resolve(require('./home.html'));
        });

        return defer.promise;
      }], */
      /* resolve: ['$q', '$ocLazyLoad', ($q, $ocLazyLoad) => {
        let defer = $q.defer();
        require.ensure([], () => {
          let module = require('./home.module'); (angular);
          console.log(module);
          var ret = $ocLazyLoad.inject('app.home');
          console.log(ret);
          defer.resolve(module);
        });
        return defer.promise;
      }]  */
    });
}
