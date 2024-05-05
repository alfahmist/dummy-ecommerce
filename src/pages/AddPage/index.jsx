import { useState } from 'react';
import axios from 'axios';
import { Input, ProductList, SelectCategory } from '../../components';

const index = () => {
	const [data, setData] = useState([]);
	const [id, setId] = useState(101);
	const [price, setPrice] = useState('');
	const [title, setTitle] = useState('');
	const [brand, setBrand] = useState('');
	const [category, setCategory] = useState({});
	const addProducts = (price, title, category, brand, images) => {
		axios
			.post('https://dummyjson.com/products/add', {
				title: title,
			})
			.then(function (response) {
				console.log(response.data);
				setId(id + 1);
				setData([
					...data,
					{
						id: id,
						title: response.data.title,
						price: price,
						category: category,
						brand: brand,
						images: images,
						thumbnail: images,
					},
				]);
			})
			.catch(function (error) {
				console.log(error);
			});
		setTitle('');
		setPrice('');
		setBrand('');
	};
	const getTitle = (e) => {
		setTitle(e.target.value);
	};
	const getPrice = (e) => {
		setPrice(e.target.value);
	};
	const getBrand = (e) => {
		setBrand(e.target.value);
	};

	const getCategory = (selected) => {
		setCategory(selected);
		console.log(selected);
	};
	return (
		<>
			<div className='bg-white'>
				<div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 flex flex-col'>
					<Input name='title' onChange={getTitle} value={title} />
					<br />
					<Input name='price' onChange={getPrice} value={price} />
					<br />
					<Input name='brand' onChange={getBrand} value={brand} />
					<br />
					<SelectCategory getCategory={getCategory} />
					<button
						type='submit'
						className='border-2 px-4 mt-2 ml-auto hover:bg-gray-200 active:bg-gray-300'
						onClick={() =>
							addProducts(price, title, category, brand, [
								'https://dummyimage.com/400x400/000/fff.jpg',
							])
						}
					>
						ADD
					</button>
				</div>
			</div>
			<ProductList products={data} title={'Added Product'} />
		</>
	);
};
export default index;
