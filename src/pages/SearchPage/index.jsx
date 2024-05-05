import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

import { ProductList } from '../../components';

const getProducts = (name) => {
	return axios.get(`https://dummyjson.com/products/search?q=${name}`);
};

const index = () => {
	const [data, setData] = useState([]);
	let { name } = useParams();
	console.log(name);
	useEffect(() => {
		getProducts(name).then((response) => {
			console.log(response.data.products);
			setData(response.data.products);
		});
	}, [name]);
	return data.length !== 0 ? (
		<ProductList products={data} title={'Product'} />
	) : (
		<div>not found</div>
	);
};

export default index;
