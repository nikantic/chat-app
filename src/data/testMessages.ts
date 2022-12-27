import { IMessage } from "../types/types";

// Assuming messages would come in random order - date would be used to sort them
export const testMessages: IMessage[] = [
	{
		user: "Petar",
		message: "Second Message",
		date: 2,
	},
	{
		user: "John",
		message: "First Message",
		date: 1,
	},
	{
		user: "Alice",
		message: "Third Message",
		date: 3,
	},
	{
		user: "Nikola",
		message:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur dui in lectus imperdiet, sit amet elementum lacus luctus. Aliquam id velit ultrices, fringilla neque nec, commodo ante. Suspendisse ut fringilla mauris, at porta lorem. Aliquam sed fringilla magna. In hac habitasse platea dictumst. Duis turpis quam, mattis et ante sit amet, consequat pharetra felis.",
		date: 5,
		isMe: true,
	},
];