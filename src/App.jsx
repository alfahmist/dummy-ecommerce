import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DetailPage, HomePage, ProductPage } from './pages';
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
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
