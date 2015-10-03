(function(){
    angular.module('MH')
      .controller('PropertyDetailsCtrl', PropertyDetailsCtrl);

      PropertyDetailsCtrl.$inject = ['$scope', '$http', '$stateParams', '$sce'];

      function PropertyDetailsCtrl($scope, $http, $stateParams, $sce){
          var propId = $stateParams.propId;
          $http.get('/api/real-estates/'+propId)
              .then(function(response){
                $scope.propObj = response.data;
              });
       }


})();
