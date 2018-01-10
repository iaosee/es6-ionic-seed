
httpConfig.$inject = ['$httpProvider'];

export default function httpConfig($httpProvider) {

  $httpProvider.defaults.headers.common = {
    
  };

  $httpProvider.interceptors.push(['$q', 'authService',
    function ($q, authService) {
      return {
        'request': function (config) {
          /*if( config.data ) {
            var data = angular.copy(config.data),
              queryString = '',
              tmp = [];

            // 链接请求参数, 改为form-urlencoded形式
            if( typeof data === 'string' ) {
              queryString += data;
            }
            else {
              for( var item in data ) {
                tmp.push(encodeURIComponent(item) + '=' + encodeURIComponent(data[item]));
              }
              queryString += tmp.join('&');
            }
            config.data = queryString;
            config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
          }*/

          if (config.data) {
            console.log(config.data);
            var timestamp = authService.getTimestamp();
            var sign = authService.getSign(config.data, timestamp);
            config.headers['timestamp'] = timestamp;
            config.headers['sign'] = sign;
            /*                config.headers = {
                              'Content-Type': 'application/x-www-form-urlencoded',
                              timestamp: timestamp,
                              sign: sign
                            };
                            config.transformRequest = function(obj) {
                              var str = [];
                              for (var p in obj) {
                                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                              }
                              return str.join("&");
                            };*/
          }
          config.headers['token'] = authService.getToken() ? authService.getToken() : '';
          console.log(config);
          return config;
        }
      }
    }]);

  $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
  $httpProvider.defaults.withCredentials = true;

}
