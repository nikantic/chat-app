# Chat App

Simple chat app with React, TypeScript and Styled Components. Works both online and offline.

## Important

To run app you will need to create your own `config.ts` file inside `./src/data` folder with the properties you can find in included `config_example.ts`. Your config file is part of  `.gitignore`.  

```ts
import { IConfig } from "../types/types";

const CONFIG: IConfig = {
	TOKEN: "YOUR_AWESOME_UNIQUE_TOKEN",
	URL: "YOUR_AWESOME_API_ENDPOINT",
    OFFLINE: false, // change to TRUE to enable OFFLINE mode (without TOKEN and URL)
};

export default CONFIG;
```

You can run the app offline by simply changing the `OFFLINE` property above. In order to connect online, remote server should have an exposed endpoint working with `TOKEN` header provided in every request (check `./src/helpers/requests.ts` for more).

Then simply run the app with `npm start`

## Data model

Types are included in `./data/types.ts`. 

Test messages are provided in `./data/testMessages.ts`. 

Expected API endpoint response is array with messages that looks like this example:

```ts
[{
	author: "John Smith",
	message: "Hello World",
	timestamp: 1672165383685,
}]
```

