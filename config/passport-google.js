const passport = require('passport');
const googleStrategy = require('passport-google-oauth').OAuth2Strategy
const crypto = require('crypto');
const User = require('../models/user');



passport.use(new googleStrategy({
                clientID: "679621885578-a669neqabjk4eniq49fr0p59ej30adol.apps.googleusercontent.com",
                clientSecret: "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",
                callbackURL: "http://localhost:8000/users/auth/google/callback",
            },
            function (accessToken, refreshToken, profile, done) {
                User.findOne({
                    email: profile.emails[0].value
                }).exec(function (err, user) {
                    if (err) {
                        console.log(err);
                        return
                    }

                    console.log(profile);
                    if (user) {
                        return done(null, user)
                    } else {
                        User.create({
                            name: profile.displayName,
                            email: profile.emails[0].value,
                            password: crypto.randomBytes(20).toString('hex')
                        }, function (err, user) {
                            if (err) {
                                console.log(err);
                                return
                            }

                            return done(null, user)
                        })
                    }
                })

            }))


        module.exports = passport;