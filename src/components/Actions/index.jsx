import React, {useEffect} from 'react'
import styles from './index.module.css'
import cn from 'classnames'

import { useDispatch, useSelector } from 'react-redux'
import { loadAllProducts } from '../../requests/allProductsRequest'

import Title from '../Title'
import ProductCard from '../ProductCard'
export default function Actions() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadAllProducts)
  }, [])

  const allProducts = useSelector(state => state.allProducts)

  const productsWithDiscont = allProducts.filter(el => el.discont_price > 0)
 
  const getRandomElement = (array) => {
    const index = Math.floor(Math.random() * array.length )
    return array[index]
  }

  return (
    <section id = "actions" className = {cn(styles.actions, 'wrapper')}>
      <Title>Sale</Title>
      {
        productsWithDiscont.length >0 ? 
        <div className = {styles.products_block}>
          <ProductCard product = { getRandomElement(productsWithDiscont) } />
          <ProductCard product = { getRandomElement(productsWithDiscont) } />
          <ProductCard product = { getRandomElement(productsWithDiscont) } />
        </div>
        : ''
      }


    </section>
  )
}
