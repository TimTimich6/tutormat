import PlatformSignin from './PlatformSignin';

const GoogleSignin = (props) => {
	const google = () => {
		window.open('http://localhost:5000/auth/google');
	};
	return (
		<PlatformSignin src="/googlelogo2.png" alt="Google" bgc="#577ACE" handler={google}>
			Sign in with Google
		</PlatformSignin>
	);
};

export default GoogleSignin;
