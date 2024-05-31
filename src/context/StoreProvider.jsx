import React, { createContext, useEffect, useState } from 'react';

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
	const productsOnCart = JSON.parse(localStorage.getItem('cart'));

	const [products, setProducts] = useState([]);
	const [cart, setCart] = useState(productsOnCart ? productsOnCart : []);

	useEffect(() => {
		fetchProducts();
	}, []);

	const fetchProducts = async () => {
		const productsJson = await fetch('https://fakestoreapi.com/products');
		const products = await productsJson.json();

		const productsFiltered = products.map(
			({ id, title, price, image, description }) => ({
				id,
				title,
				price,
				image,
				description,
				onCart: false,
			})
		);

		setProducts(productsFiltered);
	};

	const addToCart = (id) => {
		const productsModified = products.map((product) =>
			product.id == id ? { ...product, onCart: !product.onCart } : product
		);

		setProducts(productsModified);

		const productsOncart = productsModified.filter(
			(product) => product.onCart == true
		);

		localStorage.setItem('cart', JSON.stringify(productsOncart));

		setCart(productsOncart);
	};

	return (
		<>
			<StoreContext.Provider value={{ products, cart, addToCart }}>
				{children}
			</StoreContext.Provider>
		</>
	);
};
