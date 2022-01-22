const User = require('../models/User');

exports.register = async (req, res, next) => {
	const { username, password, email } = req.body;
	try {
		const user = await User.create({ username, email, password });
		res.status(201).json({ success: true, user });
	} catch (err) {
		res.status(500).json({ success: false, error: error.message });
	}
};

exports.login = (req, res, next) => {
	res.send('Login route');
};
exports.forgotpassword = (req, res, next) => {
	res.send('forgotpasswords');
};

exports.resetpassword = (req, res, next) => {
	res.send('reset password');
};
