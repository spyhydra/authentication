const nodemailer=require('nodemailer')
const path=require('path');
const ejs=require('ejs');




let transporter = nodemailer.createTransport({
    service:'gmail',
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "sautentication@gmail.com", // generated ethereal user
      pass: "vbkouzeocsijzalv", // generated ethereal password
    },
  });

  let renderTemplate=(data,relativePath)=>{
    let mailHTML;
    ejs.renderFile(
        path.join(__dirname,'../views/mailers',relativePath),
        data,
        function(err,template){
             if(err){console.log(err);}
             mailHTML = template;

        }
    )
return mailHTML;

  }

  module.exports=    {


                       transporter:transporter,
                       renderTemplate:renderTemplate

                       
      }