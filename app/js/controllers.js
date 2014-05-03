'use strict';

/* Controllers */

/*var config = new Object();
config.photosRepositoryUrl = 'http://78.193.5.74:8001';
config.photosDirectory = '../../../../photo/Catalogue des ceramiques/';
var CeramWebServiceUrl = config.photosRepositoryUrl;*/

//var CeramWebServiceUrl = "http://78.193.5.74:8001";
//var CeramWebServiceUrl = "http://192.168.1.14:8001";
//var CeramWebServiceUrl = "http://localhost:8001";

angular.module('myApp.controllers', [])
    .controller('accueilCtrl', function($scope, $http, configuration)
    {
        var CatResp = $http.get(configuration.catFilesRepoService+"/stat");
        CatResp.success(function (data, status, headers, config) {
            //console.log("CatResp = " + data);
            $scope.stat = data;
        });
        CatResp.error(function (data, status, headers, config) {
            console.log("ERROR data = " + JSON.stringify(data));
            //$scope.data = data;
        });
    })

   .controller('catalogueCtrl', function($scope, $http, configuration, collectionsPieces)
   {
       // TODO: catalogueCtrl called twice !
       var CatResp = $http.get(configuration.catFilesRepoService+"/list");
       CatResp.success(function (data, status, headers, config) {
           //console.log("CatResp list = " + data);
           $scope.ceramiques = data;

           // set selections TODO:optimize
           var currentSelection = collectionsPieces.getCurrentSelection();
           angular.forEach($scope.ceramiques, function(ceramique) {
                   //console.log("ceramique.refPiece = " + ceramique.refPiece);
                   ceramique.collection = currentSelection.IsSelected(ceramique.refPiece);
               }
           )
       });
       CatResp.error(function (data, status, headers, config) {
           console.log("ERROR data = " + data);
           //$scope.data = data;
       });

       $scope.selectionChanged = function(item) {
           console.log("selectionChanged = " + item);
           var currentSelection = collectionsPieces.getCurrentSelection();
           currentSelection.select(item); // TODO: check if checkbox selected
       }
    })

   .controller('selectionsCtrl', function($scope, collectionsPieces)
   {
        $scope.selections = collectionsPieces.selections;
   })