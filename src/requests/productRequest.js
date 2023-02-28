import { getProductAction } from '../store/actions/getProductAction'
export const loadProduct = (product) => {
	const url_render = 'https://gardenshop.onrender.com'
	const url_localhost = 'http://127.0.0.1:3333'
	return dispatch => {
		fetch(`${url_render}/products/${product}`)
		.then(res => res.json())
		.then(json => dispatch(getProductAction(json[0])))
	}

}
