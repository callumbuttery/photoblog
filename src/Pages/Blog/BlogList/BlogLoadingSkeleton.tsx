export const BlogLoadingSkeleton = () => {
	return (
		<div className="flex w-96 flex-col gap-4">
			<div className="skeleton h-64 w-full"></div>
			<div className="skeleton h-8 w-28"></div>
			<div className="skeleton h-8 w-full"></div>
			<div className="skeleton h-8 w-full"></div>
			<div className="flex justify-center mt-10 text-2xl">Loading blogs...</div>
		</div>
	);
};
