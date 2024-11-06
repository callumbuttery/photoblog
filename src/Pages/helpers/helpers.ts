export const truncate = (input: string): string =>
	input.length > 200 ? `${input.substring(0, 200)}...` : input;

export const formatDate = (date: string): string => {
	if (!date) return "";
	return new Date(date).toLocaleDateString("en-GB");
};
