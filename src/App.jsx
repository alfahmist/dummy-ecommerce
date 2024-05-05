import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import {
	DetailPage,
	HomePage,
	ProductPage,
	CategoryPage,
	SearchPage,
	ErrorPage,
} from './pages';
import Layout from './Layout';

function App() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Layout />,
			errorElement: <ErrorPage />,
			children: [
				{
					path: '/',
					element: <HomePage />,
				},
				{
					path: '/products',
					element: <ProductPage />,
				},
				{
					path: '/products/detail/:productId',
					element: <DetailPage />,
				},
				{
					path: '/products/category/:categoryName',
					element: <CategoryPage />,
				},
				{
					path: '/products/search/:name',
					element: <SearchPage />,
				},
				{
					path: '/add-product',
					element: <></>,
				},
				{
					path: '/products-editor',
					element: <></>,
				},
			],
		},
	]);

	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
