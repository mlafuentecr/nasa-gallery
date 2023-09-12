'use client';
import React, { useContext, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ThemeContext, { ThemeContextType } from '@/hooks/ThemeContext';
import formatDate from '@/utils/formatDate';

interface DatePickerProps {
	dateType: string;
}

const MyDatePicker: React.FC<DatePickerProps> = ({ dateType }) => {
	const theme = useContext<ThemeContextType | undefined>(ThemeContext);
	const [searchDate, setsearchDate] = useState(new Date());

	const handleClick = (date: Date | null) => {
		if (date) {
			const formattedDate = formatDate(date.toDateString());
			setsearchDate(date);
			console.log('formattedDate=', formattedDate, 'xxxxxx', theme?.searchDate);
			theme?.setsearchDate(formattedDate);
			console.log('formattedDate=', formattedDate, 'xxxxxx', theme?.searchDate);
		}
	};

	if (dateType === 'Earth') {
		return (
			<div className='date-picker-wrap relative my-3 w-40  '>
				<span className='absolute left-2 top-3 z-20'>📆</span>
				<DatePicker showIcon selected={searchDate} onChange={date => handleClick(date)} />
			</div>
		);
	} else {
		return '';
	}
};

export default MyDatePicker;
