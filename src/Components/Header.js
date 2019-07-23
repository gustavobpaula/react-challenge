import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Cart from './Cart';

const useStyles = makeStyles({
	root: {
		flexGrow: 1,
		marginBottom: 20,
	},
	title: {
		flexGrow: 1,
	},
});

export default function SimpleAppBar() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar>
					<Typography variant="h6" color="inherit" className={classes.title}>
						Avec
					</Typography>
					<Cart />
				</Toolbar>
			</AppBar>
		</div>
	);
}
