const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/assessment_Test');

const db = mongoose.connection;

db.on('error', console.error.bind(console.log("error in connecting to database")));

db.once('open', function(){
          console.log('database connected successfuly')
});

module.exports = db;