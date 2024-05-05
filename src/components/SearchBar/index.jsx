import searchIcon from '../../assets/search-svgrepo-com.svg';

const index = () => {
	return (
		<>
			<div className='flex border'>
				<input type='text' className='outline-none px-2' />
				<img src={searchIcon} alt='' className='px-3 cursor-pointer' />
			</div>
		</>
	);
};

export default index;
