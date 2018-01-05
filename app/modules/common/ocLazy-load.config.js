
ocLazyLoadConfig.$inject = ['$ocLazyLoadProvider'];

export default function ocLazyLoadConfig($ocLazyLoadProvider) {
  $ocLazyLoadProvider.config({
    debug: true,
    events: true,
    modules: [
      {
        name: 'app.home',
        files: [
          
        ]
      }
    ],
  });
}