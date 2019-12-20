const express = require('express'),
      port = process.env.PORT || 5000,
      app = express(),
      path= require('path'),
      indexRoute = require('./routes/index'),
      bodyParser = require('body-parser');

      // support parsing of application/json type post data
      app.use(bodyParser.json());
      
      //support parsing of application/x-www-form-urlencoded post data
      app.use(bodyParser.urlencoded({ extended: true }));
app.use('/',indexRoute)
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine','ejs')    
app.listen(port,()=>{
    console.log(`Server Started On Port ${port}`)
})      

