import { IMessage } from "../types/types";
import CONFIG from "../data/config";

export const requestGET = async (URL: string) => {
	try {
		const response = await fetch(`${URL}?token=${CONFIG.TOKEN}`).then(
			(response) => response.json()
		);
		console.log(response);
		return response;
	} catch (error) {
		throw error;
	}
};

export const requestPOST = async (URL: string, data: IMessage) => {
	try {
		fetch(URL, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				token: CONFIG.TOKEN,
			},
			body: JSON.stringify(data),
		})
			.then((response) => response.json())
			.then((response) => console.log(response));
	} catch (error) {
		throw error;
	}
};
