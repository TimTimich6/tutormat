import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import HomePage from './pages/HomePage';
import Signup from './pages/Signup';
import Layout from './components/Layout/Layout.js';
import Login from './pages/Login.js';
import ProfileContext from './ProfileContext';
function App() {
	const [ user, setUser ] = useState(null);
	return (
		<div className="appRoot">
			<ProfileContext.Provider value={{ user, setUser }}>
				<Layout>
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/signup" exact="true" element={user ? <Navigate to="/" /> : <Signup />} />
						<Route path="/login" exact="true" element={user ? <Navigate to="/" /> : <Login />} />
					</Routes>
				</Layout>
			</ProfileContext.Provider>
		</div>
	);
}

export default App;
