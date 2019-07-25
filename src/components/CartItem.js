import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
	Icon, Card, CardActions, CardContent, CardMedia, Typography, Button,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import CurrencyFormat from 'react-currency-format';
import { useDispatch } from 'react-redux';
import productDefaultImage from '../images/product-default.jpg';


const useStyles = makeStyles({
	card: {
		maxWidth: 300,
	},
	button: {
		minWidth: 0,
	},
	media: {
		width: 50,
		height: 50,
		margin: '20px 10px',
	},
	actions: {
		justifyContent: 'space-between',
	},
	details: {
		display: 'flex',
		flexDirection: 'row',
	},
	title: {
		textOverflow: 'ellipsis',
		whiteSpace: 'nowrap',
		overflow: 'hidden',
		width: 150,
	},
});

export default function CartItem(props) {
	const { product, productIndex } = props;

	const classes = useStyles();

	const dispatch = useDispatch();

	/**
	 * Remove item to Cart
	 *
	 */
	function removeToCart() {
		dispatch({
			type: 'REMOVE_TO_CART',
			itemIndex: productIndex,
		});
	}

	return (
		<Card className={classes.card}>
			<div className={classes.details}>
				<CardMedia
					className={classes.media}
					image={product.picture || productDefaultImage}
					title={product.title}
				/>
				<CardContent>
					<Typography variant="body2" component="p" className={classes.title}>
						{product.title}
					</Typography>
					<Typography variant="h5" component="h2">
						<CurrencyFormat value={product.price} displayType="text" prefix="R$ " decimalSeparator="," thousandSeparator="." />
					</Typography>
				</CardContent>
				<CardActions className={classes.actions}>
					<Button size="small" onClick={removeToCart} className={classes.button}>
						<Icon className={classes.icon} fontSize="small">
							remove_shopping_cart
						</Icon>
					</Button>
				</CardActions>
			</div>


		</Card>
	);
}

CartItem.propTypes = {
	product: PropTypes.shape({
		title: PropTypes.string,
		picture: PropTypes.string,
		price: PropTypes.number,
	}).isRequired,
	productIndex: PropTypes.number.isRequired,
};
