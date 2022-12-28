import { useContext } from "react";
import styled from "styled-components";

import CONFIG from "../data/config";
import AppContext from "../data/context";

const StyledLoginInfo = styled.div`
	background: #fff;
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
	const { LOGOUT } = useContext(AppContext);

	return (
		<StyledLoginInfo>
			<p>
				You are logged in as <span className="User">{CONFIG.USERNAME}</span>
			</p>
			<span className="Logout" onClick={() => LOGOUT()}>
				Logout
			</span>
		</StyledLoginInfo>
	);
};

export default LoginInfo;
