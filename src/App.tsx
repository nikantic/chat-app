import Message from "./components/Message";
import { IMessage } from "./types/types";

// Assuming messages would come in random order - date would be used to sort them
const testMessages: IMessage[] = [
	{
		user: "Petar",
		message: "Second Message",
		date: 2,
	},
	{
		user: "John",
		message: "First Message",
		date: 1,
	},
	{
		user: "Alice",
		message: "Third Message",
		date: 3,
	},
];

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
				/>
			))}
		</div>
	);
}

export default App;
