import { LOAD_PRODUCT } from '../actionsTypes';

const initialState = {}

export const productReducer = (state = initialState, action) => {

	switch (action.type) {
		case LOAD_PRODUCT:
			return action.payload
			
		default:
			return state;
	}
}