/// <reference path="../typings/node/node.d.ts" />

class Config {
    private appConfig =
    {
        "current": "ds415",
        "pc": {
            "catFilesRepoService": "http://localhost:8001"
        },
        "ds415": {
            "catFilesRepoService": "http://83.156.229.30:8001"
        }
    }

    constructor() {
        var currentConfig = this.appConfig[this.appConfig["current"]]
        for (var name in currentConfig) {
            this[name] = currentConfig[name];
        }
    }
}
