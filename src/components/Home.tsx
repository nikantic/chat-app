import styled from "styled-components";

import List from "./List";
import Input from "./Input";
import useLoad from "../hooks/useLoad";
import { IMessage } from "../types/types";
import { requestPOST } from "../helpers/requests";
import CONFIG from "../data/config";
import background from "../assets/images/bg.png";

const StyledHome = styled.div`
	display: flex;
	justify-content: center;

	background-image: url(${background});
`;

const Home = () => {
	const messages = useLoad(CONFIG.URL);

	const addNewMessage = (newMessage: IMessage) => {
		const newMessages: IMessage[] = [...messages.data];
		newMessages.push(newMessage);
		messages.setData(newMessages);
		localStorage.setItem("chatAppMessages", JSON.stringify(newMessages));
		if (!CONFIG.OFFLINE) {
			requestPOST(CONFIG.URL, newMessage);
		}
	};

	return (
		<StyledHome>
			<List messages={messages.data} />
			<Input addNewMessage={addNewMessage} />
		</StyledHome>
	);
};

export default Home;
