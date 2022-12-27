import List from "./components/List";
import { testMessages } from "./data/testMessages";
import { IMessage } from "./types/types";

function App() {
	const allMessages = [...testMessages].sort(
		(a, b) => a.timestamp - b.timestamp
	) as IMessage[];

	return (
		<div>
			<List messages={allMessages} />
		</div>
	);
}

export default App;
