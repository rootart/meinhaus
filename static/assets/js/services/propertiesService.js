'use strict';
(function(){
  angular.module('MH')
      .factory('PropertiesService', PropertiesService);

  PropertiesService.$inject = ['$resource'];

  function PropertiesService($resource){
    var AUTH_KEY = '622f94cee49feea3a35182f63a21273e';
    var url = '/api/:zip_code/:price/:assets/:salary/:age';
    return $resource(url, {
      zip_code: '@zipCode',
      price: '@price',
      salary: '@salary',
      assets: '@assets',
      age: '@age'

    }, {
      query: {
        method: 'GET',
        headers: {
          'auth': AUTH_KEY
        }
      }
    })
  }

})();
