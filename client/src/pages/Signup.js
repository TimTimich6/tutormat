import CenterPopup from '../components/CenterPopup';
import cs from './Signup.module.css';
const Signup = (props) => {
	return (
		<CenterPopup>
			<span className={cs.titleText}>Start Learning Today</span>
			<span className={cs.secondaryText}>Get ready for your next day with specialized practice questions</span>
		</CenterPopup>
	);
};

export default Signup;
