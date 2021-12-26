import cs from './TypeInput.module.css';
const TypeInput = (props) => {
	return (
		<div className={cs.inputContainer}>
			<label htmlFor={props.id} className={cs.labelText}>
				{props.labelText}
			</label>
			<input
				className={cs.textInput}
				type={props.type}
				size={props.sz}
				minlength={props.minLength}
				maxlength={props.maxLength}
				required={props.required}
				placeholder={props.placeholder}
				name={props.id}
				id={props.id}
			/>
			<span className={cs.extraText}>{props.extraText}</span>
		</div>
	);
};

export default TypeInput;
