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

    var names = [], districts = [], boroughs = [], parties = [], urls = [], photo_url;

    function scrapeEntryData(column, arraytoPush){
      if(column === 'url'){
        $values = $("#members_table .list_entry:first-child a")
        // console.log("urls:", $values)
        $values.each(function(i, elem){
          arraytoPush[i] = $(this).attr().href;
        })
      } else {
        var $values = $("#members_table .list_entry:nth-child("+column+")");
        $values.each(function(i, elem){
          arraytoPush[i] = $(this).text();
        })
      }
    }

    scrapeEntryData(1, names);
    scrapeEntryData(2, districts);
    scrapeEntryData(3, boroughs);
    scrapeEntryData(4, parties);
    scrapeEntryData('url', urls);

    var citycouncilMembers = [];
    for(var i = 0; i < names.length; i++){
      var result = {};
      result.name = names[i];
      result.party = parties[i];
      result.district = districts[i];
      result.url = "http://council.nyc.gov"+urls[i];
      result.borough = boroughs[i];
      citycouncilMembers.push(result)
    }

    urls.forEach(function(elem){
      var photo_url = scrapeCouncilMemberPage("http://council.nyc.gov"+elem)
    })
    // console.log("names", names);
    // console.log("districts", districts);
    console.log("citycouncilMembers", citycouncilMembers);
  })
}

function scrapeCouncilMemberPage(url){
  var email, photo_url, offices = [];
  request({url: url}, function(err, response, body){

    console.log("scraping council member url:", url)
    //Just a basic error check
    if(err && response.statusCode !== 200){
      console.log('Request error:', err);
    }

    var $ = cheerio.load(body);
    photo_url = $(".inside_top_image img").attr().src
    console.log("photo url", photo_url);
    return photo_url
  })
}


scrapeCityCouncilURL();
