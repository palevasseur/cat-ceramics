'use strict';

/* Services */

angular.module('myApp.services',[]).
    factory('configuration', function () {
        return new Config();
    }).
    factory('collectionsPieces', function(){
        var collectionsList = new CollectionPiecesManager();
        collectionsList.createSelection("collection A"); // num 0
        collectionsList.createSelection("collection B"); // num 1
        collectionsList.createSelection("pièces sans numéro"); // num 2
        return collectionsList;
    })
