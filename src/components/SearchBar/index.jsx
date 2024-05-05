import { Link } from 'react-router-dom';
import searchIcon from '../../assets/search-svgrepo-com.svg';

const index = () => {
	return (
		<>
			<div className='flex border'>
				<input type='text' className='outline-none px-2' />
				<Link to={'/products'} className='flex px-3 cursor-pointer'>
					<img src={searchIcon} alt='searchIcon' />
				</Link>
			</div>
		</>
	);
};

export default index;
