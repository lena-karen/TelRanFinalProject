import React, {useEffect} from 'react'
import styles from './index.module.css'
import Banner from '../../components/Banner'
import Coupon from '../../components/Coupon'
import CategoriesContainer from '../../components/CategoriesContainer'
import Actions from '../../components/Actions'
import Helmet from 'react-helmet'

export default function MainPage() {
  
  return (
	    <div className = {styles.main_page}>
        <Helmet>
          <title>Garden Shop</title>
        </Helmet>
        <Banner />
        <CategoriesContainer />
        <Coupon />
        <Actions />
      </div>


  )
}
