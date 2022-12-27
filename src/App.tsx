import { useState } from "react";

import Input from "./components/Input";
import List from "./components/List";
import { testMessages } from "./data/testMessages";
import { IMessage } from "./types/types";

function App() {
	const [allMessages, setAllMessages] = useState(
		testMessages.sort((a, b) => a.timestamp - b.timestamp) as IMessage[]
	);

	const addNewMessage = (newMessage: IMessage) => {
		const newAllMessages = [...allMessages];
		newAllMessages.push(newMessage);
		setAllMessages(newAllMessages);
	};

	return (
		<div>
			<List messages={allMessages} />
			<Input addNewMessage={addNewMessage} />
		</div>
	);
}

export default App;
