var request = require('request');
var cheerio = require('cheerio');

function scrapeCityCouncilURL(){
  var url = "http://council.nyc.gov/html/members/members.shtml";
  var pageHTML = request({url: url}, function(err, response, data){
    console.log("Scraping URL:", url);

    //Just a basic error check
    if(err && response.statusCode !== 200){
      console.log('Request error:', err);
    }

    var $ = cheerio.load(data);

    var names = [];
    var $names = $("#members_table .list_entry:first-child");
    $names.each(function(i, elem){
      names[i] = $(this).text();
    })

    console.log("names", names)
  })
}


scrapeCityCouncilURL();
