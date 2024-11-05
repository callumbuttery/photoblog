import { useState } from "react";
import { BlogImage } from "../../BlogList/types";

export const Carousel: React.FC<{ images: BlogImage[] }> = ({ images }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [overlayImageSrc, setOverlayImageSrc] = useState("");

	const openOverlay = (src: string) => {
		setOverlayImageSrc(src);
		setIsOpen(true);
	};

	const closeOverlay = () => {
		setIsOpen(false);
	};

	if (!images?.length) return null;
	return (
		<div className="carousel carousel-center rounded-box h-4/12 border">
			{images.map((image, index) => (
				<div className="carousel-item flex px-2 mx-2 w-6/12" key={index}>
					<img
						src={image.fields.file.url}
						className="rounded-box object-contain rounded-lg"
						onClick={() => openOverlay(image.fields.file.url)}
					/>
				</div>
			))}
			<div>
				{isOpen && (
					<div
						className="fixed inset-0 flex items-center justify-center bg-gray-100 bg-opacity-50 z-50"
						onClick={closeOverlay}
					>
						<div className="w-4/12">
							<div className="relative max-w-3/4">
								<button
									onClick={closeOverlay}
									className="absolute top-0 right-0 m-4 text-white text-2xl font-bold"
								>
									&times;
								</button>

								<img
									src={overlayImageSrc}
									alt="Enlarged"
									className="object-contain rounded-lg"
								/>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};
