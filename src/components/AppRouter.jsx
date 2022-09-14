import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { publicRoutes } from '../router/routes';

const AppRouter = () => {
	return (
		<Routes>
			{publicRoutes.map((route) => (
				<Route
					exact={route.exact}
					element={<route.component />}
					path={route.path}
					key={route.path}
				></Route>
			))}
		</Routes>
	);
};

export default AppRouter;
