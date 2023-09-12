import React, { useState } from 'react';
import Image from 'next/image';

const ListOfPhotos = ({ photos, currentPage, onPageChange }: { photos: any[]; currentPage: number; onPageChange: (page: number) => void }) => {
	const photosPerPage = 25;
	const totalPages = Math.ceil(photos.length / photosPerPage);
	console.log(totalPages);
	const startIndex = (currentPage - 1) * photosPerPage;
	const endIndex = startIndex + photosPerPage;
	const currentPhotos = photos.slice(startIndex, endIndex);

	return (
		<>
			<ul className='w-full grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-2 my-3'>
				{currentPhotos.map((photo: any) => (
					<li key={photo.id} className='w-full h-40 max-w-full rounded-lg relative border-2'>
						<Image fill={true} sizes='(max-width: 400 100vw' className='hover:opacity-90 object-cover' src={photo.img_src} alt={photo.earth_date} />
					</li>
				))}
			</ul>

			<Pagination currentPage={currentPage} totalPages={Math.ceil(photos.length / photosPerPage)} onPageChange={onPageChange} />
		</>
	);
};

const Pagination = ({ currentPage, totalPages, onPageChange }: { currentPage: number; totalPages: number; onPageChange: (page: number) => void }) => {
	const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

	return (
		<div className='flex justify-center mt-4'>
			{pageNumbers.map(pageNumber => (
				<button key={pageNumber} onClick={() => onPageChange(pageNumber)} className={`px-2 py-1 mr-1 border rounded-md hover:bg-gray-200 ${currentPage === pageNumber ? 'bg-gray-200' : ''}`}>
					{pageNumber}
				</button>
			))}
		</div>
	);
};

const RenderPhotos = ({ photos }: { photos: any[] }) => {
	const [currentPage, setCurrentPage] = useState(1);
	const photosPerPage = 25;

	const handlePageChange = (page: number) => {
		setCurrentPage(page);
	};

	if (photos) {
		return photos.length > 0 ? <ListOfPhotos photos={photos} currentPage={currentPage} onPageChange={handlePageChange} /> : <h1 className='text-xl font-semibold my-4'>No Results</h1>;
	} else {
		return (
			<div>
				<h1>Possible Problem with fetch limit</h1>
			</div>
		);
	}
};

export { RenderPhotos };
