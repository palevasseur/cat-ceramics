'use strict';

// todo: use app_config.json file instead of:
var configFile = {
    "current":"ds211",
    "configurations": {

    },
    "server_configurations" : {
        "pc": {
            "catFilesRepoService": "http://localhost:8001"
        },
        "ds211": {
            "catFilesRepoService": "http://78.193.5.74:8001"
        }
    }
}

// todo: use angular.module instead of <script src="js/config.js"> in index.html
var Config = (function () {
    function Config() {
    }
    Config.prototype.load = function () {
        var environment = configFile.current;

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
