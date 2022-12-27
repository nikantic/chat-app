# Chat App

Simple chat app with React, TypeScript and Styled Components.

## Important

Config file with secrets is part of `.gitignore`.  To run app locally you will need to create your own `config.ts` file inside `./src/data` folder with the following - *endpoint URL, token and username* (which will be set again on login)

```ts
import { IConfig } from "../types/types";

const CONFIG: IConfig = {
	TOKEN: "YOUR_AWESOME_UNIQUE_TOKEN",
	URL: "YOUR_AWESOME_API_ENDPOINT",
	USERNAME: "",
};

export default CONFIG;
```

Then simply run the app with `npm start`

## Data model

Types are included in `./data/types.ts`. 

Test messages are provided in `./data/testMessages.ts`. 

Expected API endpoint response is array that looks like this example:

```ts
[{
    author: "John Smith",
	message: "Hello World",
	timestamp: 1672165383685,
}]
```

