import React from 'react'
import styles from './index.module.css'
import Banner from '../../components/Banner'
import Coupon from '../../components/Coupon'
import CategoriesContainer from '../../components/CategoriesContainer'
import Actions from '../../components/Actions'

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
