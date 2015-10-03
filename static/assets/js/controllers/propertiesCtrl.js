(function(){
    angular.module('MH')
      .controller('PropertiesCtrl', PropertiesCtrl);

      PropertiesCtrl.$inject = ['$scope', '$http'];

      function PropertiesCtrl($scope, $http){
          console.log('Initialise properties controller...');

          $scope.mortgagePeriod = 20;

          $scope.getMaxMortgage = function(propObj){
            return propObj.sellingPrice * 0.75;
          };

          $scope.maintCost = function(propObj){
            return propObj.sellingPrice * 0.01;
          };

          $scope.interestValue = function(propObj){
            return $scope.getMaxMortgage(propObj) * 0.05;
          };

          $scope.amortAmount = function(propObj){
            return (propObj.sellingPrice * 0.1)/$scope.mortgagePeriod;
          };

          $scope.calculateAffordability = function(propObj){
            var cost = $scope.amortAmount(propObj) + $scope.maintCost(propObj) + $scope.interestValue(propObj);
            return parseFloat((cost/$scope.filters.salary).toFixed(2));
          }

       }


})();
