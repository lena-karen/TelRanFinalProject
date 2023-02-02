import React, {useEffect} from 'react'
import styles from './index.module.css'
import cn from 'classnames'
import Title from '../Title'
import CategoryCard from '../CategoryCard'

import { useDispatch, useSelector } from 'react-redux'
import { loadCategories } from '../../requests/categoriesRequest'
import { Link } from 'react-router-dom'

export default function CategoriesContainer() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadCategories)
  }, [])

  const categories = useSelector(state => state.categories)

  return (
    <section className = {cn(styles.categories_container, 'wrapper')}>
      <div className = {styles.categories_header}>
        <Title className = {styles.title}>Categories</Title>
        <Link to = '/categories'>All categories</Link>
      </div>

      <div className = {styles.categories_block}>
        {
         categories.slice(0, 4).map(el => <CategoryCard key = {el.id} {...el} />)
        }
      </div>
    </section>
  )
}
