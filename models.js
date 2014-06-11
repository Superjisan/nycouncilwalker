var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/NYC_council');

var Schema = mongoose.Schema;

var CouncilMemberSchema = new Schema ({
  name : String,
  district_number: Number,
  borough: String,
  party : String
})

var CouncilMember = mongoose.model('CouncilMember', CouncilMemberSchema)

module.exports = {"CouncilMember": CouncilMember}

