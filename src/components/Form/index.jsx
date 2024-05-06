import { useState } from 'react';
import axios from 'axios';

import { Input, SelectCategory } from '..';

const index = (props) => {
	const { setData, data, edit, method } = props;
	const [id, setId] = useState(101);
	const [price, setPrice] = useState('2');
	const [title, setTitle] = useState('susu coconut delight');
	const [brand, setBrand] = useState('Frisian Flag');
	const [category, setCategory] = useState({});
	const [image, setImage] = useState([]);

	const addProducts = (id, price, title, category, brand, images) => {
		if (method === post) {
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
			setImage([]);
		} else {
			axios
				.put(`https://dummyjson.com/products/${id}`, {
					title: title,
				})
				.then(function (response) {
					console.log(response.data);
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
			setImage([]);
		}
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
	};

	return (
		<div className='bg-white'>
			<div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 flex flex-col'>
				<Input name='title' onChange={getTitle} value={title} />
				<br />
				<Input name='price' onChange={getPrice} value={price} />
				<br />
				<Input name='brand' onChange={getBrand} value={brand} />
				<br />
				<SelectCategory getCategory={getCategory} />
				<img src={`${image}`} className='w-36 my-2' />
				<input
					type='file'
					onChange={(event) => {
						event.target.files.length > 0
							? setImage(URL.createObjectURL(event.target.files[0]))
							: setImage([]);
					}}
				/>
				<button
					type='submit'
					className='border-2 px-4 mt-2 ml-auto hover:bg-gray-200 active:bg-gray-300'
					onClick={() => addProducts(id, price, title, category, brand, image)}
				>
					{edit ? 'edit' : 'add'}
				</button>
			</div>
		</div>
	);
};

export default index;
