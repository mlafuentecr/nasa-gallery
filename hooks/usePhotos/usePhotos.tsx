import { useContext, useState } from 'react';
import { FetchPhotos } from '@/services/FetchPhotos';
import ThemeContext, { ThemeContextType } from '@/hooks/ThemeContext';
import { getCurrentDate } from '@/utils/getCurrentDate';
import withResults from '../../mocks/results.json';

export function usePhotos() {
	const theme = useContext<ThemeContextType | undefined>(ThemeContext);
	const [photos, setPhotos] = useState<any[]>([]);
	//const photoResults = withResults.photos;

	const url = 'https://api.nasa.gov/mars-photos/api/v1';
	const URI = `${url}/rovers/${theme?.rover}/photos?sol=1000&camera=${theme?.camera}&page=${theme?.currentPage}&api_key=EMO_KEY`;

	const getPhotos = async () => {
		const newPhotos = await FetchPhotos({ URI });
		setPhotos(newPhotos);
		console.log(URI, 'fetching successful', photos);
	};

	return { photos, getPhotos };
}
