import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
	Card, CardActions, CardContent, CardMedia, Typography, Button,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import CurrencyFormat from 'react-currency-format';
import { useDispatch } from 'react-redux';
import productDefaultImage from '../images/product-default.jpg';

const useStyles = makeStyles({
	card: {
		minWidth: 275,
		height: '100%',
	},
	media: {
		width: 100,
		height: 100,
		margin: '20px auto',
	},
	actions: {
		justifyContent: 'space-between',
	},
	bullet: {
		display: 'inline-block',
		margin: '0 2px',
		transform: 'scale(0.8)',
	},
	brand: {
		fontSize: 14,
	},
	title: {
		minHeight: 100,
	},
	pos: {
		marginBottom: 12,
	},
});

export default function ProductItem(props) {
	const { product } = props;

	const classes = useStyles();

	const dispatch = useDispatch();

	/**
	 * Add item to Cart
	 *
	 */
	function addToCart() {
		dispatch({
			type: 'ADD_TO_CART',
			item: product,
		});
	}

	/**
	 * Open QuickView
	 *
	 */
	function openQuickView() {
		dispatch({
			type: 'OPEN_QUICK_VIEW',
			item: product,
		});
	}

	return (
		<Card className={classes.card}>
			<CardContent>
				<Typography className={classes.brand} color="textSecondary" gutterBottom>
					{product.brand}
				</Typography>
				<Typography variant="body2" component="p" className={classes.title}>
					{product.title}
				</Typography>
				<CardMedia
					className={classes.media}
					image={product.picture || productDefaultImage}
					title={product.title}
				/>
				<Typography variant="h5" component="h2">
					<CurrencyFormat value={product.price} displayType="text" prefix="R$ " decimalSeparator="," thousandSeparator="." />
				</Typography>
			</CardContent>
			<CardActions className={classes.actions}>
				<Button size="small" onClick={openQuickView}>Learn More</Button>
				<Button size="small" onClick={addToCart}>Add To Cart</Button>
			</CardActions>
		</Card>
	);
}

ProductItem.propTypes = {
	product: PropTypes.shape({
		id: PropTypes.number,
		brand: PropTypes.string,
		title: PropTypes.string,
		picture: PropTypes.string,
		price: PropTypes.number,
	}).isRequired,
};
