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
					path: '/category/:categoryName',
					element: <CategoryPage />,
				},
				{
					path: '/search/:name',
					element: <SearchPage />,
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
