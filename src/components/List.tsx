import styled from "styled-components";

import Message from "./Message";
import { IMessage } from "../types/types";
import LoginInfo from "./LoginInfo";

const StyledList = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;

	min-height: 100vh;
	padding-bottom: 150px;
	width: 640px;
	max-width: 100%;
`;

const List = ({ messages }: { messages: IMessage[] }) => {
	return (
		<StyledList>
			{messages.map((item) => (
				<Message
					key={item.timestamp}
					author={item.author}
					message={item.message}
					timestamp={item.timestamp}
				/>
			))}
			<LoginInfo />
		</StyledList>
	);
};

export default List;
