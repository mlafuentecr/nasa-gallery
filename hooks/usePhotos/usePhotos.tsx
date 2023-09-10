import { useContext, useEffect, useState } from 'react';
import { FetchPhotos } from '@/services/FetchPhotos';
import SearchContext, { SearchContextType } from '@/hooks/SearchContext';
import { getCurrentDate } from '@/utils/getCurrentDate';
import withResults from '../../mocks/results.json';

export function usePhotos() {
	const searchContext = useContext<SearchContextType | undefined>(SearchContext);
	const [photos, setPhotos] = useState<any[]>([]);
	const API_KEY = 'DEMO_KEY';
	const photoResults = withResults.photos;

	const { camera, rover, currentPage } = searchContext || {
		camera: 'fhaz',
		rover: 'Curiosity',
		currentPage: 1,
		startDate: getCurrentDate('-'),
		dateType: 'earth_date',
	};
	const url = 'https://api.nasa.gov/mars-photos/api/v1';
	const URI = `${url}/rovers/${rover}/photos?sol=1000&camera=${camera}&page=${currentPage}&api_key=${API_KEY}`;

	const getPhotos = async () => {
		const newPhotos = await FetchPhotos({ URI: URI });
		setPhotos(newPhotos);
		console.log(URI, 'fetching successful', photos);
	};

	return { photos, getPhotos };
}
