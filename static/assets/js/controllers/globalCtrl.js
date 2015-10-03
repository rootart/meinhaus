(function(){
  angular.module('MH')
      .controller('GlobalCtrl', GlobalCtrl);

      GlobalCtrl.$inject = ['$scope', '$log', 'PropertiesService'];

      function GlobalCtrl($scope, $log, PropertiesService){
          $scope.prop = {};
          $log.info('Init global ctrl...');
          var props = PropertiesService.query(function(data){
              $log.info(data);

              $scope.prop.items = data.items;
          });
      }
})();
