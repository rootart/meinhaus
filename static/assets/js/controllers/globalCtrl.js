(function(){
  angular.module('MH')
      .controller('GlobalCtrl', GlobalCtrl);

      GlobalCtrl.$inject = ['$scope', '$log', 'PropertiesService'];

      function GlobalCtrl($scope, $log, PropertiesService){
          $scope.prop = {};
          $scope.filters = {
            price: 1000000,
            salary: 70000,
            assets: 100000,
            zip_code: 8006,
            age: 27
          };

          $scope.resultsCount = 0;

          function loadData(){
            PropertiesService.query($scope.filters, function(data){
              $scope.prop.items = data.items;
            });
          }
        loadData();

        $scope.optimise = function(){
            loadData();
          }
        }

})();
