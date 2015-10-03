'use strict';
(function(){
  angular.module('MH')
      .factory('PropertiesService', PropertiesService);

  PropertiesService.$inject = ['$resource'];

  function PropertiesService($resource){
    var AUTH_KEY = '622f94cee49feea3a35182f63a21273e';
    var url = '/api';
    return $resource(url, {}, {
      query: {
        method: 'GET',
        headers: {
          'auth': AUTH_KEY
        }
      }
    })
  }

})();
