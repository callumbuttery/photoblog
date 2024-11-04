import { useEffect, useState } from "react";
import { getAllEntries } from "../../../api/contentful/getAllEntries";

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
		<div className="flex justify-center mt-10">
			<div></div>
		</div>
	);
};
