import cs from './TopBar.module.css';
import Tab from './Tab';
import { Link } from 'react-router-dom';
import ProfileButton from '../ProfileButton';
const TopBar = (props) => {
	return (
		<div className={cs.totalBar}>
			<div className={cs.leftSide}>
				<Link className={cs.homelink} exact to={'/'}>
					<div className={cs.logobox}>
						<img src="/tutormatlogo3.png" alt="" className={cs.logo} />
						<h1>TUTORMAT</h1>
					</div>
				</Link>
				<div className={cs.tabs}>
					<Tab link="/sat">SAT Prep</Tab>
					<Tab link="/act">ACT Prep</Tab>
					<Tab link="/quizlet">Quizlet</Tab>
				</div>
			</div>
			<div className={cs.rightSide}>
				<div className={cs.powerButton} />
				<ProfileButton />
			</div>
		</div>
	);
};

export default TopBar;
