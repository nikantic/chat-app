import styled, { css } from "styled-components";

import { IMessage } from "../types/types";
import { formatDate } from "../helpers/date";

const StyledMessage = styled.div<{ isMe: boolean }>`
	background-color: #fff;

	min-width: 300px;
	max-width: 500px;
	padding: 5px 10px;
	margin: 20px 10px;

	border-radius: 3px;
	border: 1px solid #000;

	${({ isMe }) =>
		isMe &&
		css`
			background-color: rgb(255, 255, 0);
			align-self: flex-end;
		`};
`;

const Message = ({ message, date, user, isMe }: IMessage) => {
	const messageDate = new Date(date);
	const formattedDate = formatDate(messageDate);

	return (
		<StyledMessage isMe={isMe ? true : false}>
			<p>Author: {user}</p>
			<strong>{message}</strong>
			<p>Date: {formattedDate}</p>
		</StyledMessage>
	);
};

export default Message;
