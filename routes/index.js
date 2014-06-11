var mongoose = require('mongoose')
var models = require('../models')
var CouncilMember = models.CouncilMember
var async = require('async')

exports.index = function(req, res) {
  CouncilMember.find({}, function(err, members){
    if (err) { res.render('error', {status : 500})
  } else {
    console.log(members)
    res.render('index', {council_members: members})
    }
  })
}
