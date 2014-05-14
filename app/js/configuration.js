/// <reference path="../../typings/node/node.d.ts" />
var Configuration = (function () {
    function Configuration() {
    }
    Configuration.prototype.load = function () {
        var configFile = require('../app_config.json');
        var environment = configFile.current;

        var config = {};
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
    return Configuration;
})();

module.exports = Configuration;
//# sourceMappingURL=configuration.js.map
