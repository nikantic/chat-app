export interface IMessage {
	author: string;
	message: string;
	timestamp: number;
}

export interface IConfig {
	TOKEN: string;
	URL: string;
	USERNAME: string;
	OFFLINE: boolean;
}
