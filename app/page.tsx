'use client';
import React, { useEffect, useState } from 'react';
import Pagination from '@/components/Pagination';
import { Aside } from '@/components/Aside';
import { getCurrentDate } from '@/utils/getCurrentDate';
import SearchContext, { SearchContextType } from '@/hooks/SearchContext';
import { RenderPhotos } from '@/components/RenderPhotos';
import { FetchPhotos } from '@/services/FetchPhotos';
import { useURL } from '@/hooks/useURL';

export default function Home() {
	const API_KEY = 'DEMO_KEY';
	const [camera, setCamera] = useState<string>('fhaz');
	const [startDate, setStartDate] = useState<string>(getCurrentDate('-'));
	const [dateType, setDateType] = useState<string>('Earth');
	const [rover, setRover] = useState<string>('Curiosity');
	const [currentPage, setCurrentPage] = useState<number>(1);
	const [photos, setPhotos] = useState<any[]>([]);
	const [savedUrls, setsavedUrls] = useState<any[]>([]);
	const [camSelectedName, setCamSelectedName] = useState('');
	// Use the useURL hook to save and load the URL
	const { saveURL, getSavedItems, deleteAllItems } = useURL();
	const haveCamera = camera ? `&camera=${camera}` : null;
	const URI = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=1000${haveCamera}&api_key=${API_KEY}`;

	const handleFetchUrlFromMemory = async (URI: string) => {
		console.log('FETVCHINNGG', URI);
		const Base = URI.split('https://api.nasa.gov/mars-photos/api/v1/rovers/');
		const baseSplit = Base[1].split('/');
		const rovert = baseSplit[0];
		setRover(rovert);
		const base2 = baseSplit[1].split('photos?sol=1000&');
		const base2Split = base2[1].split('&api_key=DEMO_KEY');
		const camera = base2Split[0].split('camera=');
		const cameraName = camera[1].toUpperCase();
		setCamera(cameraName);
		setCamSelectedName(cameraName);

		const newPhotos = await FetchPhotos(URI);
		setPhotos(newPhotos);
	};
	const handleLoadUrlFromMemory = async (id: string | null) => {
		const existingItems = getSavedItems();
		if (existingItems) {
			setsavedUrls([...existingItems]);
		}
		if (id) {
			handleFetchUrlFromMemory(id);
		}
	};

	const handleSaveUrlFromMemory = async (e: React.MouseEvent<HTMLButtonElement> | null) => {
		console.log('handleSaveUrlFromMemory');
		if (e) e.preventDefault();
		saveURL(URI);
		handleLoadUrlFromMemory(null);
	};

	const handleDeleteUrls = async (e: React.MouseEvent<HTMLButtonElement> | null) => {
		if (e) e.preventDefault();
		deleteAllItems();
		setsavedUrls([]);
	};
	const handleSearch = async (e: React.MouseEvent<HTMLButtonElement> | null) => {
		if (e) e.preventDefault();
		const newPhotos = await FetchPhotos(URI);
		console.log(newPhotos, URI);
		setPhotos(newPhotos);
	};

	useEffect(() => {
		handleSearch(null);
		handleLoadUrlFromMemory(null);
	}, []);

	const contextValue: SearchContextType = {
		camera,
		setCamera,
		camSelectedName,
		setCamSelectedName,
		startDate,
		setStartDate,
		dateType,
		setDateType,
		rover,
		setRover,
		currentPage,
		setCurrentPage,
		handleSearch,
		handleSaveUrlFromMemory,
		handleDeleteUrls,
		savedUrls,
		setsavedUrls,
		deleteAllItems,
		handleFetchUrlFromMemory,
		handleLoadUrlFromMemory,
	};

	return (
		<SearchContext.Provider value={contextValue}>
			<div className='w-full h-full flex flex-col-reverse md:flex-row flex-wrap justify-around items-start '>
				<div className='content h-full md:border-r-2 border-gray-300 p-4 w-full md:w-8/12'>
					<h1 className='font-bold text-5xl text-gray-700'>Mars Rover Photos</h1>
					<div className='flex flex-col wrap-movies text-gray-500 h-80 justify-start align-top items-center  '>
						<RenderPhotos photos={photos} />
						{photos ? <Pagination /> : <div></div>}
					</div>
				</div>
				<Aside />
			</div>
		</SearchContext.Provider>
	);
}
