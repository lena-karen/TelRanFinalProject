import { getAllProductsAction } from '../store/actions/getAllProductsAction'
import { url_localhost, url_render } from '../variables'
export const loadAllProducts = (dispatch) => {
	// const url_render = 'https://gardenshop.onrender.com'
	// const url_localhost = 'http://127.0.0.1:3333'
	fetch(`${url_render}/products/all`)
		.then(res => res.json())
		.then(json => {
			const jsonWithHidden = json.map(el => ({...el, hidden: false}))
			dispatch(getAllProductsAction(jsonWithHidden))
		})
}

