import { BlogFields } from "../../Pages/Blog/BlogList/types";
import { createContentfulClient } from "../helpers/createContentfulClient";

// Type guard to ensure entry.fields matches BlogFields
function isBlogFields(fields: any): fields is BlogFields {
	return (
		fields.blogAuthor &&
		fields.blogDate &&
		fields.blogImage &&
		fields.blogSummary &&
		fields.blogTitle &&
		fields.postContent &&
		fields.publish !== undefined
	);
}

export const getSingleEntry = async (
	id: string
): Promise<BlogFields | undefined> => {
	try {
		const entry = await createContentfulClient.getEntry(id);

		if (entry.fields && isBlogFields(entry.fields)) {
			return entry.fields;
		} else {
			throw new Error("Fetched data is not of type BlogFields");
		}
	} catch (error) {
		console.error(error);
		return undefined;
	}
};
