const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');

passport.use(new LocalStrategy(
    { usernameField: 'email' }, 
    (email, password, done) => {
        User.findOne({ email: email }, (err, user) => {
            if (err) { return done(err); }
            if (!user) { return done(null, false, { message: 'Incorrect email.' }); }
            if (!user.validPassword(password)) { return done(null, false, { message: 'Incorrect password.' }); }
            return done(null, user);
        });
    }
));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user);
    });
});
