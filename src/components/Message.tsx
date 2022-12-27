import { formatDate } from "../helpers/date";
import { IMessage } from "../types/types";

const Message = ({ message, date, user, isMe }: IMessage) => {
	const messageDate = new Date(date);
    const formattedDate = formatDate(messageDate)

	return (
		<div>
			<p>Author: {user}</p>
			<strong>{message}</strong>
			<p>Date: {formattedDate}</p>
			{isMe ? <strong style={{ color: "red" }}>it's my user</strong> : null}
		</div>
	);
};

export default Message;
