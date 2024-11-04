import { createClient } from "contentful";

export const getAllEntries = async () => {
	try {
		const client = createClient({
			space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
			accessToken: import.meta.env.VITE_CONTENTFUL_API_KEY,
		});
		const entries = await client.getEntries();

		return entries.items;
	} catch (error) {
		console.error(error);
		return [];
	}
};
