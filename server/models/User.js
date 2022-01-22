const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const UserSchema = new mongoose.Schema({
	username: {
		type: String,
		required: [ true, 'Please provide a username' ]
	},
	email: {
		type: String,
		required: [ true, 'Please provide an email address' ],
		unique: true,
		match: [ /^w+[+.w-]*@([w-]+.)*w+[w-]*.([a-z]{2,4}|d+)$/i, 'Please provide a valid email address' ]
	},
	password: {
		type: String,
		required: [ true, 'Please provide an password' ],
		minlength: 6,
		select: false
	},
	resetPasswordToken: String,
	resetPasswordExpire: Date
});

UserSchema.pre('save', async () => {
	if (!this.isModified('password')) {
		next();
	}
	const salt = await bcrypt.genSalt(10);
	this.password = await bcrypt.hash(this.password, salt);
	next();
});
const User = mongoose.model('User', UserSchema);

module.exports = User;
