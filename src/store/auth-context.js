import React, { useState } from 'react';

const AuthContext = React.createContext({
	token: '',
	isLoggedIn: false,
	login: (token) => {},
	logout: () => {}
});

const calculateRemaingTime = (expirationTime) => {
	const curretTime = new Date().getTime();
	const adjustedExpirationTime = new Date(expirationTime).getTime();
	const remainingTime = adjustedExpirationTime - curretTime;
	return remainingTime;
};

export const AuthContextProvider = (props) => {
	const initialToken = localStorage.getItem('token');
	const [ token, setToken ] = useState(initialToken);

	const userIsLoggedIn = !!token;



	const logoutHandler = () => {
		setToken(null);
		localStorage.removeItem('token');
	};
  const loginHandler = (token, expirationTime) => {
		setToken(token);
		localStorage.setItem('token', token);
		const remainingTime = calculateRemaingTime(expirationTime);
		setTimeout(logoutHandler, 3000);
	};

	const contextValue = {
		token: token,
		isLoggedIn: userIsLoggedIn,
		login: loginHandler,
		logout: logoutHandler
	};

	return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>;
};

export default AuthContext;
