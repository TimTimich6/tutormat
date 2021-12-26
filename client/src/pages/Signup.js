import CenterPopup from '../components/CenterPopup';
import cs from './Signup.module.css';
import TypeInput from '../components/TypeInput';
import RoundButton from '../components/RoundButton';
import PlatformSignin from '../components/PlatformSignin';
const Signup = (props) => {
	return (
		// <CenterPopup>
		<div className={cs.signUpWrapper}>
			<span className={cs.titleText}>Start Learning Today</span>
			<span className={cs.secondaryText}>Get ready for your next day with specialized practice questions</span>
			<div className={cs.externalSignin}>
				<PlatformSignin src="/googlelogo2.png" alt="Google" bgc="#577ACE">
					Sign in with Google
				</PlatformSignin>
				<PlatformSignin src="/fblogo2.png" alt="Facebook" bgc="#4267b2">
					Sign in with Facebook
				</PlatformSignin>
			</div>
			<span className={cs.splitter}>Or</span>
			<form action="/api/signup" method="POST">
				<div className={cs.nameContainer}>
					<TypeInput type="text" required="true" id="firstname" labelText="First Name" extraText="Please enter a first name" />
					<TypeInput type="text" required="true" id="lastname" labelText="Last Name" extraText="Please enter a last name" />
				</div>
				<TypeInput type="email" required="true" id="email" labelText="Email" extraText="Please enter a valid email" />
				<TypeInput type="password" required="true" id="password" labelText="Password" extraText="Please enter a valid password" />
				<div className={cs.buttonSpace}>
					<RoundButton type="submit" bgc="#1D3557" colorprim="white" fz="1rem">
						Sign Up
					</RoundButton>
					<span className={cs.policyText}>By joining, you agree to our Terms of Service and Privacy Policy</span>
				</div>
			</form>
		</div>
		// </CenterPopup>
	);
};

export default Signup;
