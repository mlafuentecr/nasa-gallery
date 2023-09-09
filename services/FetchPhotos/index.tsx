import { useEffect, useState } from 'react';

interface FetchProps {
	URI: string | null;
}

export function FetchPhotos({ URI }: FetchProps) {
	const [photos, setPhotos] = useState<any[]>([]);

	useEffect(() => {
		const getPhotos = async () => {
			if (URI !== null) {
				try {
					const response = await fetch(URI);
					const json = await response.json();
					setPhotos(json);
					console.log(json, 'fetchjs');
				} catch (ex) {
					console.error('fetch inner', ex);
				}
			}
		};

		getPhotos();
	}, [URI]);

	return photos;
}
