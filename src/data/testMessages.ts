import { IMessage } from "../types/types";

// Assuming messages would come in random order - date would be used to sort them
export const testMessages: IMessage[] = [
	{
		author: "Petar",
		message: "Second Message",
		timestamp: 1671926400000,
	},
	{
		author: "John",
		message: "First Message",
		timestamp: 1671840000000,
	},
	{
		author: "Alice",
		message: "Third Message",
		timestamp: 1672012800000,
	},
	{
		author: "Nikola",
		message:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur dui in lectus imperdiet, sit amet elementum lacus luctus. Aliquam id velit ultrices, fringilla neque nec, commodo ante. Suspendisse ut fringilla mauris, at porta lorem. Aliquam sed fringilla magna. In hac habitasse platea dictumst. Duis turpis quam, mattis et ante sit amet, consequat pharetra felis.",
		timestamp: 1672165383685,
	},
];
