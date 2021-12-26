import cs from './PlatformSignin.module.css';
const PlatformSignin = (props) => {
	return (
		<button className={cs.platformContainer} style={{ backgroundColor: props.bgc }}>
			<img className={cs.platformLogo} src={props.src} alt={props.alt} />
			<span className={cs.platformText}>{props.children}</span>
		</button>
	);
};

export default PlatformSignin;
