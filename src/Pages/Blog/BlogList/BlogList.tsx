import { useEffect, useState } from "react";
import { getAllEntries } from "../../../api/contentful/getAllEntries";
import { BlogLoadingSkeleton } from ".";
import { Blog } from "./types";

export const BlogList: React.FC = () => {
	const [blogs, setBlogs] = useState<any[]>([]);

	useEffect(() => {
		const fetchEntries = async () => {
			const entries = await getAllEntries();
			setBlogs(entries);
			console.log({ blogs });
		};

		fetchEntries();
	}, []);

	return (
		<div className="flex justify-center mt-32">
			{blogs.length ? (
				blogs.map(
					(blog: Blog) => (
						console.log(
							"blog.fields.blogImage.fields.url",
							blog.fields.blogImage
						),
						(
							<div key={blog.sys.id}>
								<div className="card lg:card-side bg-base-100 shadow-2xl h-2/4 w-2/4 mx-auto">
									<figure>
										<img
											src={blog.fields.blogImage.fields.file.url}
											alt="Album"
											className="object-cover"
										/>
									</figure>
									<div className="card-body">
										<h2 className="card-title">{blog.fields.blogTitle}</h2>
										<p>{blog.fields.postContent}</p>
										<p>{blog.fields.blogDate}</p>
										<p>{blog.fields.blogAuthor}</p>
										<div className="card-actions justify-end">
											<button className="btn btn-primary">View</button>
										</div>
									</div>
								</div>
							</div>
						)
					)
				)
			) : (
				<BlogLoadingSkeleton />
			)}
		</div>
	);
};
