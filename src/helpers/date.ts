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

export const formatDate = (date: Date) =>
	`${date.getDate()} ${getMonthName(date.getMonth()).slice(
		0,
		3
	)} ${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
