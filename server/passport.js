require('dotenv').config();
const passport = require('passport');
const GCI = process.env.GOOGLE_CLIENT_ID;
const GCS = process.env.GOOGLE_CLIENT_SECRET;

const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
passport.use(
	new GoogleStrategy(
		{
			clientID: GCI,
			clientSecret: GCS,
			callbackURL: '/auth/google/callback'
		},
		function(accessToken, refreshToken, profile, done) {
			done(null, profile);
		}
	)
);

const FAI = process.env.FACEBOOK_APP_ID;
const FAS = process.env.FACEBOOK_APP_SECRET;

passport.use(
	new FacebookStrategy(
		{
			clientID: FAI,
			clientSecret: FAS,
			callbackURL: '/auth/facebook/callback'
		},
		function(accessToken, refreshToken, profile, done) {
			done(null, profile);
		}
	)
);

passport.serializeUser((user, done) => {
	done(null, user);
});

passport.deserializeUser((user, done) => {
	done(null, user);
});
