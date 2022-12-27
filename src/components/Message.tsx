import { IMessage } from "../types/types";

const Message = ({ message, date, user }: IMessage) => (
	<div>
		<p>Author: {user}</p>
		<strong>{message}</strong>
		<p>Date: {date}</p>
	</div>
);

export default Message;
