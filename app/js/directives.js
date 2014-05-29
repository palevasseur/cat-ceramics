'use strict';

/* Directives */


angular.module('myApp.directives', [])
    .directive('myRepeatDirective', function() {
        return function(scope, element, attrs) {
            //angular.element(element).css('color','blue');
            if (scope.$last) {
                //UnveilImg();
                angular.element(element).css('color', 'red');
            }
        };
    })
    .directive('appVersion', ['version', function(version) {
        return function(scope, elm, attrs) {
            elm.text(version);
    };
}]);
