var MH = angular.module('MH', [
  'ui.router',
  'nouislider',
  'ngResource'
]);

MH.config(['$interpolateProvider', function($interpolateProvider) {
  $interpolateProvider.startSymbol('{[');
  $interpolateProvider.endSymbol(']}');
}]);

MH.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/properties");

  $stateProvider
    .state("properties", {
        url: "/properties",
        templateUrl: "/static/partials/properties.html",
        controller: "PropertiesCtrl"
      }
    )
    .state('properties.detail', {
      url: "/properties/:propId",
      templateUrl: "/static/partials/property-detail.html",
      controller: "PropertyDetailsCtrl"
    })
    .state('properties.filter', {
      url: "/properties/filter",
      templateUrl: "/static/partials/filter-results.html"
    })

});
