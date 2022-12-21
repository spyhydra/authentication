const express = require('express');
const router = express.Router();
const passport=require('passport');


const usersController = require('../controller/users_controller');



router.get('/profile',passport.checkAuthentication, usersController.profile);

router.get('/signup', usersController.signUp);

router.get('/login', usersController.signIn);

router.post('/create',usersController.create);

router.get('/logout',usersController.destroySession)

router.post('/create-session',passport.authenticate(
    'local',
    {failureRedirect:'/users/login'},
),usersController.createSession);

router.get('/auth/google',passport.authenticate('google',{scope:['profile','email']}));

router.get('/auth/google/callback',passport.authenticate('google',{failureRedirect :'/users/login'}),usersController.createSession)
router.get('/logout',usersController.destroySession);
router.post("/forgetpassword",usersController.forgetPassword);
router.get("/forgetpassword",usersController.forgetpass);
router.get("/reset",usersController.resetPasswords);
router.post("/resets",usersController.resetPassword);



module.exports = router;