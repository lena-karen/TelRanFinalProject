import { getProductsAction } from '../store/actions/getProductsAction'
export const loadProducts = (category) => {
	return dispatch => {
		fetch(`http://127.0.0.1:3333/categories/${category}`)
		.then(res => res.json())
		.then(json => {
			const jsonWithHidden = json.map(el => ({...el, hidden: false}))
			dispatch(getProductsAction(jsonWithHidden))
		})
	}

}
