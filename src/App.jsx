import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import {
	DetailPage,
	HomePage,
	ProductPage,
	CategoryPage,
	SearchPage,
	ErrorPage,
	AddPage,
	EditPage,
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
					element: <AddPage />,
				},
				{
					path: '/products-editor',
					element: <ProductPage />,
				},
				{
					path: '/products-editor/detail/:productId',
					element: <EditPage />,
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
