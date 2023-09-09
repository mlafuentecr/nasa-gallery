'use client';
import ListCameras from '../ListCameras';
import ListRoverts from '../ListRoverts';
import DatePicker from '../DatePicker';
import { Tabs } from 'flowbite-react';

export const Aside = () => {
	return (
		<aside className='content  p-4 w-full md:w-4/12 '>
			<span className='sub-title font-medium text-2xl'>Rovers</span>
			<ListRoverts />
			<span className='sub-title font-medium text-2xl mt-5 flex'>Cameras</span>
			<ListCameras />
			<span className='sub-title font-medium text-2xl mt-5 flex'> Search forEarth Day</span>

			<Tabs.Group className=' flex flex-wrap -mb-px text-sm font-medium text-center' aria-label='Tabs with underline' style='underline'>
				<Tabs.Item active title='Earth date'>
					<div className=' text-sm text-left text-gray-500 dark:text-gray-400  '>
						<span className='my-4  w-full text-sm text-gray-500 dark:text-gray-400'>Corresponding date on earth for the given sol</span>
						<DatePicker dateType='Earth' />
					</div>
				</Tabs.Item>

				<Tabs.Item title='Sol date'>
					<div className='text-sm text-gray-500 text-left dark:text-gray-400 '>
						<span className='w-full my-4  text-sm text-gray-500 dark:text-gray-400'>Corresponding sol date</span>
						<DatePicker dateType='Sol' />
					</div>
				</Tabs.Item>
			</Tabs.Group>

			<button className='rounded-full  mt-5 px-4 p-2 bg-slate-700 text-white'>🔎 Search</button>
			<button className='rounded-full  mt-5 px-4 p-2 bg-slate-400 text-white mx-3'>🔖 Save this</button>
		</aside>
	);
};
