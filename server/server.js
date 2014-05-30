/// <reference path="./../typings/tsd.d.ts" />
var fs = require('fs');
var http = require('http');
var Config = require('./app/config_app');

var config = new Config();

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'html' });
    res.end(fs.readFileSync('app/index.html'));
}).listen(8000);
//# sourceMappingURL=server.js.map
