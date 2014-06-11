var cheerio = require('cheerio'),

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
