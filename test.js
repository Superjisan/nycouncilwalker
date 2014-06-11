var models = require('./models')

var CouncilMember = models.CouncilMember
var mongoose = require('mongoose')

console.log("Inserting City Council Member Data")

CouncilMember.create({ name :'Maria del Carmen Arroyo',district_number:'17',borough :'Bronx', party: 'Democrat'});
 CouncilMember.create({ name: 'Inez Barron',district_number:'42',borough :'Brooklyn', party: 'Democrat'});
 CouncilMember.create({ name: 'Fernando Cabrera',district_number:'14',borough :'Bronx', party: 'Democrat'});
 CouncilMember.create({ name: 'Margaret Chin', district_number:',1',borough :'Manhattan', party: 'Democrat'});
 CouncilMember.create({ name: 'Andrew Cohen',district_number:'11',borough :'Bronx', party: 'Democrat'});
 CouncilMember.create({ name: 'Robert Cornegy',district_number:'36',borough :'Brooklyn', party: 'Democrat'});
 CouncilMember.create({ name: 'Costa Constantinides',district_number:'22',borough :',Queens', party: 'Democrat'});
 CouncilMember.create({ name: 'Elizabeth Crowley',district_number:'30',borough :',Queens', party: 'Democrat'});
 CouncilMember.create({ name: 'Laurie Cumbo',district_number:'35',borough :'Brooklyn', party: 'Democrat'});
 CouncilMember.create({ name: 'Chaim M. Deutsch',district_number:'48',borough :'Brooklyn', party: 'Democrat'});
 CouncilMember.create({ name: 'Inez E. Dickens',district_number:',9',borough :'Manhattan', party: 'Democrat'});
 CouncilMember.create({ name: 'Daniel Dromm',district_number:'25',borough :',Queens', party: 'Democrat'});
 CouncilMember.create({ name: 'Rafael Espinal',district_number:'37',borough :'Brooklyn', party: 'Democrat'});
 CouncilMember.create({ name: 'Mathieu Eugene',district_number:'40',borough :'Brooklyn', party: 'Democrat'});
 CouncilMember.create({ name: 'Julissa Ferreras',district_number:'21',borough :',Queens', party: 'Democrat'});
 CouncilMember.create({ name: 'Daniel R. Garodnick',district_number:',4',borough :'Manhattan', party: 'Democrat'});
 CouncilMember.create({ name: 'Vincent Gentile',district_number:'43',borough :'Brooklyn', party: 'Democrat'});
 CouncilMember.create({ name: 'Vanessa L Gibson',district_number:'16',borough :'Bronx', party: 'Democrat'});
 CouncilMember.create({ name: 'David G. Greenfield',district_number:'44',borough :'Brooklyn', party: 'Democrat'});
 CouncilMember.create({ name: 'Vincent Ignizio',district_number:'51',borough :', Staten Island', party: 'Republican'});
 CouncilMember.create({ name: 'Corey Johnson',district_number:',3',borough :'Manhattan', party: 'Democrat'});
 CouncilMember.create({ name: 'Andy King',district_number:'12',borough :'Bronx', party: 'Democrat'});
 CouncilMember.create({ name: 'Ben Kallos',district_number:',5',borough :'Manhattan', party: 'Democrat'});
 CouncilMember.create({ name: 'Peter Koo',district_number:'20',borough :',Queens', party: 'Democrat'});
 CouncilMember.create({ name: 'Karen Koslowitz',district_number:'29',borough :',Queens', party: 'Democrat'});
 CouncilMember.create({ name: 'Rory Lancman',district_number:'24',borough :',Queens', party: 'Democrat'});
 CouncilMember.create({ name: 'Brad Lander',district_number:'39',borough :'Brooklyn', party: 'Democrat'});
 CouncilMember.create({ name: 'Stephen Levin',district_number:'33',borough :'Brooklyn', party: 'Democrat'});
 CouncilMember.create({ name: 'Mark Levine',district_number:',7',borough :'Manhattan', party: 'Democrat'});
 CouncilMember.create({ name: 'Alan Maisel',district_number:'46',borough :'Brooklyn', party: 'Democrat'});
 CouncilMember.create({ name: 'Melissa Mark-Viverito', district_number:'8',borough :'Manhattan and Bronx', party: 'Democrat'});
 CouncilMember.create({ name: 'Steven Matteo',district_number:'50',borough :', Staten Island', party: 'Republican'});
 CouncilMember.create({ name: 'Darlene Mealy',district_number:'41',borough :'Brooklyn', party: 'Democrat'});
 CouncilMember.create({ name: 'Carlos Menchaca',district_number:'38',borough :'Brooklyn', party: 'Democrat'});
 CouncilMember.create({ name: 'Rosie Mendez', district_number:',2',borough :'Manhattan', party: 'Democrat'});
 CouncilMember.create({ name: 'I. Daneek Miller',district_number:'27',borough :',Queens', party: 'Democrat'});
 CouncilMember.create({ name: 'Annabel Palma',district_number:'18',borough :'Bronx', party: 'Democrat'});
 CouncilMember.create({ name: 'Antonio Reynoso',district_number:'34',borough :'Brooklyn', party: 'Democrat'});
 CouncilMember.create({ name: 'Donovan Richards',district_number: '31',borough :',Queens ', party: 'Democrat'});
 CouncilMember.create({ name: 'Ydanis Rodriguez',district_number:'10',borough :'Manhattan', party: 'Democrat'});
 CouncilMember.create({ name: 'Deborah Rose',district_number:'49',borough :', Staten Island', party: 'Democrat'});
 CouncilMember.create({ name: 'Helen Rosenthal', district_number:',6',borough :'Manhattan', party: 'Democrat'});
 CouncilMember.create({ name: 'Ritchie Torres',district_number:'15',borough :'Bronx', party: 'Democrat'});
 CouncilMember.create({ name: 'Mark Treyger',district_number:'47',borough :'Brooklyn', party: 'Democrat'});
 CouncilMember.create({ name: 'Eric Ulrich', district_number: '32',borough :',Queen',party: 'Republican'});
 CouncilMember.create({ name: 'James Vacca',district_number:'13',borough :'Bronx', party: 'Democrat'});
 CouncilMember.create({ name: 'Paul Vallone',district_number:'19',borough :',Queens', party: 'Democrat'});
 CouncilMember.create({ name: 'Jimmy Van Bramer',district_number:'26',borough :',Queens', party: 'Democrat'});
 CouncilMember.create({ name: 'Mark Weprin',district_number:'23',borough :',Queens', party: 'Democrat'});
 CouncilMember.create({ name: 'Jumaane D. Williams',district_number:'45',borough :'Brooklyn', party: 'Democrat'});
 CouncilMember.create({ name: 'Ruben Wills',district_number:'28',borough :',Queens', party: 'Democrat'});

console.log("Finished Inserting Data")
