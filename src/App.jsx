import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import './styles/App.css';
import axios from 'axios';
import { useDispatch } from 'react-redux';

function App() {
	const effectRun = useRef(false);
	const [error, setError] = useState('');
	const dispatch = useDispatch();

	useEffect(() => {
		if (effectRun.current === false) {
			axios
				.get('https://jsonplaceholder.typicode.com/users')
				.then((json) => dispatch({ type: 'FETCH_USERS', payload: json.data }))
				.catch((error) => {
					setError(error.message);
				});

			return () => {
				effectRun.current = true;
			};
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (error) {
		return <h2 style={{ color: 'red' }}>{error} - Check connection!</h2>;
	}

	return (
		<div className='app'>
			<BrowserRouter>
				<AppRouter />
			</BrowserRouter>
		</div>
	);
}

export default App;
