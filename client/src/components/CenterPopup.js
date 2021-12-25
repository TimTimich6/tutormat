import cs from './CenterPopup.module.css';
const CenterPopup = (props) => {
	return <div className={cs.mainContainer}>{props.children}</div>;
};

export default CenterPopup;
