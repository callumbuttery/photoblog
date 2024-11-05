export interface Blog {
	fields: BlogFields;
	sys: SystemInfo;
}

export interface BlogFields {
	blogAuthor: string;
	blogDate: string; // ISO date string, could use Date if parsed on fetch
	blogImage: BlogImage;
	blogImages: [BlogImage];
	blogSummary: string;
	blogTitle: string;
	postContent: string;
	publish: boolean;
}

export interface BlogImage {
	sys: SystemInfo;
	fields: ImageField;
	metadata: {
		concepts: [];
		tags: [];
	};
}

interface ImageFileDetails {
	fileName: string;
	url: string;
	details: {
		image: {
			height: number;
			width: number;
		};
		size: number;
	};
}

interface ImageField {
	description: string;
	file: ImageFileDetails;
	title: string;
}

interface SystemInfo {
	contentType?: { sys: { id: string } };
	createdAt: string;
	environment?: { sys: { id: string } };
	id: string;
	locale: string;
	publishedVersion: number;
	revision: number;
	space?: { sys: { id: string } };
	type: string;
	updatedAt: string;
}
