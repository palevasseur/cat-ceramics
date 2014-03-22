'use strict';

/* Controllers */
//var CeramWebServiceUrl = "http://192.168.1.14:8001";
var CeramWebServiceUrl = "http://localhost:8001";

angular.module('myApp.controllers', [])
    .controller('accueilCtrl', function($scope, $http)
    {
        var CatResp = $http.get(CeramWebServiceUrl+"/stat");
        CatResp.success(function (data, status, headers, config) {
            console.log("CatResp = " + data);
            $scope.stat = data;
        });
        CatResp.error(function (data, status, headers, config) {
            console.log("ERROR data = " + data);
            //$scope.data = data;
        });
    })

   .controller('catalogueCtrl', function($scope, $http, CollectionsPieces)
   {
       // TODO: catalogueCtrl called twice !
       var CatResp = $http.get(CeramWebServiceUrl+"/list");
       CatResp.success(function (data, status, headers, config) {
           console.log("CatResp list = " + data);
           $scope.ceramiques = data;

           // set selections TODO:optimize
           var currentSelection = CollectionsPieces.getCurrentSelection();
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
           var currentSelection = CollectionsPieces.getCurrentSelection();
           currentSelection.select(item); // TODO: check if checkbox selected
       }
    })

   .controller('selectionsCtrl', function($scope, CollectionsPieces)
   {
        $scope.selections = CollectionsPieces.selections;
   })