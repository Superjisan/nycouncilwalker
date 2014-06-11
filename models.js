var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CouncilMemberSchema = new Schema ({
  name : String,
  district_number: Number,
  borough: String,
  party : String
})

var CouncilMember = mongoose.model('CouncilMember', CouncilMemberSchema)

module.exports = {"CouncilMember": CouncilMember}

//this is a comment to see if github commits work
