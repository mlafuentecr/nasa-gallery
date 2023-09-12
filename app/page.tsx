'use client';
import React, { useEffect, useState } from 'react';
import { Aside } from '@/components/Aside';
import { RenderPhotos } from '@/components/RenderPhotos';
import { FetchPhotos } from '@/services/FetchPhotos';
import ThemeContext, { ThemeContextType } from '@/hooks/ThemeContext';
import { useURL } from '@/hooks/useURL';
import { getCurrentDate } from '@/utils/getCurrentDate';
import results from '@/mocks/results.json';
import Image from 'next/image';
export default function Home() {
	const [camera, setCamera] = useState<string>('fhaz');
	const [searchDate, setsearchDate] = useState<string>(getCurrentDate('-'));
	const [dateType, setDateType] = useState<string>('Sol');
	const [rover, setRover] = useState<string>('Curiosity');
	const [currentPage, setCurrentPage] = useState<number>(1);
	const [photos, setPhotos] = useState<any[]>([]);
	const [savedUrls, setsavedUrls] = useState<any[]>([]);
	const [camSelectedName, setCamSelectedName] = useState('FHAZ');
	const { saveBookmark, getBookmark, deleteBookmark, GetURI } = useURL();
	const [URI, setURI] = useState('');

	useEffect(() => {
		const newURI = GetURI(dateType, rover, searchDate, camera);
		setURI(newURI);
	}, [dateType, rover, searchDate, camera]);

	//Savethis Methods
	const handleFetchUrlFromMemory = async (URI: any) => {
		//Rover
		const Base = URI.url.split('/mars-photos/api/v1/rovers/');
		const baseSplit = Base[1].split('/');
		const rovert = baseSplit[0];
		setRover(rovert);
		//Camera
		const base2 = baseSplit[1].split('&camera=');
		console.log(baseSplit, 'baseSplit');
		const base2Split = base2[1].split('&api_key=DEMO_KEY');
		const camera = base2Split[0].split('&');
		const cameraName = camera[0].toUpperCase();

		setCamera(cameraName);
		setCamSelectedName(cameraName);

		const newPhotos = await FetchPhotos(URI.url);
		setPhotos(newPhotos);
	};
	const handleLoadUrlFromMemory = async (id: string | null) => {
		const existingItems = getBookmark();
		if (existingItems) {
			setsavedUrls([...existingItems]);
		}
		if (id) {
			handleFetchUrlFromMemory(id);
		}
	};
	const handlesaveBookmarkFromMemory = async (e: React.MouseEvent<HTMLButtonElement> | null) => {
		console.log('handlesaveBookmarkFromMemory');
		if (e) e.preventDefault();
		saveBookmark(URI);
		handleLoadUrlFromMemory(null);
	};
	const handleDeleteUrls = async (e: React.MouseEvent<HTMLButtonElement> | null) => {
		if (e) e.preventDefault();
		deleteBookmark();
		setsavedUrls([]);
	};
	//handlSearch
	const handleSearch = async (e: React.MouseEvent<HTMLButtonElement> | null, url: string | null) => {
		if (e) e.preventDefault();
		const newPhotos = URI ? await FetchPhotos(URI) : await FetchPhotos(url);
		console.log(newPhotos, URI);
		setPhotos(newPhotos);
	};

	useEffect(() => {
		let newURI = `http://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=10&&api_key=DEMO_KEY`.toString(); //url when start
		setURI(newURI);
		handleSearch(null, newURI);
		handleLoadUrlFromMemory(null);
	}, []);

	const contextValue: ThemeContextType = {
		camera,
		setCamera,
		camSelectedName,
		setCamSelectedName,
		searchDate,
		setsearchDate,
		dateType,
		setDateType,
		rover,
		setRover,
		currentPage,
		setCurrentPage,
		handleSearch,
		handlesaveBookmarkFromMemory,
		handleDeleteUrls,
		savedUrls,
		setsavedUrls,
		URI,
		setURI,
		deleteBookmark,
		handleFetchUrlFromMemory,
		handleLoadUrlFromMemory,
	};
	//testing photos
	//const testphotos = results.photos;
	return (
		<ThemeContext.Provider value={contextValue}>
			<div className='relative'>
				<div className='w-full h-6/12 overflow-hidden mb-5 relative'>
					<div className='text-holder absolute top-44  -right-20  flex flex-col'>
						<h1 className=' border-l-2 ps-10 text-white drop-shadow-md decoration-purple-900 headline text-6xl font-extrabold w-8/12 mb-2 '>Explore NASA API</h1>
						<span className='text-purple-300 ms-10'>By Mario Lafuente</span>
					</div>
					<Image src='/hadline.webp' width={1800} height={400} alt='nasa' className='object-cover ' />
				</div>
				<div className='content w-full  flex flex-col-reverse md:flex-row flex-wrap justify-around items-start py-4  bg-opacity-40  -top-40 relative '>
					<div className='content  md:border-r-2 border-purple-900 p-4 w-full md:w-8/12  '>
						<div className='h-full flex flex-col wrap-movies text-gray-500  justify-start align-top items-center  '>
							<RenderPhotos photos={photos} />
						</div>
					</div>
					<Aside />
				</div>
			</div>
		</ThemeContext.Provider>
	);
}
