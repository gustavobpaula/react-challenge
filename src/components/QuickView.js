import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import CurrencyFormat from 'react-currency-format';
import {
	Paper, CardActions, CardMedia, Typography, DialogTitle, Dialog, Divider, Button,
} from '@material-ui/core';
import productDefaultImage from '../images/product-default.jpg';

const useStyles = makeStyles(theme => ({
	media: {
		maxWidth: 100,
		height: 100,
		width: '100%',
		margin: '20px 30px',
	},
	brand: {
		[theme.breakpoints.up('md')]: {
			paddingLeft: 0,
		},
	},
	details: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		textAlign: 'center',
		[theme.breakpoints.up('md')]: {
			textAlign: 'left',
			flexDirection: 'row',

		},
	},
	title: {
		paddingRight: theme.spacing(2),
		[theme.breakpoints.down('sm')]: {
			padding: theme.spacing(2),
		},
	},
	titleDescription: {
		padding: theme.spacing(2),
		[theme.breakpoints.down('sm')]: {
			textAlign: 'center',
		},
	},
	description: {
		padding: theme.spacing(2),
		[theme.breakpoints.down('sm')]: {
			textAlign: 'center',
		},
	},
	actions: {
		[theme.breakpoints.up('md')]: {
			paddingLeft: 0,
		},
	},
	buttonBuy: {
		marginLeft: 0,
		[theme.breakpoints.down('sm')]: {
			margin: 'auto',
		},
	},
}));

export default function QuickView() {
	const classes = useStyles();
	const dispatch = useDispatch();
	const quickView = useSelector(state => state.quickView);

	function handleClose() {
		dispatch({ type: 'CLOSE_QUICK_VIEW' });
	}

	function addToCart() {
		dispatch({
			type: 'ADD_TO_CART',
			item: quickView.product,
		});
		handleClose();
	}

	return (
		quickView.product ? (
			<Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={quickView.isOpen}>
				<Paper>
					<div className={classes.details}>
						<CardMedia className={classes.media} image={quickView.product.picture || productDefaultImage} title={quickView.product.title} />
						<div className={classes.info}>
							<DialogTitle className={classes.brand} id="simple-dialog-title">{quickView.product.brand}</DialogTitle>
							<Typography variant="body2" component="h1" className={classes.title}>
								{quickView.product.title}
							</Typography>
							<Typography variant="body2" color="textSecondary" component="h3" className={classes.memory}>
								{quickView.product.memory}
							</Typography>
							<Typography variant="h5" component="h2">
								<CurrencyFormat value={quickView.product.price} displayType="text" prefix="R$ " decimalSeparator="," thousandSeparator="." />
							</Typography>
							<CardActions className={classes.actions}>
								<Button variant="contained" onClick={addToCart} className={classes.buttonBuy} color="primary" size="large">Add To Cart</Button>
							</CardActions>
						</div>
					</div>
					<Divider variant="middle" />
					<Typography variant="h5" component="h2" className={classes.titleDescription}>
						Description
					</Typography>
					<Typography component="p" className={classes.description}>
						{quickView.product.description}
					</Typography>
				</Paper>
			</Dialog>
		) :	null
	);
}
