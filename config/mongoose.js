const mongoose=require('mongoose');


mongoose.connect('mongodb://localhost/try');

const db=mongoose.connection;

//error
db.on('error',console.error.bind(console,'error in binding'));
db.once('open',function(){
    console.log('successfully connected to Database')
})