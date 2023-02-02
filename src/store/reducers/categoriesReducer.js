import { LOAD_CATEGORIES } from '../actionsTypes';

const initialState = []


export const categoriesReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOAD_CATEGORIES:
			return action.payload
			
		default:
			return state;
	}
}