const passport = require('passport');
const User = require('../models/user');

exports.register = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const newUser = new User({ email, password });
        await newUser.save();
        req.login(newUser, (err) => {
            if (err) return next(err);
            res.redirect('/profile');
        });
    } catch (error) {
        res.redirect('/register');
    }
};

exports.login = passport.authenticate('local', {
    successRedirect: '/profile',
    failureRedirect: '/login',
    failureFlash: true
});

exports.logout = (req, res) => {
    req.logout();
    res.redirect('/login');
};
