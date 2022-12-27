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
	border: 1px solid #000;

	input {
		width: 100%;
		padding: 20px;
		font-size: 20px;
		box-sizing: border-box;
	}

	button {
		width: 100px;
		margin-top: 20px;
		padding: 20px;
		cursor: pointer;
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
				<button onClick={handleSubmit}>Submit</button>
			</div>
		</StyledLogin>
	);
};

export default Login;
