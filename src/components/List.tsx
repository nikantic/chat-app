import { useEffect, useRef } from "react";
import styled from "styled-components";

import Message from "./Message";
import { IMessage } from "../types/types";
import LoginInfo from "./LoginInfo";

const StyledList = styled.div<{ paddingBottom: number }>`
	display: flex;
	flex-direction: column;
	align-items: flex-start;

	min-height: 100vh;
	padding-bottom: ${({ paddingBottom }) => paddingBottom}px;
	width: 640px;
	max-width: 100%;
	box-sizing: border-box;
`;

const List = ({ messages }: { messages: IMessage[] }) => {
	const listRef = useRef() as React.MutableRefObject<HTMLDivElement>;
	const paddingBottom = useRef(150);

	useEffect(() => {
		if (
			listRef?.current.offsetHeight >
			window.innerHeight + paddingBottom.current
		) {
			window.scrollTo(0, document.body.scrollHeight);
		} else {
			window.scrollTo(0, 0);
		}
	}, [messages]);

	return (
		<StyledList ref={listRef} paddingBottom={paddingBottom.current}>
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
