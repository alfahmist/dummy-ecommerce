import { useState } from 'react';
import { Form, ProductList } from '../../components';

const index = () => {
	const [data, setData] = useState([]);

	return (
		<>
			<Form setData={setData} data={data} method={'post'} />
			<ProductList products={data} title={'Added Product'} />
		</>
	);
};
export default index;
