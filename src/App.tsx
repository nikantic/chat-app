import { useState } from "react";
import styled, { css } from "styled-components";

import Input from "./components/Input";
import List from "./components/List";
import Login from "./components/Login";
import CONFIG from "./data/config";
import useLoad from "./hooks/useLoad";
import { IMessage } from "./types/types";
import { requestPOST } from "./helpers/requests";

CONFIG.USERNAME = localStorage.getItem("chatAppUsername") || "";

const StyledApp = styled.div<{ isLoggedIn: boolean }>`
	${({ isLoggedIn }) =>
		!isLoggedIn &&
		css`
			display: flex;
			justify-content: center;
			align-items: center;

			width: 100%;
			height: 100vh;
		`};
`;

function App() {
	const [loggedIn, setLoggedIn] = useState(!!CONFIG.USERNAME);
	const messages = useLoad(CONFIG.URL);

	const addNewMessage = (newMessage: IMessage) => {
		const newMessages: IMessage[] = [...messages.data];
		newMessages.push(newMessage);
		messages.setData(newMessages);
		localStorage.setItem("chatAppMessages", JSON.stringify(newMessages));
		requestPOST(CONFIG.URL, newMessage);
	};

	return (
		<StyledApp isLoggedIn={loggedIn}>
			{loggedIn ? (
				<div>
					<List messages={messages.data} />
					<Input addNewMessage={addNewMessage} />
				</div>
			) : (
				<Login setLoggedIn={setLoggedIn} />
			)}
		</StyledApp>
	);
}

export default App;
