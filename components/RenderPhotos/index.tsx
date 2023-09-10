import Image from 'next/image';
//width={400} height={310}
const ListOfPhotos = ({ photos }: { photos: any[] }) => {
	return (
		<ul className='grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-2 my-3 '>
			{photos.map((photo: any) => (
				<li key={photo.id} className='w-full h-40 max-w-full rounded-lg relative border-2'>
					<Image fill={true} sizes='(max-width: 400 100vw' className='hover:opacity-90 object-cover' src={photo.img_src} alt={photo.earth_date} />
				</li>
			))}
		</ul>
	);
};

const RenderPhotos = ({ photos }: { photos: any[] }) => {
	return photos.length > 0 ? <ListOfPhotos photos={photos} /> : <h1 className='text-xl font-semibold my-4'>No Results</h1>;
};

export { RenderPhotos };
