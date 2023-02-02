import { createStore,  combineReducers, applyMiddleware} from 'redux';
import { persistStore, persistReducer} from 'redux-persist'

import { categoriesReducer } from './reducers/categoriesReducer';
import { productsReducer } from './reducers/productsReducer';
import { productReducer } from './reducers/productReducer';
import { cartReducer } from './reducers/cartReducer';
import { allProductsReducer } from './reducers/allProductsReducer';

import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['cart']
}
const rootReducer = combineReducers({
	categories: categoriesReducer,
	products: productsReducer,
	product: productReducer,
	allProducts: allProductsReducer,
	cart: cartReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = createStore(persistedReducer, applyMiddleware(thunk))
export const persistor = persistStore(store)