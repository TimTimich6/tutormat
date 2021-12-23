import cs from './ProfileButton.module.css';
const ProfileButton = (props) => {
	return (
		<div className={cs.totalContainer}>
			<img src="./blankprofile.png" alt="PFP" className={cs.pfp} />
			<span className={cs.fullName}>Timofey Obraztsov</span>
		</div>
	);
};

export default ProfileButton;
