'use strict';

// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/info', {templateUrl: 'partials/info.html', controller: 'accueilCtrl'});
  $routeProvider.when('/catalogue', {templateUrl: 'partials/catalogue.html', controller: 'catalogueCtrl'});
  $routeProvider.when('/publier', {templateUrl: 'partials/publier.html', controller: 'accueilCtrl'});
  $routeProvider.otherwise({redirectTo: '/catalogue'});
}]);
