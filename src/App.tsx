import { useState } from "react";
import styled, { css } from "styled-components";
import Home from "./components/Home";

import Login from "./components/Login";
import CONFIG from "./data/config";
import background from "./assets/images/bg.png";
import AppContext from "./data/context";

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
		localStorage.getItem("chatAppUsername") || ""
	);
	const [loggedIn, setLoggedIn] = useState(!!username);

	const logout = () => {
		setUsername("");
		localStorage.setItem("chatAppUsername", "");
		setLoggedIn(false);
	};

	const login = (username: string) => {
		setUsername(username);
		localStorage.setItem("chatAppUsername", username);
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
