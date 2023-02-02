import { getProductAction } from '../store/actions/getProductAction'
export const loadProduct = (product) => {
	return dispatch => {
		fetch(`http://127.0.0.1:3333/products/${product}`)
		.then(res => res.json())
		.then(json => dispatch(getProductAction(json[0])))
	}

}
