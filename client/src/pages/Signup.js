import CenterPopup from '../components/CenterPopup';
import cs from './Signup.module.css';
import TypeInput from '../components/TypeInput';
import RoundButton from '../components/RoundButton';
const Signup = (props) => {
	return (
		// <CenterPopup>
		<div className={cs.signUpWrapper}>
			<span className={cs.titleText}>Start Learning Today</span>
			<span className={cs.secondaryText}>Get ready for your next day with specialized practice questions</span>
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
