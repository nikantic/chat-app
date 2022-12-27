import styled, { css } from "styled-components";

import { IMessage } from "../types/types";
import { formatDate } from "../helpers/date";
import CONFIG from "../data/config";

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

const Message = ({ message, timestamp, author }: IMessage) => {
	const messageDate = new Date(timestamp);
	const formattedDate = formatDate(messageDate);

	return (
		<StyledMessage isMe={CONFIG.USERNAME === author ? true : false}>
			<p>{author}</p>
			<strong>{message}</strong>
			<p>{formattedDate}</p>
		</StyledMessage>
	);
};

export default Message;
