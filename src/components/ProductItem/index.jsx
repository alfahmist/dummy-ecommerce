import { Link, useLocation } from 'react-router-dom';

const index = (props) => {
	const { product } = props;
	let location = useLocation();
	let path = '/products/detail/';
	if (location.pathname == '/products-editor') {
		path = location.pathname + '/detail/';
	}
	console.log(location.pathname);
	return (
		<div className='group relative'>
			<div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80'>
				<Link to={`${path}${product.id}`}>
					<img
						src={product.thumbnail}
						alt={product.imageAlt}
						className='h-full w-full object-cover object-center lg:h-full lg:w-full'
					/>
				</Link>
			</div>
			<div className='mt-4 flex justify-between'>
				<div>
					<h3 className='text-sm text-gray-700'>
						<Link to={`${path}${product.id}`}>
							{/* <span aria-hidden='true' className='absolute inset-0' /> */}
							{product.title}
						</Link>
					</h3>
					<Link
						to={`/products/category/${product.category}`}
						className='mt-1 text-sm text-gray-500 hover:text-black'
					>
						{product.category}
					</Link>
					<p className='mt-1 text-sm text-gray-500'>{product.brand}</p>
				</div>
				<p className='text-sm font-medium text-gray-900'>$ {product.price}</p>
			</div>
		</div>
	);
};

export default index;
