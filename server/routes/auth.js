const router = require('express').Router();
const passport = require('passport');
const { register, login, forgotpassword, resetpassword } = require('../controllers/auth');

router.post('/register', register);

router.post('/login', login);

router.post('/forgotpassword', forgotpassword);

router.put('/resetpassword/:resetToken', resetpassword);

module.exports = router;
