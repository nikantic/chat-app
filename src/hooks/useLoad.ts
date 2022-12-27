import { useEffect, useState } from "react";

import { requestGET } from "../helpers/requests";
import { IMessage } from "../types/types";

const useLoad = (URL: string) => {
	const [data, setData] = useState([] as IMessage[]);

	useEffect(() => {
		requestGET(URL).then((response) => setData(response));
	}, [URL]);

	return {
		data,
		setData,
	};
};

export default useLoad;
