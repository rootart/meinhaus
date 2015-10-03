(function(){
    angular.module('MH')
      .controller('PropertiesCtrl', PropertiesCtrl);

      PropertiesCtrl.$inject = ['$scope', '$http'];

      function PropertiesCtrl($scope, $http){
          console.log('Initialise properties controller...');
       }

})();
