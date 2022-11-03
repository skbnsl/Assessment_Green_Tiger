const Student = require('../schema/user');

module.exports.add = function(req, res){
          try {
                    Student.create(req.body, function(err, st){
                         if(err){
                              console.log('error in add', err);
                              return;
                         }
                         console.log(req.body);
                         console.log(st);
                         return res.sendStatus(201);
                    })
          } catch (error) {
                   console.log('error in creating User', error);
                   return; 
          }          
}

module.exports.getData = function(req, res){
               Student.find(function(err, data) {
              if(err){
                  console.log(err);
              }
              else{
                  res.send(data);
              }
          });  
};


module.exports.getById = function(req, res){
     const id = req.params.id;
     //console.log(id);
     Student.findById({_id:id}, function(err, data){
          if(err){
               console.log(err);
          }else {
               res.send(data);
          }

     })
}