/// <reference path="typings/tsd.d.ts" />
var http = require('http');
var express = require('express');
var engines = require('consolidate');
var methodOverride = require('method-override');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();
app.set('port', process.env.PORT || 8000);
app.set('views', __dirname + '/app');
app.engine('html', engines.ect);
app.use(bodyParser());
app.use(methodOverride());
app.use(express.static(path.join(__dirname, 'app')));

app.get('/', function (req, res) {
    res.render('index.html');
});

app.get('/partials/:name', function (req, res) {
    var name = req.params.name;
    res.render('partials/' + name + '.html');
});

// redirect all others to the index (HTML5 history)
app.get('*', function (req, res) {
    res.render('index.html');
});

http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
/*
http.createServer(function (req, res) {
res.writeHead(200, {'Content-Type': 'html'});
res.end(fs.readFileSync('app/index.html'));
}).listen(8000);
*/
//# sourceMappingURL=server.js.map
