'use client';
import React, { useContext, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import ThemeContext, { ThemeContextType } from '@/hooks/ThemeContext';

const SavedSearch = () => {
	const theme = useContext<ThemeContextType | undefined>(ThemeContext);
	const [selectedIndex, setSelectedIndex] = useState<null | number>();

	const handleLoadSavedUrl = (item: any, index: number) => {
		setSelectedIndex(index);
		//load url
		theme?.handleLoadUrlFromMemory(item);
	};

	return (
		<Listbox value={theme?.savedUrls}>
			{({ open }) => (
				<div className='relative mt-1 z-30'>
					<Listbox.Button className='border-gray-800 flex justify-between bg-slate-700 text-white relative w-full cursor-default rounded-lg py-2 px-3 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm'>
						<span className='block truncate'>{selectedIndex ? selectedIndex : 'Select one option'}</span>
						<span>▼</span>
					</Listbox.Button>
					{open && (
						<Transition leave='transition ease-in duration-100' leaveFrom='opacity-100' leaveTo='opacity-0'>
							<Listbox.Options className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
								{theme?.savedUrls.map((item: string, index: number) => (
									<Listbox.Option key={index} value={item}>
										{({ active, selected }) => (
											<div
												key={index}
												onClick={() => handleLoadSavedUrl(item, index + 1)}
												className={`${active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'} cursor-pointer select-none py-2 pl-10 pr-4`}
											>
												<span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>{index + 1}</span>
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

export default SavedSearch;
