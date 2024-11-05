import { BlogImage } from "../../BlogList/types";

export const Carousel: React.FC<{ images: BlogImage[] }> = ({ images }) => {
	if (!images?.length) return null;
	return (
		<div className="carousel carousel-center rounded-box h-4/12 border">
			{images.map((image, index) => (
				<div className="carousel-item flex px-2 mx-2 w-6/12" key={index}>
					<img
						src={image.fields.file.url}
						className="rounded-box object-contain rounded-lg"
					/>
				</div>
			))}
		</div>
	);
};
