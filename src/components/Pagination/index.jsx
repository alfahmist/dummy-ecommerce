import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';

const index = (props) => {
	const {
		startData,
		viewData,
		totalData,
		setViewData,
		setStartdata,
		DataViewPerPage,
	} = props;

	let totalPage = Math.ceil(totalData / DataViewPerPage);
	let pages = [];
	for (let index = 1; index <= totalPage; index++) {
		pages.push(index);
	}
	console.log(viewData);
	console.log(totalData);
	console.log(pages);
	const nextPage = () => {
		if (viewData < totalData) {
			setStartdata(startData + DataViewPerPage);
			setViewData(viewData + DataViewPerPage);
			console.log('next Page');
		}
	};

	const prevPage = () => {
		if (viewData < totalData) {
			setStartdata(startData - DataViewPerPage);
			setViewData(viewData - DataViewPerPage);
			console.log('prev Page');
		}
	};

	const currentPage = (page) => {
		setStartdata(page * DataViewPerPage - DataViewPerPage);
		setViewData(page * DataViewPerPage);
		console.log('minus');
	};

	return (
		<>
			<div className='flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6'>
				<div className='flex flex-1 justify-between sm:hidden'>
					<button
						onClick={prevPage}
						className='relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50'
					>
						Previous
					</button>
					<button
						onClick={nextPage}
						className='relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50'
					>
						Next
					</button>
				</div>
				<div className='hidden sm:flex sm:flex-row-reverse sm:flex-1 sm:items-center justify-center gap-4'>
					<div>
						<p className='text-sm text-gray-700'>
							Showing <span className='font-medium'>{startData + 1}</span> to{' '}
							<span className='font-medium'>{viewData}</span> of{' '}
							<span className='font-medium'>{totalData}</span> results
						</p>
					</div>
					<div>
						<nav
							className='isolate inline-flex -space-x-px rounded-md shadow-sm'
							aria-label='Pagination'
						>
							<button
								onClick={prevPage}
								className='relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0'
							>
								<span className='sr-only'>Previous</span>
								<ChevronLeftIcon className='h-5 w-5' aria-hidden='true' />
							</button>
							{/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
							{pages.map((page) => {
								return (
									<button
										onClick={() => currentPage(page)}
										className='relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex'
									>
										{page}
									</button>
								);
							})}

							<button
								onClick={nextPage}
								className='relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0'
							>
								<span className='sr-only'>Next</span>
								<ChevronRightIcon className='h-5 w-5' aria-hidden='true' />
							</button>
						</nav>
					</div>
				</div>
			</div>
		</>
	);
};

export default index;
