import cs from './Login.module.css';
import TypeInput from '../components/TypeInput';
import PlatformSignin from '../components/PlatformSignin';
import RoundButton from '../components/RoundButton';
import { Link } from 'react-router-dom';

const Login = (props) => {
	const google = () => {
		window.open('http://localhost:5000/auth/google');
	};
	const facebook = () => {
		window.open('http://localhost:5000/auth/facebook');
	};
	return (
		<div className={cs.signUpWrapper}>
			<span className={cs.titleText}>Login in</span>
			<div className={cs.externalSignin}>
				<PlatformSignin src="/googlelogo2.png" alt="Google" bgc="#577ACE" handler={google}>
					Sign in with Google
				</PlatformSignin>
				<PlatformSignin src="/fblogo2.png" alt="Facebook" bgc="#4267b2" handler={facebook}>
					Sign in with Facebook
				</PlatformSignin>
			</div>
			<span className={cs.splitter}>Or</span>
			<form action="/api/signup" method="POST">
				<TypeInput type="email" required={true} id="email" labelText="Email" extraText="Please enter a valid email" />
				<TypeInput type="password" required={true} id="password" labelText="Password" extraText="Please enter a valid password" />
				<div className={cs.buttonSpace}>
					<RoundButton type="submit" bgc="#1D3557" colorprim="white" fz="1rem">
						Login
					</RoundButton>
					<Link to="/signup" className={cs.loginLink}>
						Don't have an account?
					</Link>
					<span className={cs.policyText}>By joining, you agree to our Terms of Service and Privacy Policy</span>
				</div>
			</form>
		</div>
	);
};

export default Login;
