/// <reference path="../../typings/angularjs/angular.d.ts" />

angular.module('catCeram.filters', []).
  filter('interpolate', ['version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    }
  }]);
