import { useState } from "react";
import styled, { css } from "styled-components";

import Home from "./components/Home";
import Login from "./components/Login";
import CONFIG from "./data/config";
import background from "./assets/images/bg.png";
import AppContext from "./data/context";
import { LOCAL_STORAGE } from "./types/types";

if (CONFIG.OFFLINE) {
	console.log("You are running app in OFFLINE mode (using local storage)");
}

const StyledApp = styled.div<{ isLoggedIn: boolean }>`
	${({ isLoggedIn }) =>
		!isLoggedIn &&
		css`
			display: flex;
			justify-content: center;
			align-items: center;

			width: 100%;
			height: 100vh;

			background-image: url(${background});
		`};
`;

function App() {
	const [username, setUsername] = useState(
		localStorage.getItem(LOCAL_STORAGE.USERNAME) || ""
	);
	const [loggedIn, setLoggedIn] = useState(!!username);

	const logout = () => {
		setUsername("");
		localStorage.setItem(LOCAL_STORAGE.USERNAME, "");
		setLoggedIn(false);
	};

	const login = (username: string) => {
		setUsername(username);
		localStorage.setItem(LOCAL_STORAGE.USERNAME, username);
		setLoggedIn(true);
	};

	return (
		<AppContext.Provider value={{ username, login, logout }}>
			<StyledApp isLoggedIn={loggedIn}>
				{loggedIn ? <Home /> : <Login />}
			</StyledApp>
		</AppContext.Provider>
	);
}

export default App;
