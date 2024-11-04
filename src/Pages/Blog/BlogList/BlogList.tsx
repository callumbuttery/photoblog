import { useEffect, useState } from "react";
import { getAllEntries } from "../../../api/contentful/getAllEntries";
import { BlogLoadingSkeleton } from ".";

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
				<div>
					<div className="text-4xl flex justify-center pb-24 tracking-widest">
						List of Blogs
					</div>
					<div className="card lg:card-side bg-base-100 shadow-2xl">
						<figure>
							<img
								src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
								alt="Album"
							/>
						</figure>
						<div className="card-body">
							<h2 className="card-title">New album is released!</h2>
							<p>Click the button to listen on Spotiwhy app.</p>
							<div className="card-actions justify-end">
								<button className="btn btn-primary">Listen</button>
							</div>
						</div>
					</div>
				</div>
			) : (
				<BlogLoadingSkeleton />
			)}
		</div>
	);
};
