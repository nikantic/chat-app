export interface IMessage {
	author: string;
	message: string;
	timestamp: number;
}

export interface IConfig {
	TOKEN: string;
	URL: string;
	OFFLINE: boolean;
}

export interface IContext {
	username: string;
	login: (username: string) => void;
	logout: () => void;
}

export enum LOCAL_STORAGE {
	USERNAME = "chatAppUsername",
	MESSAGES = "chatAppMessages",
}
