import React, { useContext } from 'react';
import DatePickerLib from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import SearchContext, { SearchContextType } from '@/hooks/SearchContext';
import moment from 'moment';

interface DatePickerProps {
	dateType: string;
}

const MyDatePicker: React.FC<DatePickerProps> = ({ dateType }) => {
	const searchContext = useContext<SearchContextType | undefined>(SearchContext);
	const selectedDate = searchContext?.startDate ? new Date(searchContext?.startDate) : null;

	return (
		<div className='date-picker-wrap relative my-3 w-40  '>
			<span className='absolute left-2 top-3 z-20'>📆</span>
			<DatePickerLib
				className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
				selected={selectedDate}
				onChange={date => {
					const time = moment(date).utc().format('YYYY-MM-DD');
					console.log(time);
					searchContext?.setStartDate(time);
					searchContext?.setDateType(dateType);
				}}
				dateFormat='yyyy-dd-MM'
			/>
		</div>
	);
};

export default MyDatePicker;
