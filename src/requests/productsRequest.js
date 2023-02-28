import { getProductsAction } from '../store/actions/getProductsAction'
export const loadProducts = (category) => {
	const url_render = 'https://gardenshop.onrender.com'
	const url_localhost = 'http://127.0.0.1:3333'
	return dispatch => {
		fetch(`${url_render}/categories/${category}`)
		.then(res => res.json())
		.then(json => {
			console.log('req', json)
			const jsonWithHidden = json.map(el => ({...el, hidden: false}))
			dispatch(getProductsAction(jsonWithHidden))
		})
	}

}
