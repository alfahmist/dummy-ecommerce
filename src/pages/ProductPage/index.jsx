import { useEffect, useState } from 'react';
import axios from 'axios';

import { ProductList } from '../../components';

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
			<ProductList products={data} title={'All Product'} />
		</>
	);
};

export default index;
