import React from 'react';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { Provider } from 'react-redux';
import store from './store';
import Header from './components/Header';
import ProductList from './components/ProductList';
import QuickView from './components/QuickView';


function App() {
	store.dispatch((dispatch) => {
		dispatch({ type: 'FETCH_PRODUCTS_START' });
		fetch(' http://localhost:4000/products').then(res => res.json()).then((res) => {
			dispatch({ type: 'RECEIVE_PRODUCTS', payload: res });
		}).catch((err) => {
			dispatch({ type: 'FETCH_PRODUCTS_ERROR', payload: err });
		});
	});


	return (
		<Provider store={store}>
			<div className="App">
				<CssBaseline />
				<Header />
				<Container fixed>
					<Grid container direction="row" justify="flex-start" spacing={3}>
						<ProductList />
					</Grid>
				</Container>
				<QuickView />

			</div>
		</Provider>
	);
}

export default App;
