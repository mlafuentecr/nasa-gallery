const formatDate = (inputDateStr: string) => {
	const inputDate = new Date(inputDateStr);
	const year = inputDate.getFullYear();
	const month = String(inputDate.getMonth() + 1).padStart(2, '0'); // Add 1 to month since it's zero-based
	const day = String(inputDate.getDate()).padStart(2, '0');

	return `${year}-${month}-${day}`;
};

export default formatDate;
