import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const index = () => {
	const [categoryNames, setCategoryNames] = useState([]);
	useEffect(() => {
		axios.get('https://dummyjson.com/products/categories').then((response) => {
			setCategoryNames(response.data);
		});
	});
	return (
		<>
			<div className='flex flex-wrap space-x-4'>
				{categoryNames.slice(0, 10).map((categoryName) => {
					return (
						<Link
							key={categoryName}
							to={`/products/category/${categoryName}`}
							className='cursor-pointer text-white'
						>
							{categoryName}
						</Link>
					);
				})}
			</div>
		</>
	);
};

export default index;
