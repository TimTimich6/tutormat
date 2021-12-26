import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Signup from './pages/Signup';
import Layout from './components/Layout/Layout.js';
import Login from './pages/Login.js';
function App() {
	const user = false;
	return (
		<div className="appRoot">
			<Layout>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/signup" exact="true" element={user ? <Navigate to="/" /> : <Signup />} />
					<Route path="/login" exact="true" element={user ? <Navigate to="/" /> : <Login />} />
				</Routes>
			</Layout>
		</div>
	);
}

export default App;
