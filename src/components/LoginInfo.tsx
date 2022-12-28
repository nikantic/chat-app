import { useContext } from "react";
import styled from "styled-components";

import AppContext from "../data/context";

const StyledLoginInfo = styled.div`
	background-color: rgba(255, 255, 255, 0.5);
	border-radius: 5px;

	display: flex;
	justify-content: space-between;
	align-items: center;

	box-sizing: border-box;
	padding: 20px;
	margin-top: 20px;
	width: 100%;

	.Logout {
		color: #ff876d;
		font-weight: bold;
		cursor: pointer;
	}

	.User {
		font-weight: bold;
	}
`;

const LoginInfo = () => {
	const { username, logout } = useContext(AppContext);

	return (
		<StyledLoginInfo>
			<p>
				You are logged in as <span className="User">{username}</span>
			</p>
			<span className="Logout" onClick={() => logout()}>
				Logout
			</span>
		</StyledLoginInfo>
	);
};

export default LoginInfo;
