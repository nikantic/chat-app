import { IMessage } from "../types/types";
import Message from "./Message";

const List = ({ messages }: { messages: IMessage[] }) => {
	return (
		<div>
			{messages.map((item) => (
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
};

export default List;
