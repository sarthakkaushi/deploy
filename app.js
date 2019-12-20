const express = require('express'),
      port = process.env.PORT || 5000,
      app = express(),
      path= require('path'),
      indexRoute = require('./routes/index')
app.use('/',indexRoute)
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine','ejs')    
app.listen(port,()=>{
    console.log(`Server Started On Port ${port}`)
})      

