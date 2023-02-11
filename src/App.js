import './App.css';

import MainPage from './pages/MainPage';
import CategoriesPage from './pages/CategoriesPage';
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';
import Layout from './components/Layout';
import ProductPage from './pages/ProductPage';
import CatalogPage from './pages/CatalogPage';

import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <Routes>
          <Route path = '/' element = {<Layout />}>
            <Route index element = {<MainPage />} />
            <Route path = 'products' element = {<CatalogPage />} />
            <Route path = 'categories' element = {<CategoriesPage />} />
            <Route path = ':category' element = {<ProductsPage />} />
            <Route path = ':category/:currentProduct' element = {<ProductPage />} />
            <Route path = 'cart' element = {<CartPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
