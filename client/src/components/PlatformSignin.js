import cs from './PlatformSignin.module.css';
import ProfileContext from '../ProfileContext';
import { useContext } from 'react';
const PlatformSignin = (props) => {
	const setUser = useContext(ProfileContext);
	const getUser = () => {
		fetch('http://localhost:5000/auth/login/success', {
			method: 'GET',
			credentials: 'include',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				'Access-Control-Allow-Credentials': true
			}
		})
			.then((response) => {
				if (response.status === 200) return response.json();
				throw new Error('authentication has failed!');
			})
			.then((resObject) => {
				setUser(resObject.user);
				console.log(resObject.user);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	return (
		<button
			onClick={() => {
				props.handler();
				getUser();
			}}
			className={cs.platformContainer}
			style={{ backgroundColor: props.bgc }}
		>
			<img className={cs.platformLogo} src={props.src} alt={props.alt} />
			<span className={cs.platformText}>{props.children}</span>
		</button>
	);
};

export default PlatformSignin;
