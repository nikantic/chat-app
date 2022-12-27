import List from "./List";
import Input from "./Input";
import useLoad from "../hooks/useLoad";
import { IMessage } from "../types/types";
import { requestPOST } from "../helpers/requests";
import CONFIG from "../data/config";

const Home = () => {
	const messages = useLoad(CONFIG.URL);

	const addNewMessage = (newMessage: IMessage) => {
		const newMessages: IMessage[] = [...messages.data];
		newMessages.push(newMessage);
		messages.setData(newMessages);
		localStorage.setItem("chatAppMessages", JSON.stringify(newMessages));
		requestPOST(CONFIG.URL, newMessage);
	};

	return (
		<div>
			<List messages={messages.data} />
			<Input addNewMessage={addNewMessage} />
		</div>
	);
};

export default Home;
