import { createClient } from "contentful";

export const createContentfulClient = createClient({
	space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
	accessToken: import.meta.env.VITE_CONTENTFUL_API_KEY,
});
