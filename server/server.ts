/// <reference path="./../typings/tsd.d.ts" />

import fs = require('fs');
import http = require('http');
var Config = require('./app/config_app')

var config : any = new Config();

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'html'});
    res.end(fs.readFileSync('app/index.html'));
}).listen(8000);



