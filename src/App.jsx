import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DetailPage, HomePage, ProductPage, CategoryPage } from './pages';
import { Navigation } from './components';
function App() {
	return (
		<>
			<BrowserRouter>
				<Navigation />
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/products' element={<ProductPage />} />
					<Route path='/products/detail/:productId' element={<DetailPage />} />
					<Route path='/category/:categoryName' element={<CategoryPage />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
