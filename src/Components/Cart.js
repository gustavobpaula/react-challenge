import React from 'react';
import {
	IconButton, Badge, Popper, Fade, Paper, Typography, Divider,
} from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useSelector } from 'react-redux';
import CurrencyFormat from 'react-currency-format';
import CartItem from './CartItem';

const StyledBadge = withStyles(theme => ({
	badge: {
		top: '50%',
		right: -3,
		// The border color match the background color.
		border: `2px solid ${
			theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[900]
		}`,
	},
}))(Badge);

const useStyles = makeStyles(theme => ({
	typography: {
		padding: theme.spacing(2),
	},
	paper: {
		maxHeight: 450,
		overflowY: 'auto',
	},
}));

export default function CustomizedBadges() {
	const classes = useStyles();
	const [anchorEl, setAnchorEl] = React.useState(null);
	const cart = useSelector(state => state.cart);

	function handleClick(event) {
		if (cart.items && cart.items.length !== 0) {
			setAnchorEl(anchorEl ? null : event.currentTarget);
		}
	}

	const open = Boolean(anchorEl);
	const id = open ? 'simple-popper' : undefined;
	let totalize = 0;

	// prettier-ignore
	for (const item of cart.items) {
		totalize += item.price;
	}

	return (
		<>
			<IconButton aria-label="Cart" aria-describedby={id} variant="contained" onClick={handleClick}>
				<StyledBadge badgeContent={cart.items ? cart.items.length : 0} color="primary">
					<ShoppingCartIcon color="inherit" />
				</StyledBadge>
			</IconButton>

			<Popper id={id} open={open} anchorEl={anchorEl} placement="bottom-end" transition>
				{({ TransitionProps }) => (
					<Fade {...TransitionProps} timeout={350}>
						<Paper className={classes.paper}>
							{cart.items && cart.items.map((item, index) => (
								<CartItem key={index} productIndex={index} product={item} />
							))}

							{cart.items && cart.items.length !== 0 && (
								<>
									<Divider />
									<Typography variant="h5" component="h2" className={classes.typography}>
										Total: <CurrencyFormat value={totalize} displayType="text" prefix="R$ " decimalSeparator="," thousandSeparator="." />
									</Typography>
								</>
							)}
						</Paper>
					</Fade>
				)}
			</Popper>
		</>
	);
}
