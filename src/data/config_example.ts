// Copy this file and create your own config.ts
import { IConfig } from "../types/types";

const CONFIG: IConfig = {
	TOKEN: "YOUR_AWESOME_UNIQUE_TOKEN",
	URL: "YOUR_AWESOME_API_ENDPOINT",
	OFFLINE: false, // change to TRUE to enable OFFLINE mode (without TOKEN and URL)
};

export default CONFIG;
