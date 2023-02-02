import { 
		LOAD_PRODUCTS, 
		SORT_PRODUCTS, 
		SEARCH_PRICE, 
		ON_SALE_PRODUCTS 
	} from '../actionsTypes';

const initialState = []
let defaultState = []

export const productsReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOAD_PRODUCTS:
			defaultState = action.payload
			return action.payload
			
		case SORT_PRODUCTS:
			if (action.payload === 'default') {
				return defaultState
			} else if (typeof state[0][action.payload] === 'string') {
				return [...state].sort((a, b) => a[action.payload].localeCompare(b[action.payload]))
			} else {
				return [...state].sort((a, b) => a[action.payload] - b[action.payload])
			}
		case SEARCH_PRICE:
			const {minValue, maxValue} = action.payload
			return state.map(el => {
				if (el.discont_price <= maxValue && el.discont_price >= minValue) {
					el.hidden = false
				} else {
					el.hidden = true
				}
				return el
			})
		case ON_SALE_PRODUCTS:
			return state.filter(el => el.discont_price > 0)

		default:
			return state;
	}
}