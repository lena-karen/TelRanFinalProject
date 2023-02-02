import React from 'react'
import styles from './index.module.css'
import cn from 'classnames'
import Banner from '../../components/Banner'
import Coupon from '../../components/Coupon'
import CategoriesContainer from '../../components/CategoriesContainer'
import Actions from '../../components/Actions'
import { HashRouter } from 'react-router-dom'

export default function MainPage() {
  return (

	    <div className = {styles.main_page}>
        <Banner />
        <CategoriesContainer />
        <Coupon />
        <Actions />
      </div>


  )
}