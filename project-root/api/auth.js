// const express = require('express');
// const router = express.Router();
// const passport = require('passport');
// const { User } = require('../models/User');
// const nodemailer = require('nodemailer');

// // Register a new user
// router.post('/register', async (req, res) => {
//   const { username, email, password, firstName, lastName, phoneNumber, bankAccountNumber, bankName } = req.body;

//   try {
//     const user = new User({
//       username,
//       email,
//       password,
//       firstName,
//       lastName,
//       phoneNumber,
//       bankAccountNumber,
//       bankName
//     });

//     await user.save();

//     // Send a welcome email to the user
//     const mailOptions = {
//       from: 'noreply@example.com',
//       to: email,
//       subject: 'Welcome to our app!',
//       text: `Hi ${username},

//         Thank you for registering for our app! We hope you enjoy using it.

//         Sincerely,
//         The App Team`
//     };

//     nodemailer.sendMail(mailOptions, (error) => {
//       if (error) {
//         console.error(error);
//       } else {
//         console.log('Welcome email sent to:', email);
//       }
//     });

//     res.json({ message: 'User registered successfully.' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'An error occurred while registering the user.' });
//   }
// });

// // Authenticate a user
// router.post('/login', passport.authenticate('local', {
//   successRedirect: '/',
//   failureRedirect: '/login',
//   failureFlash: true
// }));

// // Logout a user
// router.get('/logout', (req, res) => {
//   req.logout();
//   res.redirect('/');
// });

// module.exports = router;

const express = require('express');
const router = express.Router();
const passport = require('passport');
const { User } = require('../models/User');
const nodemailer = require('nodemailer');

// Register a new user
router.post('/register', async (req, res) => {
  const { username, email, password, firstName, lastName, phoneNumber, bankAccountNumber, bankName } = req.body;

  try {
    const user = new User({
      username,
      email,
      password,
      firstName,
      lastName,
      phoneNumber,
      bankAccountNumber,
      bankName
    });

    await user.save();

    // Send a welcome email to the user
    const mailOptions = {
      from: 'noreply@example.com',
      to: email,
      subject: 'Welcome to our app!',
      text: `Hi ${username},

        Thank you for registering for our app! We hope you enjoy using it.

        Sincerely,
        The App Team`
    };

    nodemailer.sendMail(mailOptions, (error) => {
      if (error) {
        console.error(error);
      } else {
        console.log('Welcome email sent to:', email);
      }
    });

    res.json({ message: 'User registered successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while registering the user.' });
  }
});

// Authenticate a user
router.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login',
  failureFlash: true
}));

// Logout a user
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;
