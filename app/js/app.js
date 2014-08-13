/// <reference path="../../typings/angularjs/angular.d.ts" />
angular.module('catCeram', [
    'ngRoute',
    'catCeram.filters',
    'catCeram.services',
    'catCeram.directives',
    'catCeram.controllers',
    'cgBusy'
]).config([
    '$routeProvider', function ($routeProvider) {
        $routeProvider.when('/info', { templateUrl: 'partials/info.html', controller: 'accueilCtrl' });
        $routeProvider.when('/catalogue', { templateUrl: 'partials/catalogue.html', controller: 'catalogueCtrl' });
        $routeProvider.when('/publier', { templateUrl: 'partials/publier.html', controller: 'accueilCtrl' });
        $routeProvider.otherwise({ redirectTo: '/catalogue' });
    }]);
//# sourceMappingURL=app.js.map
