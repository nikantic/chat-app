import { useState } from "react";

import styled from "styled-components";
import CONFIG from "../data/config";

const StyledInput = styled.div`
	display: flex;
	justify-content: space-between;

	position: fixed;
	bottom: 0;
	width: 100%;
	box-sizing: border-box;
	padding: 16px;
    
	background: #3898d4;

	input {
		border: 3px solid #2e77a4;
		border-radius: 5px;

        padding: 20px;
		font-size: 20px;
		width: 100%;
        
	}

	button {
        font-size: 20px;
		
		border: none;
		border-radius: 5px;
        background-color: #ff876d;
		color: #fff;
        
        margin-left: 20px;
		padding: 20px;
		width: 100px;
		cursor: pointer;

		&:disabled {
			background-color: #808080;
			opacity: 0.5;
		}
	}
`;

const Input = ({ addNewMessage }: { addNewMessage: Function }) => {
	const [text, setText] = useState("");

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setText(event.target.value);
	};

	const handleSubmit = () => {
		if (text.length) {
			addNewMessage({
				author: CONFIG.USERNAME,
				message: text,
				timestamp: new Date().getTime(),
			});
			setText("");
		}
	};

	return (
		<StyledInput>
			<input
				required
				placeholder="Message"
				type="text"
				name="message"
				value={text}
				onChange={handleChange}
				onKeyDown={(event) => event.key === "Enter" && handleSubmit()}
			/>
			<button disabled={!text.length} onClick={handleSubmit}>
				Send
			</button>
		</StyledInput>
	);
};

export default Input;
