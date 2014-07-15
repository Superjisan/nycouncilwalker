var request = require('request');
var cheerio = require('cheerio');
var async = require('async');
var fs = require('fs');
var util = require('util')
var names = [], districts = [], boroughs = [], parties = [], urls = [], photo_urls=[], emails=[]; citycouncilMembers = {};

function scrapeCityCouncilURL(){
  var url = "http://council.nyc.gov/html/members/members.shtml";
  var pageHTML = request({url: url}, function(err, response, data){
    console.log("Scraping URL:", url);

    //Just a basic error check
    if(err && response.statusCode !== 200){
      console.log('Request error:', err);
    }

    var $ = cheerio.load(data);

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

    for(var i = 0; i < names.length; i++){
      var result = {};
      result.name = names[i];
      result.party = parties[i];
      result.district = districts[i];
      result.url = "http://council.nyc.gov"+urls[i];
      result.borough = boroughs[i];
      citycouncilMembers[districts[i]] = result
    }

    console.log("citycouncilMembers", citycouncilMembers);

    for(var i =0; i < urls.length; i++){
      var scraped_data = scrapeCouncilMemberPage("http://council.nyc.gov"+urls[i], i);
     }


     //to do: fix this asyncrhronous stuff



  })
}

function scrapeCouncilMemberPage(url, index){
  var email, photo_url, offices = [];
  var url_split = url.split("http://council.nyc.gov/").join("")
  var district = url_split.substring(0, 3)

  request({url: url}, function(err, response, body){

    console.log("scraping council member url:", url)
    //Just a basic error check
    if(err && response.statusCode !== 200){
      console.log('Request error:', err);
    }

    var $ = cheerio.load(body);
    $photo_url = $(".inside_top_image img").attr().src;
    //to get the proper photo url
    var photoURLunformatted = $photo_url.split("../../");
    var photo_url = "http://council.nyc.gov/"+district+"/"+photoURLunformatted[1]

    //still need to scrape this properly
    var $contactInfo = $(".leftnav .nav_section .nav_text").text();

    //properly formatted
    var $email = $(".leftnav .nav_section .nav_text a").attr().href.split("mailto:")
    var email  = $email[1];

    //add to cityCouncilMembers Array
    citycouncilMembers[districts[index]].photo_url = photo_url;
    citycouncilMembers[districts[index]].email = email;

    if(index == districts.length - 1){
      console.log("citycouncilMembers:", citycouncilMembers);
      var wholeCouncilData  = util.inspect(citycouncilMembers);
      // fs.writeFile('CityCouncilMembers.js', wholeCouncilData, function(err){
      //   if(err) throw err;
      //   console.log('CityCouncilMembers.js is saved');
      // })
    }
    return {
            photo_url: photo_url,
            email :  email }
    })
}


scrapeCityCouncilURL();
