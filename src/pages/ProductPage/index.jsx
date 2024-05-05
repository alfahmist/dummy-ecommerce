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

	useEffect(() => {
		getProducts().then((response) => {
			console.log(response.data.products);
			setData(response.data.products);
		});
	}, []);

	return (
		<>
			<ProductList
				products={data.slice(startData, viewData)}
				title={'All Product'}
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
