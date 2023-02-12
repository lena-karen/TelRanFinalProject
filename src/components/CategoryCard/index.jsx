import React from 'react'
import styles from './index.module.css'
import { Link } from 'react-router-dom'

export default function CategoryCard({id, title, image}) {

  return (
	  <Link to = {`/${id}`} className = {styles.category_card_link}>
      <div className = {styles.category_card}>
        <img src = {`http://127.0.0.1:3333${image}`} alt = {title} />
        <p>{title}</p>
      </div>

    </Link>
  )
}
