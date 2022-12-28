import { useEffect, useState } from "react";
import CONFIG from "../data/config";
import { testMessages } from "../data/testMessages";

import { requestGET } from "../helpers/requests";
import { IMessage } from "../types/types";

const useLoad = (URL: string) => {
	const [data, setData] = useState(
		JSON.parse(localStorage.getItem("chatAppMessages") as string) ||
			testMessages ||
			([] as IMessage[])
	);

	useEffect(() => {
		if (!CONFIG.OFFLINE) {
			requestGET(URL).then((response) => setData(response));
		}
	}, [URL]);

	return {
		data,
		setData,
	};
};

export default useLoad;
