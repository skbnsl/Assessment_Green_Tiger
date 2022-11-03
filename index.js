//Sagar Bansal

const express = require('express');
const port = 4000;
const bodyparser = require('body-parser');

const db = require('./config/mongoose.js');



const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

app.use('/', require('./routes/index'));

app.listen(port, function(err){
          if(err){
                    console.log('error in creating server', err);
          }
          console.log('server is running on port', port);
});
