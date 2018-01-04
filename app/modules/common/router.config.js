

run.$inject = ['$stateProvider', '$urlRouterProvider']
export default function run($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('app', {
			url: '/app',
			abstract: true,
			template: require('../../templates/menu.html'),
			// controller: 'AppCtrl'
		})
		.state('app.playlists', {
			url: '/playlists',
			views: {
				'menuContent': {
					template: require('../../templates/playlists.html'),
					// controller: 'PlaylistsCtrl'
				}
			}
		})
		.state('app.single', {
			url: '/playlists/:playlistId',
			views: {
				'menuContent': {
					template: require('../../templates/playlist.html'),
					// controller: 'PlaylistCtrl'
				}
			}
		});
	$urlRouterProvider.otherwise('/app/playlists');
}