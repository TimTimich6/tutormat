import { Link } from 'react-router-dom';
import cs from './Tab.module.css';
const Tab = (props) => {
	return (
		<Link className={cs.link} to={props.link}>
			<span className={cs.text}>{props.children}</span>
		</Link>
	);
};

export default Tab;
