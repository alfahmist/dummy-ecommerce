import { Outlet } from 'react-router-dom';
import { Navigation } from '../components';

const index = () => {
	return (
		<>
			<Navigation />
			<Outlet />
		</>
	);
};

export default index;
