/// <reference path="../../typings/angularjs/angular.d.ts" />

angular.module('catCeram.controllers', [])
    .controller('accueilCtrl', function($scope, $http, configuration)
    {
        var CatResp = $http.get(configuration.catFilesRepoService+"/stat");
        CatResp.success(function (data, status, headers, config) {
            $scope.stat = data;
        });
        CatResp.error(function (data, status, headers, config) {
            console.log("ERROR data = " + JSON.stringify(data));
        });
    })

   .controller('catalogueCtrl', function($scope, $http, configuration, collectionsPieces)
   {
       // TODO: catalogueCtrl called twice !
       var CatResp = $http.get(configuration.catFilesRepoService+"/list");
       $scope.listPromise = CatResp;
       CatResp.success(function (data, status, headers, config) {
           $scope.ceramiques = data;
           $scope.ceramiques.photoPath = configuration.catFilesRepoService;

           // set selections TODO:optimize
           var currentSelection = collectionsPieces.getCurrentSelection();
           angular.forEach($scope.ceramiques, function(ceramique) {
                   ceramique.collection = currentSelection.IsSelected(ceramique.refPiece);
               }
           )
       });
       CatResp.error(function (data, status, headers, config) {
           console.log("ERROR config=" + config.url + ", data = " + data);
       });

       $scope.selectionChanged = function(item) {
           console.log("selectionChanged = " + item);
           var currentSelection = collectionsPieces.getCurrentSelection();
           currentSelection.select(item); // TODO: check if checkbox selected
       }

       $scope.UnveilImg = function () {
           // todo : remove timeout workaround
           window.setTimeout(function () {
               $("img")['unveil'](200); // better $("img").unveil(200); but ts error = undefined jquery method
           }, 3000);
       }
    })

   .controller('selectionsCtrl', function($scope, collectionsPieces)
   {
        $scope.selections = collectionsPieces.selections;
   })