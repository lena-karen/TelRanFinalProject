import React, {useEffect} from 'react'
import styles from './index.module.css'
import cn from 'classnames'
import Title from '../../components/Title';
import Button from '../../components/Button';

import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link, useNavigate } from 'react-router-dom'
import { loadProduct } from '../../requests/productRequest';
import { loadCategories } from '../../requests/categoriesRequest';
import { addToCartAction } from '../../store/actions/addToCartAction';
import { url_localhost, url_render } from '../../variables'

export default function ProductPage() {

  const {currentProduct, category} = useParams();
  const categories = useSelector(state => state.categories)
  const dispatch = useDispatch()

  const currentCategory = categories.find(el => el.id === +category)

  const navigate = useNavigate()
  useEffect(() => {
    dispatch(loadProduct(currentProduct))
    dispatch(loadCategories)
  }, [])

  const product = useSelector(state => state.product)
   const {
          title, 
          image, 
          price, 
          discont_price,
          description
        } = product

  const discount = Math.round(( price - discont_price ) * 100 / price)

  return (
	<div className = {cn(styles.products_page, 'wrapper')}>
    <Title className = {styles.title}>{title}</Title>

    {
      currentCategory &&
      <div className = {styles.paths}>
        <Link to = '/'>Main</Link>&nbsp;&nbsp;/&nbsp;&nbsp;
        <button onClick={() => navigate(`/${category}`)}>
          {currentCategory.title}
        </button>
      </div>
    }

    <div className = {styles.product_block}>
      <img src = {`${url_render}${image}`} alt="" />

      <div className = {styles.product_info}>
        <div className = {styles.price_block}>
          {
            discont_price !== price 
            ? <>
                <p className = {styles.discont_price}>{discont_price}<span>$</span></p>
                <p className = {styles.price}>{price}$</p>
                <p className = {styles.discount}>{discount}%</p>
              </>

            : <p className = {styles.discont_price}>{discont_price}<span>$</span></p>
          }
         
        </div>

        <Button 
          className = {styles.button} 
          color = 'green'
          onClick = {() => dispatch(addToCartAction(product))}
        >
          Add to cart
        </Button>
      
        <div className = {styles.divider}></div>
        <p className = {styles.product_description_title} >Description</p>
        <p className = {styles.product_description} >{description}</p>
      </div>
    </div>
  </div>
  )
}
