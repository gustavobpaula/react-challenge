import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const INITIAL_STATE = {
	fetching: false,
	fetched: false,
	products: [],
	error: null,
};

function products(state = INITIAL_STATE, action) {
	switch (action.type) {
	case 'FETCH_PRODUCTS_START':
		return { ...state, fetching: true };
	case 'FETCH_PRODUCTS_ERROR':
		return { ...state, fetching: false, error: action.payload };
	case 'RECEIVE_PRODUCTS':
		return {
			...state, fetching: false, fetched: true, products: action.payload,
		};

	default:
		return state;
	}
}

const middleware = applyMiddleware(thunk, logger);
const store = createStore(products, middleware);

export default store;
