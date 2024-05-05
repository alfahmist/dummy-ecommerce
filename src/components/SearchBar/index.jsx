import { Link, useNavigate } from 'react-router-dom';
import searchIcon from '../../assets/search-svgrepo-com.svg';
import { useState } from 'react';

const index = () => {
	const [searchValue, setSearchValue] = useState('');
	let navigate = useNavigate();

	const search = (searchValue) => {
		if (searchValue !== '') {
			navigate(`/search/${searchValue}`);
		}
		setSearchValue('');
	};

	return (
		<>
			<div className='flex border'>
				<input
					type='text'
					className='outline-none px-2'
					value={searchValue}
					onChange={(event) => setSearchValue(event.target.value)}
					onKeyDown={(event) => {
						event.key === 'Enter' && search(searchValue);
					}}
				/>
				<button
					className='px-3 cursor-pointer'
					onClick={() => {
						search(searchValue);
					}}
				>
					<img src={searchIcon} alt='searchIcon' />
				</button>
			</div>
		</>
	);
};

export default index;
