import { useEffect, useState } from "react";
import { testMessages } from "../data/testMessages";

import { requestGET } from "../helpers/requests";
import { IMessage } from "../types/types";

const useLoad = (URL: string) => {
	const [data, setData] = useState(
		JSON.parse(localStorage.getItem("chatAppMessages") as string) ||
			testMessages ||
			[]
	);

	useEffect(() => {
		requestGET(URL).then((response) => setData(response));
	}, [URL]);

	return {
		data,
		setData,
	};
};

export default useLoad;
