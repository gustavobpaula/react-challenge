import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const INITIAL_STATE = {
	fetching: false,
	fetched: false,
	products: [],
	error: null,
	cartIsOpen: false,
	cart: {
		isOpen: false,
		items: [],

	},
	quickView: {
		isOpen: false,
		product: null,
	},
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
	case 'ADD_TO_CART':
		return {
			...state, cart: { items: [...state.cart.items, action.item] },
		};
	case 'REMOVE_TO_CART':
		const newItems = state.cart.items.filter((item, index) => index !== action.itemIndex);
		return {
			...state, cart: { items: newItems },
		};
	case 'OPEN_QUICK_VIEW':
		return {
			...state, quickView: { isOpen: true, product: action.item },
		};
	case 'CLOSE_QUICK_VIEW':
		return {
			...state, quickView: { isOpen: false },
		};


	default:
		return state;
	}
}

const middleware = applyMiddleware(thunk, logger);
const store = createStore(products, middleware);

export default store;
