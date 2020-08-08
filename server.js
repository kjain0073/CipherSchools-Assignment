var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
const path = require('path');
var app = express()
const mongoose = require('mongoose')
var port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(cors())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)

mongoose
  .connect(
    process.env.MONGODB_URI || 'mongodb://localhost:27017/mernloginreg' ,
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err))

var Users = require('./routes/Users')

app.use('/users', Users)

if(process.env.NODE_ENV==='production'){
  app.use(express.static('client/build'));

  app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'client','build','index.html'));
  });
}

app.listen(port, function() {
  console.log('Server is running on port: ' + port)
})
