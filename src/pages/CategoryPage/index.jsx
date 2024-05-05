import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

import { Pagination, ProductList } from '../../components';

const getProducts = () => {
	return axios.get('https://dummyjson.com/products?limit=0');
};

const index = () => {
	let DataViewPerPage = 4;

	const [data, setData] = useState([]);
	const [startData, setStartdata] = useState(0);
	const [viewData, setViewData] = useState(DataViewPerPage);

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
			<ProductList
				products={data.slice(startData, viewData)}
				title={categoryName}
			/>
			<Pagination
				startData={startData}
				viewData={viewData}
				totalData={data.length}
				setStartdata={setStartdata}
				setViewData={setViewData}
				DataViewPerPage={DataViewPerPage}
			/>
		</>
	);
};

export default index;
