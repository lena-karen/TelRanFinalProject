import React, { useEffect } from 'react'
import styles from './index.module.css'
import cn from 'classnames'
import CategoryCard from '../../components/CategoryCard'
import Title from '../../components/Title'

import { useDispatch, useSelector } from 'react-redux'
import { loadCategories } from '../../requests/categoriesRequest'
import { useParams } from 'react-router-dom'


export default function CategoriesPage() {

  const dispatch = useDispatch()

  useEffect(() => {dispatch(loadCategories)}, [])

  const categories = useSelector(state => state.categories)

  //const {category} = useParams()
  //const currentCategory = categories.find(el => el.id == category)
  return (
	<div className = {cn(styles.categories_page, 'wrapper')}>
    <Title className = {styles.title}>Categories</Title>

    <div className = {styles.categories_block}>
        {
         categories.map(el => <CategoryCard key = {el.id} {...el} />)
        }
      </div>
    </div>

  )
}
