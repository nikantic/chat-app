import { useEffect, useState } from "react";

import { testMessages } from "../data/testMessages";
import { sortMessages } from "../helpers/date";
import { requestGET } from "../helpers/requests";
import { IMessage, LOCAL_STORAGE } from "../types/types";
import CONFIG from "../data/config";

const useLoad = (URL: string) => {
	const [data, setData] = useState(
		sortMessages(
			JSON.parse(localStorage.getItem(LOCAL_STORAGE.MESSAGES) as string) ||
				testMessages ||
				([] as IMessage[])
		)
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
