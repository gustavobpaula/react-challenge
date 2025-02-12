import React from 'react';
import { Grid, CssBaseline, Container } from '@material-ui/core';
import { Provider } from 'react-redux';
import store from './store';
import Header from './components/Header';
import ProductList from './components/ProductList';
import QuickView from './components/QuickView';
import AddToCartSucess from './components/AddToCartSuccess';


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
				<AddToCartSucess />

			</div>
		</Provider>
	);
}

export default App;
