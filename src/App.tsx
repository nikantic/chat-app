import Message from "./components/Message";
import { testMessages } from "./data/testMessages";
import { IMessage } from "./types/types";

function App() {
	const allMessages = [...testMessages].sort(
		(a, b) => a.date - b.date
	) as IMessage[];

	return (
		<div>
			{allMessages.map((item) => (
				<Message
					key={item.date}
					user={item.user}
					message={item.message}
					date={item.date}
					isMe={item.isMe}
				/>
			))}
		</div>
	);
}

export default App;
