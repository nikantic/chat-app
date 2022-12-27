import { useState } from "react";

import styled from "styled-components";
import CONFIG from "../data/config";

const StyledInput = styled.div`
	display: flex;
	justify-content: space-between;
	position: fixed;
	bottom: 0;
	background: #fff;
	width: 100%;
	box-sizing: border-box;
	padding: 20px;

	> input {
		width: 100%;
		padding: 20px;
		font-size: 20px;
	}

	> button {
		width: 100px;
		margin-left: 20px;
		cursor: pointer;
	}
`;

const Input = ({ addNewMessage }: { addNewMessage: Function }) => {
	const [text, setText] = useState("");

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setText(event.target.value);
	};

	const handleClick = () => {
		addNewMessage({
			author: CONFIG.USERNAME,
			message: text,
			timestamp: new Date().getTime(),
		});
	};

	return (
		<StyledInput>
			<input
				required
				type="text"
				name="message"
				value={text}
				onChange={handleChange}
				onKeyDown={(event) => event.key === "Enter" && handleClick()}
			/>
			<button onClick={handleClick}>Submit</button>
		</StyledInput>
	);
};

export default Input;
