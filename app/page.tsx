'use client';
import React, { useEffect, useState } from 'react';
import Pagination from '@/components/Pagination';
import { Aside } from '@/components/Aside';
import { getCurrentDate } from '@/utils/getCurrentDate';
import SearchContext, { SearchContextType } from '@/hooks/SearchContext';

export default function Home() {
	const [camera, setCamera] = useState<string>('FHAZ');
	const [startDate, setStartDate] = useState<string>(getCurrentDate('-'));
	const [dateType, setDateType] = useState<string>('Earth');
	const [rover, setRover] = useState<string>('Curiosity');

	const contextValue: SearchContextType = {
		camera,
		setCamera,
		startDate,
		setStartDate,
		dateType,
		setDateType,
		rover,
		setRover,
	};

	useEffect(() => {
		console.log(camera, startDate, dateType, rover, ' first fetch data page');
	}, []);
	useEffect(() => {
		console.log(camera, startDate, dateType, rover, ' data page');
	}, [camera, startDate, dateType, rover]);

	return (
		<SearchContext.Provider value={contextValue}>
			<div className='w-full flex flex-col-reverse md:flex-row flex-wrap justify-around items-start '>
				<div className='content md:border-r-2 border-gray-300 p-4 w-full md:w-8/12'>
					<h1 className='font-bold text-5xl text-gray-700'>Mars Rover Photos</h1>
					<div className='wrap-movies'>
						{/* <RenderPhotos photos={photos} /> */}
						<Pagination />
					</div>
				</div>
				<Aside />
			</div>
		</SearchContext.Provider>
	);
}
