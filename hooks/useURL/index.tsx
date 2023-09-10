import { useState } from 'react';

// Define your custom hook
export function useURL() {
	// Create a state variable to store the URL
	const [url, setURL] = useState<string | null>(null);

	const saveURL = (urlToSave: string) => {
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

	const getSavedItems = () => {
		const existingItems = JSON.parse(localStorage.getItem('uniqueNames') || '[]');
		return existingItems;
	};

	const deleteAllItems = () => {
		localStorage.removeItem('uniqueNames');
		console.log('All saved items have been deleted.');
	};

	return { saveURL, getSavedItems, deleteAllItems };
}
