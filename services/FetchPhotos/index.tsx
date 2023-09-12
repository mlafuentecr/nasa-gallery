export const FetchPhotos = async (URI: any) => {
	try {
		console.log('fetching2...', URI);
		const response = await fetch(URI);
		if (!response.ok) {
			throw new Error(`HTTP Error: ${response.status} ${response.statusText}`);
		}

		const json = await response.json();
		if (response.ok) return json.photos;
		console.log(json, 'fetchjs');
	} catch (error) {
		console.error('Eposible limit is full error fetching photos:', error);
	}
};
