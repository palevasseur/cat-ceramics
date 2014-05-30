var Config = (function () {
    function Config() {
        this.appConfig = {
            "current": "ds211",
            "pc": {
                "catFilesRepoService": "http://localhost:8001"
            },
            "ds211": {
                "catFilesRepoService": "http://78.193.5.74:8001"
            }
        };
        var currentConfig = this.appConfig[this.appConfig["current"]];
        for (var name in currentConfig) {
            this[name] = currentConfig[name];
        }
    }
    return Config;
})();
//# sourceMappingURL=config_app.js.map
