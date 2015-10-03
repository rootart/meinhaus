var MH = angular.module('MH', [
  'ui.router',
  'nouislider'
]);

MH.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/properties");

  $stateProvider
    .state("properties", {
        url: "/properties",
        templateUrl: "../../partials/properties.html",
        controller: 'PropertiesCtrl'
      }
    )
    .state('properties.filter', {
      url: "/properties/filter",
      templateUrl: "../../partials/filter-results.html"
    })
    .state('properties.detail', {
      url: "/list",
      templateUrl: "../../partials/property-detail.html"
    })
});
