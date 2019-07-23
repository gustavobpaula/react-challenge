import React from 'react';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Card from './Components/Card';
import Header from './Components/Header';

function App() {
	return (
		<div className="App">
			<CssBaseline />
			<Header />
			<Container fixed>
				<Grid container direction="row" justify="flex-start" alignItems="left" spacing={3}>
					<Grid item xs="12" sm="6" lg="3">
						<Card />
					</Grid>
					<Grid item xs="12" sm="6" lg="3">
						<Card />
					</Grid>
					<Grid item xs="12" sm="6" lg="3">
						<Card />
					</Grid>
					<Grid item xs="12" sm="6" lg="3">
						<Card />
					</Grid>
					<Grid item xs="12" sm="6" lg="3">
						<Card />
					</Grid>
					<Grid item xs="12" sm="6" lg="3">
						<Card />
					</Grid>
					<Grid item xs="12" sm="6" lg="3">
						<Card />
					</Grid>
					<Grid item xs="12" sm="6" lg="3">
						<Card />
					</Grid>
				</Grid>
			</Container>
		</div>
	);
}

export default App;
