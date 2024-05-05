import { Link } from 'react-router-dom';

const data = [
	'smartphones',
	'laptops',
	'fragrances',
	'skincare',
	'groceries',
	'home-decoration',
	'furniture',
	'tops',
	'womens-dresses',
	'womens-shoes',
	'mens-shirts',
	'mens-shoes',
	'mens-watches',
	'womens-watches',
	'womens-bags',
	'womens-jewellery',
	'sunglasses',
	'automotive',
	'motorcycle',
	'lighting',
];

const index = () => {
	return (
		<>
			<div className='flex flex-wrap space-x-4'>
				{data.slice(0, 5).map((categoryName) => {
					return (
						<Link
							to={`/category/${categoryName}`}
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
