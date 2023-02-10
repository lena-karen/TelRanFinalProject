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

  const productsWithDiscont = allProducts.filter(el => el.discont_price != el.price)
 
  
  const getRandomElement = (max) => {
    const index = Math.floor(Math.random() * max )
    return index
  }

  let actionProducts = [];
  if (productsWithDiscont.length >= 3) {
    actionProducts = productsWithDiscont
      .map(el => [el, Math.random()])
      .sort((a, b) => a[1] - b[1])
      .map(el => el[0])
      .slice(0, 3)
  } else {
    actionProducts = productsWithDiscont
  }
//console.log(actionProducts)
  return (
    <section id = "actions" className = {cn(styles.actions, 'wrapper')}>
      <Title>Sale</Title>
      {
        productsWithDiscont.length > 0 ? 
        <div className = {styles.products_block}>
            {
              actionProducts.map(el => <ProductCard key = {el.id} product = {el} />)
              // productsWithDiscont.length >= 3
              // ?
              // <>
              //   <ProductCard product = { getRandomElement(productsWithDiscont.length) } />
              //   <ProductCard product = { getRandomElement(productsWithDiscont.length) } />
              //   <ProductCard product = { getRandomElement(productsWithDiscont.length) } /> 
              // </>
              // : <>
              // {
              //   productsWithDiscont.map(el => <ProductCard el = {el.id} product = {el}/>)
              // }
              // </>
            }

       
        </div>
        : ''
      }


    </section>
  )
}
