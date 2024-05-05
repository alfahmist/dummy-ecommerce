import { useEffect, useState } from 'react';
import { ProductList } from '../../components';
import axios from 'axios';

const getProducts = () => {
	return axios.get('https://dummyjson.com/products?limit=0');
};

const index = () => {
	const [data, setData] = useState([]);
	useEffect(() => {
		getProducts().then((response) => {
			console.log(response.data.products);
			setData(response.data.products);
		});
	}, []);
	return (
		<>
			<ProductList products={data.slice(0, 10)} title={'Hightlight Products'} />
			<ProductList
				products={data.filter((x) => x.category === 'smartphones')}
				title={'Category Smartphone'}
			/>
			<ProductList
				products={data.filter((x) => x.category === 'laptops')}
				title={'Category Laptop'}
			/>
		</>
	);
};

export default index;
