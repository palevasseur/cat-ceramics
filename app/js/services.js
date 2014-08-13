/// <reference path="../../typings/angularjs/angular.d.ts" />
// APP DEFINITIONS (include using <script> tag in index.html)
/// <reference path="../config_app.ts" />
/// <reference path="./SelectionPieces.ts" />
angular.module('catCeram.services', []).factory('configuration', function () {
    return new Config();
}).factory('collectionsPieces', function () {
    var collectionsList = new CollectionPiecesManager();
    collectionsList.createSelection("collection A"); // num 0
    collectionsList.createSelection("collection B"); // num 1
    collectionsList.createSelection("pièces sans numéro"); // num 2
    return collectionsList;
});
//# sourceMappingURL=services.js.map
