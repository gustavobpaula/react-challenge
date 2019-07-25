import React from 'react';
import { useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import ProductItem from './ProductItem';

export default function ProductList() {
	const products = useSelector(state => state.products);

	return (
		<>
			{products.map(product => (
				<Grid key={product.id} item xs={12} sm={6} lg={3}>
					<ProductItem product={product} />
				</Grid>
			))}
		</>
	);
}
