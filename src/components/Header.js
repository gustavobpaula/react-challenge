import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
	AppBar, Toolbar, Typography, CardMedia,
} from '@material-ui/core';
import Cart from './Cart';
import logo from '../images/logo.png';

const useStyles = makeStyles({
	root: {
		flexGrow: 1,
		marginBottom: 20,
	},
	title: {
		flexGrow: 1,
	},
	media: {
		maxWidth: 200,
		width: 'auto',
		height: 80,
		backgroundSize: 'contain',
	},
});

export default function SimpleAppBar() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar>
					<Typography variant="h6" color="inherit" className={classes.title}>
						<CardMedia className={classes.media} image={logo} title="Avec" />
					</Typography>
					<Cart />
				</Toolbar>
			</AppBar>
		</div>
	);
}
