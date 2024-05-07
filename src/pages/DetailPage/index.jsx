import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

import { StarIcon } from '@heroicons/react/20/solid';

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

const getProducts = (id) => {
	return axios.get(`https://dummyjson.com/products/${id}`);
};

const index = () => {
	const [product, setProduct] = useState({});
	const [images, setImages] = useState([]);
	let { productId } = useParams();

	useEffect(() => {
		getProducts(productId).then((response) => {
			console.log(response.data);
			setProduct(response.data);
			setImages(response.data.images);
		});
	}, []);

	return (
		<div className='bg-white'>
			<div className='pt-6'>
				{/* Image gallery */}
				<div className='mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8'>
					<div className='aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block'>
						<img
							src={images[0]}
							alt={product.title}
							className='h-full w-full object-cover object-center'
						/>
					</div>
					<div className='hidden lg:grid lg:grid-cols-1 lg:gap-y-8'>
						<div className='aspect-h-2 aspect-w-3 overflow-hidden rounded-lg'>
							<img
								src={images[1]}
								alt={product.title}
								className='h-full w-full object-cover object-center'
							/>
						</div>
						<div className='aspect-h-2 aspect-w-3 overflow-hidden rounded-lg'>
							<img
								src={images[2]}
								alt={product.title}
								className='h-full w-full object-cover object-center'
							/>
						</div>
					</div>
					<div className='aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg'>
						<img
							src={images[3]}
							alt={product.title}
							className='h-full w-full object-cover object-center'
						/>
					</div>
				</div>

				{/* Product info */}
				<div className='mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16'>
					<div className='lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8'>
						<h1 className='text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl'>
							{product.title}
						</h1>
					</div>

					{/* Options */}
					<div className='mt-4 lg:row-span-3 lg:mt-0'>
						<h2 className='sr-only'>Product information</h2>
						<p className='text-3xl tracking-tight text-gray-900'>
							${product.price}
						</p>

						{/* Reviews */}
						<div className='mt-6'>
							<h3 className='sr-only'>Reviews</h3>
							<div className='flex items-center'>
								<div className='flex items-center'>
									{[0, 1, 2, 3, 4].map((rating) => (
										<StarIcon
											key={rating}
											className={classNames(
												Math.round(product.rating) > rating
													? 'text-gray-900'
													: 'text-gray-200',
												'h-5 w-5 flex-shrink-0'
											)}
											aria-hidden='true'
										/>
									))}
								</div>
							</div>
						</div>

						<form className='mt-10'>
							<button
								type='submit'
								className='mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
							>
								Add to bag
							</button>
						</form>
					</div>

					<div className='py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6'>
						{/* Description and details */}
						<div>
							<h3 className='sr-only'>Description</h3>

							<div className='space-y-6'>
								<p className='text-base text-gray-900'>{product.description}</p>
							</div>
						</div>

						<div className='mt-10'>
							<div className='mt-4 space-y-6'>
								<p className='text-sm text-gray-600'>Brand : {product.brand}</p>
								<Link
									className='text-sm text-gray-600 '
									to={`/products/category/${product.category}`}
								>
									Category :{' '}
									<span className='hover:text-black'>{product.category}</span>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default index;
