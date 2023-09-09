import Image from 'next/image';
import withResults from '../../mocks/results.json';
const photoResults = withResults.photos;

const ListOfPhotos = () => {
	return (
		<ul className='grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-2 my-3 '>
			{photoResults.map(photo => (
				<li key={photo.id} className='w-100 h-40 md:w-80  h-auto max-w-full rounded-lg relative  border-e-2'>
					<Image width={400310} height={310} className='hover:opacity-90 h-80 object-cover' src={photo.img_src} alt={photo.earth_date} />
				</li>
			))}
		</ul>
	);
};

const RenderPhotos = () => {
	const haveResults = photoResults.length > 0;
	return haveResults ? <ListOfPhotos /> : 'No results';
};

export { RenderPhotos };
