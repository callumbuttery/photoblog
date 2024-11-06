import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { BlogFields } from "../BlogList/types";
import { Carousel } from "./components";
import { getSingleEntry } from "../../../api/contentful/getSingleEntry";
import { formatDate } from "../../helpers";

export const SingleBlog: React.FC = () => {
	const { id } = useParams<{ id: string }>();
	const [blog, setBlog] = useState<BlogFields | undefined>(undefined);

	useEffect(() => {
		const fetchEntry = async () => {
			if (!id) return {};

			const entry = await getSingleEntry(id);
			setBlog(entry);
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
					<div className="my-5 text-xl">
						<p>By: {blog.blogAuthor}</p>
						<p>Date: {formatDate(blog.blogDate)}</p>
						<p className="mt-14">
							<strong>TLDR:</strong> {blog.blogSummary}
						</p>
					</div>
					<div className="divider"></div>
					<div className="my-10 text-xl">
						{blog.blogImages?.length && (
							<div className="flex justify-center my-24">
								<Carousel images={blog.blogImages} />
							</div>
						)}
					</div>
					<div>
						<p className="whitespace-pre-wrap text-lg">{blog.postContent}</p>
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
