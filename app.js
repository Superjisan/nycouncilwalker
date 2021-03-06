var request = require('request'),
    express = require('express'),
    async = require('async'),
    path = require('path'),
    http = require('http'),
    routes = require('./routes'),
    swig = require('swig');

var app = express();

app.set('port', 3000);
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
swig.setDefaults({ cache: false });
app.set('views', path.join(__dirname, 'views'));
swig.setDefaults({ cache: false });
app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use('/', express.static(__dirname + '/public'));
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride())
app.use(app.router);


// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get("/", routes.index);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
