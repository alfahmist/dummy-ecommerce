import { useEffect, useState } from 'react';
import { ProductList } from '../../components';
import axios from 'axios';

const getProducts = () => {
	return axios.get('https://dummyjson.com/products?limit=0');
};

const getCategories = () => {
	return axios.get('https://dummyjson.com/products/categories');
};

const index = () => {
	const [data, setData] = useState([]);
	const [categories, setCategories] = useState([]);
	useEffect(() => {
		getProducts().then((response) => {
			console.log(response.data.products);
			setData(response.data.products);
		});

		getCategories().then((response) => {
			console.log(response.data);
			setCategories(response.data);
		});
	}, []);
	return (
		<>
			<ProductList products={data.slice(0, 10)} title={'Hightlight Products'} />
			{categories.slice(0, 5).map((category) => {
				return (
					<ProductList
						products={data.filter((x) => x.category === category)}
						title={`Category ${category}`}
					/>
				);
			})}
		</>
	);
};

export default index;
