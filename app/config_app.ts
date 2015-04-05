/// <reference path="../typings/node/node.d.ts" />

class Config {
    private appConfig =
    {
        "current": "pc",
        "pc": {
            "catFilesRepoService": "http://localhost:8001"
        },
        "ds211": {
            "catFilesRepoService": "http://78.193.5.74:8001"
        }
    }

    constructor() {
        var currentConfig = this.appConfig[this.appConfig["current"]]
        for (var name in currentConfig) {
            this[name] = currentConfig[name];
        }
    }
}
