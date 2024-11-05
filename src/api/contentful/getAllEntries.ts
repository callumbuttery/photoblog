import { createContentfulClient } from "../helpers/createContentfulClient";

export const getAllEntries = async () => {
	try {
		const client = createContentfulClient;
		const entries = await client.getEntries();

		return entries.items;
	} catch (error) {
		console.error(error);
		return [];
	}
};
