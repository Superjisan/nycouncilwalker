var cheerio = require('cheerio'),
    request = require('request'),
    express = require('express'),
    async = require('async'),
    path = require('path'),
    http = require('http'),
    routes = require('./routes'),
    sass = require('node-sass'),
    swig = require('swig');

var baseUrl = "http://council.nyc.gov/html/members/members.shtml";
var startingUrl = baseUrl;

var council_member = function(attrs){
  this.link = attrs.url;
  this.name = attrs.name;
  this.district = attrs.district;
  this.borough = attrs.borough;
  this.party = attrs.party;
  this.img = attrs.img
};

var all_cm = {}

var pageHtml = request({uri: baseUrl}, function(err, response, body) {

    console.log("Crawling URL: ", baseUrl)

    //Just a basic error check
    if(err && response.statusCode !== 200){
        console.log('Request error.');
      }

    var $ = cheerio.load(body);
    // let's stop the engine here and
    // debugger;

    var council_members_raw_data = $(".list_entry").text()
    // var links = $("a").filter(function(i,link){
    //   return $(link).attr('href').match(/d/)
    // }).map(function(i, link){
    //    var url  = $(link).attr('href').match(/d\(/\d+/$/)
    //    return url
    // })
    // console.log( links)

    var council_member = {
      name : "",
      district : 0,
      borough : 0,
      party : "Independent"
    }

    var cm_array = council_members_raw_data.split("Democrat" || "Republican")
    cm_array.map(function(elem){
      if (elem.indexOf("Republican") > -1 ) {
        // console.log("found a republican", elem)
        elem.split("Republican")
        }
      }
    )
    console.log(cm_array )
});


var app = express();

app.set('port', 3333);
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));
swig.setDefaults({ cache: false });
app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride())
app.use(app.router);
app.use(
  sass.middleware({
    src: __dirname + '/assets', //where the sass files are
    dest: __dirname + '/public', //where css should go
    // includePaths: __dirname + '/assets/stylesheets',
    debug: true // obvious
  })
);

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get("/", routes.index);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
