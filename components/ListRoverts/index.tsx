import React, { useContext } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import SearchContext, { SearchContextType } from '@/hooks/SearchContext';

const rovers = [
	{ id: 1, name: 'Curiosity', unavailable: true },
	{ id: 2, name: 'Opportunity', unavailable: false },
	{ id: 3, name: 'Spirit', unavailable: false },
];

const ListRovers = () => {
	const searchContext = useContext<SearchContextType | undefined>(SearchContext);

	const handleRoverChange = (selectedRover: any) => {
		if (searchContext) {
			searchContext.setRover(selectedRover.name);
		}
	};

	return (
		<Listbox value={searchContext?.rover} onChange={selectedRover => handleRoverChange(selectedRover)}>
			{({ open }) => (
				<div className='relative mt-1 z-50'>
					<Listbox.Button className='border-gray-800 flex justify-between bg-slate-700 text-white relative w-full cursor-default rounded-lg py-2 px-3 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm'>
						<span className='block truncate'>{searchContext?.rover ? searchContext?.rover : 'Select a rover'}</span>
						<span>▼</span>
					</Listbox.Button>
					{open && (
						<Transition leave='transition ease-in duration-100' leaveFrom='opacity-100' leaveTo='opacity-0'>
							<Listbox.Options className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
								{rovers.map(item => (
									<Listbox.Option key={item.id} value={item}>
										{({ active, selected }) => (
											<div onClick={() => handleRoverChange(item)} className={`${active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'} cursor-pointer select-none py-2 pl-10 pr-4`}>
												<span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>{item.name}</span>
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

export default ListRovers;
