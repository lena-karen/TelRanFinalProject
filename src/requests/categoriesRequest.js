import { getCategoriesAction } from '../store/actions/getCategoriesAction'

export const loadCategories = (dispatch) => {
	fetch('http://127.0.0.1:3333/categories/all')
		.then(res => res.json())
		.then(json => dispatch(getCategoriesAction(json)))
}
