import React, { useContext } from 'react';
import '../styles/ProductItem.scss';
import AppContext from '../context/AppContext';
import addToCartIcon from "@icons/bt_add_to_cart.svg";

const ProductItem = ({ product }) => {
	const { addToCart } = useContext(AppContext);

	const handleClick = (item) => {
		addToCart(item)
	}
	
	return (
		<div className="ProductItem" alt={product.title}>
			<img src={product.images[0]} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={() => handleClick(product)}>
					<img src={addToCartIcon} alt="" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;