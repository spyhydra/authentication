const express = require('express');
const port = 8000;
const app = express();
const path = require('path');
const cookieParser=require('cookie-parser');
const db=require('./config/mongoose');
// const expressLayouts = require('express-ejs-layouts');

const session=require('express-session');
const passport=require('passport');
const passportLocal=require('./config/passport-local');
const MongoStore=require('connect-mongo')
const passportGoogle=require('./config/passport-google')
const flash=require('connect-flash')
const middleware=require('./config/middleware');

// middleware
app.use(express.urlencoded());
app.use(cookieParser());
app.use(express.static('assets'));




app.set('views ',path.join(__dirname,'views'));

app.set('view engine', 'ejs');

app.use(session({
      name:'quoro',
      secret:'hellochetan',
      saveUninitialized:false,
      resave:false,
      
      cookie:{
        maxAge:(1000*60*100)
       
      },
     
      
      store:  MongoStore.create(
        {
       
       mongoUrl:'mongodb+srv://chetan:IN0JSi0gM11dDQZj@cluster0.jdlc9ck.mongodb.net/?retryWrites=true&w=majority',
       autoRemove:'disabled'
     
      },
      function(err){
        console.log(err);
      })
  

}))

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use(middleware.setFlash)


app.use('/', require('./routes'));
app.use(passport.useAuthenticatedUser);




//server listen 
app.listen(port, function (err) {
    if (err) {
        console.log(err);
    }

    console.log('server running on port ', port);


})

