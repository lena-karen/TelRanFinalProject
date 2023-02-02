import React from 'react'
import styles from './index.module.css'
import ArrowIcon from './ArrowIcon'
import CloseIcon from './CloseIcon'
import MinusIcon from './MinusIcon'
import PlusIcon from './PlusIcon'
import { useDispatch } from 'react-redux'
import { deleteFromCartAction } from '../../store/actions/deleteFromCartAction'
import { decreaseProductAction } from '../../store/actions/decreaseProductAction'
import { increaseProductAction } from '../../store/actions/increaseProductAction'
import { useNavigate } from 'react-router-dom'

export default function CartCard({id, title, image, price, discont_price, count, categoryId}) {

  const dispatch = useDispatch()
  const navigate = useNavigate()
 
  const increase = (id) => dispatch(increaseProductAction(id))
  const decrease = (id) => dispatch(decreaseProductAction(id))

  return (
    <div className = {styles.cart_card}>
      <div 
        className = {styles.product_img} 
        onClick={() => navigate(`/${categoryId}/${id}`)}
      >
        <img src = {`http://127.0.0.1:3333${image}`} alt = {title} />
      </div>

      <div 
        className = {styles.product_title}
        onClick={() => navigate(`/${categoryId}/${id}`)}
      >
        <p>{title}</p>
      </div>

      <form className = {styles.form}>
        <div 
          className = {styles.change_btn}
          onClick = {() => decrease(id)}
        >
          <MinusIcon />
        </div>

        <input 
          name = 'input' 
          className = {styles.input} 
          type = 'number' 
          value = {count} 

        />

        <div 
          className = {styles.change_btn}
          onClick = {() => increase(id)}
        >
          <PlusIcon />
        </div>
      </form>

      <div className = {styles.product_price}>{discont_price}<span>$</span></div>
      <div className = {styles.product_old_price}>{price}<span>$</span></div>
      <div 
        className = {styles.delete} 
        onClick = {() => dispatch(deleteFromCartAction(id))}
      >
        <CloseIcon  />
      </div>

  </div>
  )
}