const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 5000;
const auth = require('./routes/auth');
const connecteDB = require('./config/db.js');

connecteDB();
app.use(express.json());
app.use('/api/auth', auth);
const server = app.listen(PORT, () => {
	console.log('Running on port ', PORT);
});

process.on('unhandledRejection', (err, promise) => {
	console.log('Logged error: ', err);
	server.close(() => process.exit(1));
});
