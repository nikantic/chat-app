import styled from "styled-components";

import Message from "./Message";
import { IMessage } from "../types/types";

const StyledList = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;

	min-height: 100vh;
	padding-bottom: 200px;
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
		</StyledList>
	);
};

export default List;
