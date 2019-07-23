import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Popper from '@material-ui/core/Popper';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

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
}));

export default function CustomizedBadges() {
	const classes = useStyles();
	const [anchorEl, setAnchorEl] = React.useState(null);

	function handleClick(event) {
		setAnchorEl(anchorEl ? null : event.currentTarget);
	}

	const open = Boolean(anchorEl);
	const id = open ? 'simple-popper' : undefined;

	return (
		<>
			<IconButton aria-label="Cart" aria-describedby={id} variant="contained" onClick={handleClick}>
				<StyledBadge badgeContent={4} color="primary">
					<ShoppingCartIcon color="inherit" />
				</StyledBadge>
			</IconButton>

			<Popper id={id} open={open} anchorEl={anchorEl} transition>
				{({ TransitionProps }) => (
					<Fade {...TransitionProps} timeout={350}>
						<Paper>
							<Typography className={classes.typography}>The content of the Popper.</Typography>
						</Paper>
					</Fade>
				)}
			</Popper>
		</>
	);
}
