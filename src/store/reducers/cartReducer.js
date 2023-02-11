import { 
		ADD_TO_CART, 
		INCREASE_IN_CART, 
		DECREASE_IN_CART,
		DELETE_FROM_CART,
		CHANGE_COUNT_IN_CART 
		} from '../actionsTypes';

const initialState = []

const isInCart = (state = initialState, payload) => {
	const targetProduct = state.find(el => el.id === payload.id)
	if (targetProduct) {
		targetProduct.count++
		return [...state]
	} else {
		return [...state, {
			...payload,
			count: 1
		}]
	}

}

const increaseCount = (state = initialState, payload) => {
	const targetProduct = state.find(el => el.id === payload)
	targetProduct.count++
	return [...state]
}

const changeCount = (state = initialState, id, count) => {
	const targetProduct = state.find(el => el.id === id)
	targetProduct.count = count
	return [...state]
}

const decreaseCount = (state = initialState, payload) => {
	const targetProduct = state.find(el => el.id === payload)
	if (targetProduct.count > 1) {
		targetProduct.count--
	} else return state.filter(el => el.id !== payload)

	return [...state]
}

export const cartReducer = (state = initialState, action) => {

	switch (action.type) {
		case ADD_TO_CART:
			return isInCart(state, action.payload) 

		case INCREASE_IN_CART:
			return increaseCount(state, action.payload)

		case DECREASE_IN_CART:
			return decreaseCount(state, action.payload)
		
		case CHANGE_COUNT_IN_CART:
			return changeCount(state, action.payload.id, action.payload.count)

		case DELETE_FROM_CART:
			return state.filter(el => el.id !== action.payload)
		
		default:
			return state;
	}
}