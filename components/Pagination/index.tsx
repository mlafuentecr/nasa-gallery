import React from 'react';

const Pagination = () => {
	const numberOfPages = 5;

	const styleNumber =
		'flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white';
	return (
		<nav aria-label='navigation' className='text-center'>
			<ul className='inline-flex -space-x-px text-sm '>
				<li>
					<a
						href='#'
						className='flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
					>
						Previous
					</a>
				</li>
				<li>
					<a href='#' id='1' className={styleNumber}>
						1
					</a>
				</li>

				<li>
					<a
						href='#'
						className='flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
					>
						Next
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default Pagination;
