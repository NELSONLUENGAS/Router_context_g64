import { useContext } from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { CartPage } from './pages/CartPage';

function App() {
	return (
		<>
			<Router>
				<header>
					<ul>
						<li>
							<Link to="/">
								<p>Home</p>
							</Link>
						</li>
						<li>
							<Link to="/cart">
								<p>Cart</p>
							</Link>
						</li>
					</ul>
				</header>

				<Routes>
					<Route
						path="/"
						element={<HomePage />}
					/>
					<Route
						path="/cart"
						element={<CartPage />}
					/>
				</Routes>
				<footer>
					<p style={{ textAlign: 'center' }}>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
						nesciunt ipsa quo dolores maiores quisquam veniam, vel recusandae
						expedita officiis, rem modi, perferendis est officia consequuntur
						cumque necessitatibus vitae? Illo!
					</p>
				</footer>
			</Router>
		</>
	);
}

export default App;
