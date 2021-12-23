import './App.css';
import { Route, Routes } from 'react-router-dom';
import TopBar from './components/TopBar';
import HomePage from './pages/HomePage';

function App() {
	return (
		<div>
			<TopBar />
			<Routes>
				<Route path="/" element={<HomePage />} />
			</Routes>
		</div>
	);
}

export default App;
