/// <reference path="../../typings/angularjs/angular.d.ts" />

angular.module('catCeram.directives', [])
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
