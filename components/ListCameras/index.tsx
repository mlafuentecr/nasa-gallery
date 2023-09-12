'use client';
import React, { useContext, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import ThemeContext, { ThemeContextType } from '@/hooks/ThemeContext';

export const camerasNames = [
	{ id: 'FHAZ', name: 'Front Hazard Avoidance Camera' },
	{ id: 'RHAZ', name: 'Rear Hazard Avoidance Camera	' },
	{ id: 'MAST', name: 'Mast Camera' },
	{ id: 'CHEMCAM', name: 'Chemistry and Camera Complex	' },
	{ id: 'MAHLI', name: 'Mars Hand Lens Imager' },
	{ id: 'MARDI', name: 'Mars Descent Imager' },
	{ id: 'NAVCAM', name: 'Navigation Camera' },
	{ id: 'PANCAM', name: 'Panoramic Camera' },
	{ id: 'MINITES', name: 'Miniature Thermal Emission Spectrometer (Mini-TES)' },
];

const ListCameras = () => {
	const theme = useContext<ThemeContextType | undefined>(ThemeContext);
	const handleCameraChange = (selectedCamera: any) => {
		if (theme) {
			theme.setCamSelectedName(selectedCamera.name);
			theme.setCamera(selectedCamera.id);
		}
	};

	return (
		<Listbox value={theme?.camera} onChange={selectedCamera => handleCameraChange(selectedCamera)}>
			{({ open }) => (
				<div className='relative mt-1 z-40'>
					<Listbox.Button className='border-gray-800  flex justify-between bg-slate-700 text-white relative w-full cursor-default rounded-lg  py-2 px-3  text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm'>
						<span className='block truncate'>{theme?.camSelectedName ? theme.camSelectedName : 'Select an item'}</span>
						<span>▼</span>
					</Listbox.Button>
					{open && (
						<Transition leave='transition ease-in duration-100' leaveFrom='opacity-100' leaveTo='opacity-0'>
							<Listbox.Options className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
								{camerasNames.map(item => (
									<Listbox.Option key={item.id} value={item}>
										{({ selected }) => (
											<div className={`${theme?.camera ? 'bg-amber-100 text-amber-900' : 'text-gray-900'} cursor-pointer select-none py-2 pl-10 pr-4 relative`}>
												<span className={`block truncate ${theme?.camera ? 'font-medium' : 'font-normal'}`}>{item.name}</span>
											</div>
										)}
									</Listbox.Option>
								))}
							</Listbox.Options>
						</Transition>
					)}
				</div>
			)}
		</Listbox>
	);
};

export default ListCameras;
