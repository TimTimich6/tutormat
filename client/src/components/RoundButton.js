import cs from './RoundButton.module.css';
const RoundButton = (props) => {
	const handler = props.handler;
	return (
		<button
			style={{
				backgroundColor: props.bgc,
				color: props.colorprim,
				fontSize: props.fz
			}}
			type={props.type}
		>
			{props.children}
		</button>
	);
};

export default RoundButton;
