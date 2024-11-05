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
		};

		fetchEntries();
	}, []);

	return (
		<div className="mt-24 max-w-fit flex flex-col mx-auto">
			<div>
				<h1 className="text-4xl font-bold">Latest</h1>
				<h2 className="text-xl mt-3">A blog about my adventures</h2>
				<div className="divider"></div>
			</div>
			{blogs.length ? (
				blogs.map((blog: Blog) => (
					<div key={blog.sys.id} className="flex justify-center mt-16">
						<div className="card lg:card-side bg-base-100 shadow-2xl h-fit mx-auto w-full">
							<figure className="max-w-lg max-h-96">
								{blog.fields.blogImage && (
									<img
										src={blog.fields.blogImage.fields.file.url}
										alt="Album"
										className="object-contain"
									/>
								)}
							</figure>
							<div className="w-96 p-4 flex flex-col">
								<h3 className="card-title text-2xl">{blog.fields.blogTitle}</h3>
								<p className="mt-2 text-lg">{blog.fields.blogSummary}</p>
								<div className="mt-auto mb-2">
									<p>{blog.fields.blogDate}</p>
									<p>{blog.fields.blogAuthor}</p>
									<div className="card-actions justify-center mt-3">
										<button className="btn btn-primary">View</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				))
			) : (
				<BlogLoadingSkeleton />
			)}
		</div>
	);
};
