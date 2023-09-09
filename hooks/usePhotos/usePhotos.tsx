import { useEffect, useState } from 'react';
import { FetchPhotos } from '@/services/FetchPhotos';

const API_KEY = 'DEMO_KEY';
const DEFAULT_ROVER = 'curiosity';
const DEFAULT_CURRENTPG = 1;
const DEFAULT_CAMERA = 'fhaz';

interface UsePhotosOptions {
	searchDate?: string;
	rover?: string;
	current_pg?: number;
	camera?: string;
}

export function usePhotos(options: UsePhotosOptions = {}) {
	const { searchDate, rover = DEFAULT_ROVER, current_pg = DEFAULT_CURRENTPG, camera = DEFAULT_CAMERA } = options;

	const [photos, setPhotos] = useState<any[]>([]);

	const getPhotos = async () => {
		const URI = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=1000&camera=${camera}&page=${current_pg}&api_key=${API_KEY}`;
		const response = await FetchPhotos({ URI: URI });
		setPhotos(response);
		console.log('fetching');
	};

	useEffect(() => {
		getPhotos();
	}, [rover, current_pg, camera, searchDate]);

	return { photos, getPhotos };
}
