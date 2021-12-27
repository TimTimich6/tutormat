import cs from './ProfileButton.module.css';
import { useState } from 'react';
import Tab from './Layout/Tab';
import { useContext } from 'react';
import ProfileContext from '../ProfileContext'
const ProfileButton = (props) => {
	const [ logged, setLogged ] = useState(false);
	const {user} = useContext(ProfileContext)
	return (
		<div className={cs.totalContainer}>
			{/* <img src="./blankprofile.png" alt="PFP" className={cs.pfp} /> */}
			{user ? <Tab link="/account">{user._json.name}</Tab> : <>
			<Tab link="/login">Login</Tab>
			 <Tab link="/signup" color="#0096c7">Signup</Tab>
			 </>
}
		</div>
	);
};

export default ProfileButton;
