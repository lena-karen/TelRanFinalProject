import { getCategoriesAction } from '../store/actions/getCategoriesAction'

export const loadCategories = (dispatch) => {
	const url_render = 'https://gardenshop.onrender.com'
	const url_localhost = 'http://127.0.0.1:3333'
	fetch(`${url_render}/categories/all`)
		.then(res => res.json())
		.then(json => dispatch(getCategoriesAction(json)))
}
