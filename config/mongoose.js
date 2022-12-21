const mongoose=require('mongoose');


mongoose.connect('mongodb+srv://chetan:IN0JSi0gM11dDQZj@cluster0.jdlc9ck.mongodb.net/?retryWrites=true&w=majority');

const db=mongoose.connection;

//error
db.on('error',console.error.bind(console,'error in binding'));
db.once('open',function(){
    console.log('successfully connected to Database')
})