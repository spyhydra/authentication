const nodeMailer=require('../config/nodemailer');


exports.newPass=(user,pass)=>{
   
    nodeMailer.transporter.sendMail({
        
        from: 'sautentication@gmail.com', // sender address
        to: user.email, // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: `<h2>your password is ${pass}</h2>
              
        
        `, // html body
    },(err,info)=>{
    if(err){console.log(err); return}
    console.log(info);

    })
   

}