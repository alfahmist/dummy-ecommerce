import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

import { ProductList } from '../../components';

const getProducts = () => {
	return axios.get('https://dummyjson.com/products?limit=0');
};

const index = () => {
	const [data, setData] = useState([]);
	let { categoryName } = useParams();
	console.log(categoryName);
	useEffect(() => {
		getProducts().then((response) => {
			let arr = response.data.products.filter(
				(x) => x.category === categoryName
			);
			setData(arr);
		});
	}, [categoryName]);

	return (
		<>
			<ProductList products={data} title={categoryName} />
		</>
	);
};

export default index;
