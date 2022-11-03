const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
          name:{
                    type: String,
                    required: true
          },
          age:{
                    type: String,
                    required: true
          },
          dept:{
                    type: String,
                    required: true
          },
         DateOfJoining:{
                    type: String,
                    required: true
          }
});

const Student = mongoose.model('Student', UserSchema);

module.exports = Student;