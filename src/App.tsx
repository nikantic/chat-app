import { useState } from "react";
import styled, { css } from "styled-components";
import Home from "./components/Home";

import Login from "./components/Login";
import CONFIG from "./data/config";
import background from "./assets/images/bg.png";
import AppContext from "./data/context";

CONFIG.USERNAME = localStorage.getItem("chatAppUsername") || "";

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
	const [loggedIn, setLoggedIn] = useState(!!CONFIG.USERNAME);

	const logout = () => {
		CONFIG.USERNAME = "";
		localStorage.setItem("chatAppUsername", "");
		setLoggedIn(false);
	};

	return (
		<AppContext.Provider value={{ LOGOUT: logout }}>
			<StyledApp isLoggedIn={loggedIn}>
				{loggedIn ? <Home /> : <Login setLoggedIn={setLoggedIn} />}
			</StyledApp>
		</AppContext.Provider>
	);
}

export default App;
