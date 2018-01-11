

httpConfig.$inject = ['$httpProvider'];

export default function httpConfig($httpProvider) {

  // $httpProvider.defaults.headers.common = {};
  // $httpProvider.defaults.useXDomain = true;
  // $httpProvider.defaults.withCredentials = true;
  // delete $httpProvider.defaults.headers.common['X-Requested-With'];

  $httpProvider.interceptors.push(httpInterceptor);

  httpInterceptor.$inject = ['$q'];
  function httpInterceptor($q) {
    return {
      request(config) {

        if (config.data) {
          let params = angular.copy(config.data)
            , queryString;

          // 链接请求参数, 改为form-urlencoded形式
          queryString = typeof params !== 'object'
                      ? params.toString()
                      : params.slice
                        ? params.toString()
                        : buildQueryString(params);

          config.data = queryString;
          config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
        }

        // config.transformRequest = buildQueryString;

        return config;
      },

      requestError(rejection) {

        return $q.reject(rejection);
      },

      response(response) {

        return response;
      },

      responseError(rejection) {

        return $q.reject(rejection);
      }
    }
  }

  function buildQueryString(params) {
    let queryArray = [];

    Object.keys(params).map(item => {
      queryArray.push(encodeURIComponent(item) + '=' + encodeURIComponent(params[item]));
    });

    return queryArray.join('&');
  }

}
