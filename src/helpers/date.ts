import { IMessage } from "../types/types";

const MONTH_NAMES = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];

const getMonthName = (monthIndex: number) => MONTH_NAMES[monthIndex];

const formatSingleDigit = (number: number) =>
	number < 10 ? "0" + number : number;

export const sortMessages = (messages: IMessage[]) =>
	[...messages].sort((a, b) => a.timestamp - b.timestamp);

export const formatDate = (date: Date) =>
	`${date.getDate()} ${getMonthName(date.getMonth()).slice(
		0,
		3
	)} ${date.getFullYear()} ${formatSingleDigit(
		date.getHours()
	)}:${formatSingleDigit(date.getMinutes())}`;
