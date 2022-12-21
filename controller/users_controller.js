const User = require('../models/user');

const bcrypt = require('bcrypt')
const passMailer = require('../mailers/pass_mailer')
const jwt=require('jsonwebtoken');



module.exports.profile = async function (req, res) {

    let user = await User.findById(req.user)

    return res.render('profile', {
        title: "user Profile",
        user: user

    })

}

// }
// render the sign up page
module.exports.signUp = function (req, res) {

    if (req.isAuthenticated()) {
        return res.redirect('/users/profile')
    }

    return res.render('signup', {
        title: "Auth signup"
    })
}


// render the sign in page
module.exports.signIn = function (req, res) {
    if (req.isAuthenticated()) {
        req.flash('success', 'login successfully')
        return res.redirect('/users/profile')
    }
    return res.render('login')
}

module.exports.create = async function (req, res) {


    const {
        name,
        email,
        password
    } = req.body;


    try {
        let user = await User.findOne({
            email
        });
        if (!user) {

            const newUser = new User({
                name,
                email,
                password
            });
            newUser.save();
            passMailer.newPass(newUser)
            return res.redirect('/users/login');
        }

        console.log('error in finding user ');
        return res.redirect('/users/login')
    } catch (error) {
        console.log(error);
    }


}

module.exports.createSession = function (req, res) {
    req.flash('success', 'login successfully')
    return res.redirect('/users/profile');

}

module.exports.destroySession = function (req, res) {

    req.logout();
    req.flash('error', 'Logout successfully')

    return res.redirect('/users/login')
}
module.exports.user = function (req, res) {

    return res.render(profile)

}



// .....................   reset user password after login   ..................... 
module.exports.resetPassword = async (req, res) => {
    const email = await req.body.email;
    const Oldpassword = await req.body.oldpass;
    const newPassword = await req.body.newpass;

    try {
        const emails = await User.findOne({
            email
          })
        
        
        const passwords = await emails.password
        const isMatch = await bcrypt.compare(Oldpassword, passwords)
        console.log(isMatch);
        if (isMatch) {
            const a = await bcrypt.hash(newPassword, 10);
          

            console.log(a);
            const update = await User.updateOne({
                email
            }, {
                $set: {
                    password: a
                }

            })
            
            
        }
    
    

    } catch (error) {
        console.log(error);
    }
    req.logout();

    return res.redirect('/users/login')

}

//.................. for reset get password................//


module.exports.resetPasswords = (req, res) => {
    if (req.isAuthenticated()) {
        return res.render('resetPass')
    }
    return res.redirect('/users/login')
}


// .....................   forget password  ..................... 

module.exports.forgetPassword = async function (req, res) {
    
    const email=req.body.email;
    const pass =  randomPass(8); 
    console.log(pass);
    
     try {
        const updatePassword= await bcrypt.hash(pass,10);
  const user=await User.findOne({email})
  passMailer.newPass(user,pass)
  const updatePass = await User.updateOne({
    email
},{
    $set: {
        password: updatePassword
    }
    

})
console.log(updatePass);

    return res.render('login');
        
     } catch (error) {
        if(error){
            console.log(error);
        }
     }
  
}


module.exports.forgetpass=function(req,res){
    return res.render('forgetpass');
}




//function for generate random password
function randomPass (length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

