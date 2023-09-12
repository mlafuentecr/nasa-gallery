const API_KEY = 'DEMO_KEY';
// Define your custom hook
export function useURL() {
	const saveBookmark = (urlToSave: string) => {
		const uniqueName = `${urlToSave}`;

		const existingItems = JSON.parse(localStorage.getItem('uniqueNames') || '[]');
		const existingItem = existingItems.find((item: any) => item.uniqueName === uniqueName && item.url !== urlToSave);

		if (!existingItem) {
			existingItems.unshift({ uniqueName, url: urlToSave });

			if (existingItems.length > 10) {
				existingItems.pop();
			}

			localStorage.setItem('uniqueNames', JSON.stringify(existingItems));
			console.log(`Saved item with unique name: ${uniqueName}`);
		}
	};

	const getBookmark = () => {
		const existingItems = JSON.parse(localStorage.getItem('uniqueNames') || '[]');
		return existingItems;
	};

	const deleteBookmark = () => {
		localStorage.removeItem('uniqueNames');
		console.log('All saved items have been deleted.');
	};

	const GetURI = (dateType: string, rover: string, searchDate: string, camera: string) => {
		const haveCamera = camera ? `camera=${camera}` : null;
		if (dateType === 'Earth') {
			return `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?earth_date=${searchDate}&${haveCamera}&api_key=${API_KEY}`;
		} else {
			console.log('entrando sol');
			return `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=1000&${haveCamera}&page=1&api_key=DEMO_KEY`;
		}
	};

	return { saveBookmark, getBookmark, deleteBookmark, GetURI };
}

import React from 'react';
