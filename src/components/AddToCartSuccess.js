import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Snackbar, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { useSelector, useDispatch } from 'react-redux';

const useStyles = makeStyles(theme => ({
	close: {
		padding: theme.spacing(0.5),
	},
}));

export default function AddToCartSucess() {
	const classes = useStyles();
	const open = useSelector(state => state.cartSuccessFeedbackIsOpen);
	const dispatch = useDispatch();

	/**
	 * Close added cart success feedback
	 *
	 * @param {*} event
	 * @param {String} reason
	 * @returns
	 */
	function handleClose(event, reason) {
		if (reason === 'clickaway') {
			return;
		}
		dispatch({ type: 'CLOSE_CART_SUCCESS_FEEDBACK' });
	}
	return (
		<Snackbar
			anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
			open={open}
			autoHideDuration={3000}
			onClose={handleClose}
			ContentProps={{
				'aria-describedby': 'message-id',
			}}
			message={<span id="message-id">Produto adicionado ao carrinho</span>}
			action={[
				<IconButton
					key="close"
					aria-label="close"
					color="inherit"
					className={classes.close}
					onClick={handleClose}
				>
					<CloseIcon />
				</IconButton>,
			]}
		/>
	);
}
