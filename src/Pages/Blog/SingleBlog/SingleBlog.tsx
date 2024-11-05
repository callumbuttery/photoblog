import { useParams } from "react-router-dom";
import { createContentfulClient } from "../../../api/helpers";
import { useEffect, useState } from "react";

export const SingleBlog: React.FC = () => {
	const contentfulClient = createContentfulClient;
	const { id } = useParams<{ id: string }>();

	const [blog, setBlog] = useState<any>({});

	useEffect(() => {
		const fetchEntry = async () => {
			if (!id) return {};
			const entry = await contentfulClient.getEntry(id);

			console.log(entry);
			setBlog(entry);
		};

		fetchEntry();
	}, [id]);

	return <div className="">Single Blog</div>;
};
