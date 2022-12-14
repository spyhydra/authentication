const nodeMailer=require('../config/nodemailer');


exports.newPass=(user)=>{
    console.log('inside mailer');
    console.log('this is user,',user.email)
    nodeMailer.transporter.sendMail({
        
        from: 'sautentication@gmail.com', // sender address
        to: user.email, // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: user.name, // html body
    },(err,info)=>{
    if(err){console.log(err); return}
    console.log(info);

    })

}