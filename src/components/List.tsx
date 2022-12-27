import styled from "styled-components";

import Message from "./Message";
import { IMessage } from "../types/types";

const StyledList = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`;

const List = ({ messages }: { messages: IMessage[] }) => {
	return (
		<StyledList>
			{messages.map((item) => (
				<Message
					key={item.date}
					user={item.user}
					message={item.message}
					date={item.date}
					isMe={item.isMe}
				/>
			))}
		</StyledList>
	);
};

export default List;
