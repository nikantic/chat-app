import styled, { css } from "styled-components";

import { IMessage } from "../types/types";
import { formatDate } from "../helpers/date";
import CONFIG from "../data/config";

const StyledMessage = styled.div<{ isMe: boolean }>`
	background-color: #fff;

	min-width: 200px;
	max-width: 65%;
	padding: 16px;
	margin: 8px 24px;

	border-radius: 3px;
	border: 1px solid #d8d8d8;

	p {
		margin: 0;
	}

	.Date {
		font-size: 14px;
		color: #c1c1c1;
		margin-top: 10px;
	}

	.Author {
		font-weight: bold;
		margin-bottom: 10px;
	}

	${({ isMe }) =>
		isMe &&
		css`
			background-color: #fcf6c5;
			align-self: flex-end;

			.Date {
				text-align: right;
			}
		`};
`;

const Message = ({ message, timestamp, author }: IMessage) => {
	const messageDate = new Date(timestamp);
	const formattedDate = formatDate(messageDate);

	return (
		<StyledMessage isMe={CONFIG.USERNAME === author ? true : false}>
			<p className="Author">{author}</p>
			<p>{message}</p>
			<p className="Date">{formattedDate}</p>
		</StyledMessage>
	);
};

export default Message;
