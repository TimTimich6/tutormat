import cs from './ProfileButton.module.css';
import { useState } from 'react';
import Tab from './Layout/Tab';
const ProfileButton = (props) => {
	const [ logged, setLogged ] = useState(false);

	return (
		<div className={cs.totalContainer}>
			{/* <img src="./blankprofile.png" alt="PFP" className={cs.pfp} /> */}
			{logged ? <span className={cs.fullName}>Timofey Obraztsov</span> : <>
			<Tab link="/login">Login</Tab>
			 <Tab link="/signup" color="#0096c7">Signup</Tab>
			 </>
}
		</div>
	);
};

export default ProfileButton;
