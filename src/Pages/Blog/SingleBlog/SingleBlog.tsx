import { useParams } from "react-router-dom";
import { createContentfulClient } from "../../../api/helpers";
import { useEffect, useState } from "react";
import { BlogFields } from "../BlogList/types";

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

export const SingleBlog: React.FC = () => {
	const contentfulClient = createContentfulClient;
	const { id } = useParams<{ id: string }>();

	const [blog, setBlog] = useState<BlogFields | undefined>(undefined);

	useEffect(() => {
		const fetchEntry = async () => {
			if (!id) return {};
			const entry = await contentfulClient.getEntry(id);

			entry.fields && isBlogFields(entry.fields)
				? setBlog(entry.fields)
				: console.error("Fetched data is not of type BlogFields");
		};

		fetchEntry();
	}, []);

	return (
		<div className="w-10/12 flex flex-col mx-auto">
			{blog ? (
				<div className="">
					<h1 className="flex justify-start text-4xl font-bold mt-24">
						{blog.blogTitle}
					</h1>
					<div className="my-5">
						<p>By: {blog.blogAuthor}</p>
						<p>Date: {blog.blogDate}</p>
					</div>
					<div className="divider"></div>
					<div className="my-10">
						<p>
							<strong>TLDR:</strong> {blog.blogSummary}
						</p>
					</div>
					<div>
						<p>{blog.postContent}</p>
					</div>
				</div>
			) : (
				<div className="hero min-h-screen text-4xl font-bold">
					404 blogs not found
				</div>
			)}
		</div>
	);
};
