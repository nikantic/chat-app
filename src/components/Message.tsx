import { IMessage } from "../types/types";

const Message = ({ message, date, user, isMe }: IMessage) => (
	<div>
		<p>Author: {user}</p>
		<strong>{message}</strong>
		<p>Date: {date}</p>
		{isMe ? <strong style={{ color: "red" }}>it's my user</strong> : null}
	</div>
);

export default Message;
