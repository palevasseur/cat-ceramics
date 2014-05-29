/// <reference path="../../typings/node/node.d.ts" />
//var fs = require('fs');
var appConfig = {
    "current": "ds211",
    "pc": {
        "catFilesRepoService": "http://localhost:8001"
    },
    "ds211": {
        "catFilesRepoService": "http://78.193.5.74:8001"
    }
};

var Config = (function () {
    function Config() {
        //var appConfig = require('../config.json');
        var currentConfig = appConfig[appConfig["current"]];
        for (var name in currentConfig) {
            this[name] = currentConfig[name];
        }
    }
    return Config;
})();

module.exports = Config;
//# sourceMappingURL=config.js.map
