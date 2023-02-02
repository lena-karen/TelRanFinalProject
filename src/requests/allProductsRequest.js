import { getAllProductsAction } from '../store/actions/getAllProductsAction'
export const loadAllProducts = (dispatch) => {
	fetch('http://127.0.0.1:3333/products/all')
		.then(res => res.json())
		.then(json => {
			const jsonWithHidden = json.map(el => ({...el, hidden: false}))
			dispatch(getAllProductsAction(jsonWithHidden))
		})
}

