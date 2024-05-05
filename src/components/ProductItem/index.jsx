import { Link } from 'react-router-dom';

const index = (props) => {
	const { product } = props;
	return (
		<div className='group relative'>
			<div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80'>
				<img
					src={product.thumbnail}
					alt={product.imageAlt}
					className='h-full w-full object-cover object-center lg:h-full lg:w-full'
				/>
			</div>
			<div className='mt-4 flex justify-between'>
				<div>
					<h3 className='text-sm text-gray-700'>
						<Link to={`/products/detail/${product.id}`}>
							<span aria-hidden='true' className='absolute inset-0' />
							{product.title}
						</Link>
					</h3>
					<p className='mt-1 text-sm text-gray-500'>{product.category}</p>
					<p className='mt-1 text-sm text-gray-500'>{product.brand}</p>
				</div>
				<p className='text-sm font-medium text-gray-900'>$ {product.price}</p>
			</div>
		</div>
	);
};

export default index;
