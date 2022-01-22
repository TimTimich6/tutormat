import PlatformSignin from './PlatformSignin';
// import { useNavigate } from 'react-router-dom';
const GoogleSignin = (props) => {
	// const nav = useNavigate();
	const google = () => {
		window.open('http://localhost:5000/auth/google');
	};
	return (
		<PlatformSignin src="/googlelogo2.png" alt="Google" bgc="red" handler={google}>
			Sign in with Google
		</PlatformSignin>
	);
};

export default GoogleSignin;
