import PlatformSignin from './PlatformSignin';

const FacebookSignin = (props) => {
	const facebook = () => {
		window.open('http://localhost:5000/auth/facebook');
	};
	return (
		<PlatformSignin src="/fblogo2.png" alt="Facebook" bgc="#4267b2" handler={facebook}>
			Sign in with Facebook
		</PlatformSignin>
	);
};

export default FacebookSignin;
