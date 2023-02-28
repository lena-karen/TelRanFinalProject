import React from 'react'
import styles from './index.module.css'
import { Link } from 'react-router-dom'
import { url_localhost, url_render } from '../../variables'

export default function CategoryCard({id, title, image}) {

  return (
	  // <Link to = {`/${id}`} className = {styles.category_card_link}>
	  <Link to = {`/${id}`} className = {styles.category_card_link}>
      <div className = {styles.category_card}>
        <img src = {`${url_render}${image}`} alt = {title} />
        <p>{title}</p>
      </div>

    </Link>
  )
}
