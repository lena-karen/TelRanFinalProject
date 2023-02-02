import React from 'react'
import styles from './index.module.css'
import cn from 'classnames'
import Button from '../Button'

export default function Banner() {
  return (
    <section className = {styles.banner}>
      <div className = {cn(styles.banner_info, 'wrapper')}>
        <h2>New Season </h2>
        <h2>Sale</h2>
        <div className = {styles.btns}>
          <Button 
            color = 'transparent' 
            className = {styles.all_actions_btn}
          >
            Sale
          </Button>

          <Button 
            color = 'transparent' 
            className = {styles.more_btn}
          >
            Learn more
          </Button>
        </div>

      </div>

    </section>
  )
}
