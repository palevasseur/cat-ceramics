'use strict';

// todo: use app_config.json file instead of:
var configFile = {
    "configurations": {

    },
    "server_configurations" : {
        "test": {
            "catFilesRepoService": "http://78.193.5.74:8001",
            "catPhotosDirectory": "../../Ressources/PhotosLaBouille/"
        },
        "dev": {
            "catFilesRepoService": "http://78.193.5.74:8001",
            "catPhotosDirectory": "../../../../photo/Catalogue des ceramiques/"
        },
        "ds211": {
            "catFilesRepoService": "http://78.193.5.74:8001",
            "catPhotosDirectory": "../../../../photo/Catalogue des ceramiques/"
        }
    }
}

// todo: use angular.module instead of <script src="js/config.js"> in index.html
var Config = (function () {
    function Config() {
    }
    Config.prototype.load = function (environment) {
        if (environment != 'dev' && environment != 'test') {
            throw new Error('You need to specify a valid environment to the kernel: dev or test');
        }

        var config = {};
        //var configFile = require('../app_config.json');
        var globalConfig = configFile['configurations'];
        var askedConfig = configFile['server_configurations'][environment];

        for (var name in globalConfig) {
            config[name] = globalConfig[name];
        }
        for (var name in askedConfig) {
            config[name] = askedConfig[name];
        }

        return config;
    };
    return Config;
})();
