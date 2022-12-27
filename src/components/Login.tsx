import { useState } from "react";

import styled from "styled-components";
import CONFIG from "../data/config";

const StyledLogin = styled.div`
	display: flex;
	flex-direction: column;

	background: #fcf6c5;
	width: 500px;
	height: 500px;
	box-sizing: border-box;
	padding: 20px;

	border-radius: 3px;
	border: 1px solid #d8d8d8;

	input {
		font-size: 20px;

		border: 3px solid #2e77a4;
		border-radius: 5px;

		padding: 20px;
		box-sizing: border-box;
		width: 100%;
	}

	button {
		font-size: 20px;

		border: none;
		border-radius: 5px;
		background-color: #ff876d;
		color: #fff;

		margin-top: 20px;
		padding: 20px;
		width: 100px;
		cursor: pointer;

		&:disabled {
			background-color: #808080;
			opacity: 0.5;
		}
	}
`;

const Login = ({ setLoggedIn }: { setLoggedIn: Function }) => {
	const [text, setText] = useState("");

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setText(event.target.value);
	};

	const handleSubmit = () => {
		if (text.length) {
			CONFIG.USERNAME = text;
			localStorage.setItem("chatAppUsername", text);
			setLoggedIn(true);
		}
	};

	return (
		<StyledLogin>
			<p>Welcome! Please enter your username to proceed:</p>
			<div>
				<input
					required
					type="text"
					name="username"
					value={text}
					onChange={handleChange}
					onKeyDown={(event) => event.key === "Enter" && handleSubmit()}
				/>
				<button disabled={!text.length} onClick={handleSubmit}>
					Submit
				</button>
			</div>
		</StyledLogin>
	);
};

export default Login;
