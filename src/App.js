import './App.css';

import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";

import Menu from './Menu/Menu';
import Hero from './Hero/Hero';
import HomePage from './HomePage/HomePage';
import AboutPage from './AboutPage/AboutPage';
import LoginPage from './LoginPage/LoginPage';
import Footer from './Footer/Footer';

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <HomePage/>,
		},
		{
			path: "/about",
			element: <AboutPage/>,
		},
		{
			path: "/login",
			element: <LoginPage/>,
		},
	]);

	return (
    	<div className="App">
    		<Menu/>
      		<Hero/>
			<RouterProvider router={router} />
    		<Footer/>
    	</div>
  	);
}

export default App;
