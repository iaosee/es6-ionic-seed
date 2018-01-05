
ocLazyLoadConfig.$inject = ['$ocLazyLoadProvider'];

export default function ocLazyLoadConfig($ocLazyLoadProvider) {
  $ocLazyLoadProvider.config({
    debug: true,
    events: true,
    modules: [
      {
        name: 'app.home',
        files: [
          'home.modules.js'
        ]
      },
      {
        name: 'app.common',
        files: [
          'common.modules.js'
        ]
      },
      {
        name: 'app.global',
        files: [
          'global.modules.js'
        ]
      },
    ],
  });
}
