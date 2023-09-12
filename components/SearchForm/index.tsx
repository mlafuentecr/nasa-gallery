import React, { useContext } from 'react';
import ThemeContext, { ThemeContextType } from '@/hooks/ThemeContext';
import ListCameras from '../ListCameras';
import ListRoverts from '../ListRoverts';
import DatePicker from '../DatePicker';

import SavedSearch from '../SavedSearch';

const SearchForm = () => {
	const theme = useContext<ThemeContextType | undefined>(ThemeContext);
	const buttonStye = `bg-gray-300 mt-3 p-3 flex align-middle border-2  border-white }`;

	const handleClick = (type: string) => (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		theme?.setDateType(type);
	};
	return (
		<form action='' className='form'>
			<span className='sub-title font-medium text-2xl'>Rovers</span>
			<ListRoverts />
			<span className='sub-title font-medium text-xl mt-5 flex'>Cameras</span>
			<ListCameras />

			<div className={` flex flex-wrap  text-sm font-medium text-center`}>
				<button className='w-6/12' onClick={handleClick('Earth')}>
					<span className={` ${buttonStye} ${theme?.dateType === 'Earth' ? 'text-gray-black' : 'text-gray-500'}`}> Earth Day</span>
				</button>

				<button className='w-6/12' onClick={handleClick('Sol')}>
					<span className={`${buttonStye} ${theme?.dateType === 'Sol' ? 'text-gray-black' : 'text-gray-500'}`}> Sol Day</span>
				</button>

				<div className='content border-b-2 border-gray-300 px-2 bg-gray-200 w-full'>
					<div className={`flex-col ${theme?.dateType === 'Earth' ? 'flex' : 'hidden'} `}>
						<span className='my-4  text-start w-full text-sm text-gray-500 dark:text-gray-400'>Corresponding date on earth </span>
						<DatePicker dateType='Earth' />
					</div>

					<div className={`flex-col  ${theme?.dateType === 'Sol' ? 'flex' : 'hidden'} `}>
						<span className='w-full my-4  text-sm text-gray-500 dark:text-gray-400'>Corresponding sol date</span>
						<DatePicker dateType='Sol' />
					</div>
				</div>
			</div>

			{theme?.savedUrls && theme.savedUrls.length > 0 ? (
				<div className=''>
					<span className='sub-title font-medium text-xl mt-5 flex'>Saved Search</span>
					<SavedSearch />
					<button className='text-blue-600 flex justify-center  my-3 w-full ' onClick={e => theme?.handleDeleteUrls(e)}>
						delete all searchs
					</button>
				</div>
			) : (
				''
			)}

			<button onClick={e => theme?.handleSearch(e)} type='submit' className='rounded-full  mt-5 px-4 p-2 bg-slate-700 text-white z-10'>
				🔎 Search
			</button>
			<button onClick={e => theme?.handlesaveBookmarkFromMemory(e)} className='rounded-full  mt-5 px-4 p-2  text-blue-500 mx-0 md:mx-2 z-10'>
				🔖 Save this
			</button>
		</form>
	);
};

export default SearchForm;
