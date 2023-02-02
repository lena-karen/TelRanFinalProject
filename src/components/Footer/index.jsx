import React from 'react'
import styles from './index.module.css'
import cn from 'classnames'
import InstagramIcon from './InstagramIcon' 
import WhatsappIcon from './WhatsappIcon'
import Title from '../Title'
import LogoIcon from './LogoIcon'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
	  <footer id = "contacts" className = {cn(styles.footer, 'wrapper')}>
      <Link to = '/' className = {styles.logo}>
        <LogoIcon />
      </Link>

      <div className = {styles.contacts}>
        <Title className = {styles.title}>Contact</Title>
        <p className = {styles.phone}>+7 999 999 99 99</p>

      </div>

      <div className = {styles.socials}>
            <a href = 'https://www.instagram.com/' target = "_blank" >
              <InstagramIcon />
              <p>Instagram</p>
            </a>

            <a href = 'https://www.whatsapp.com/' target = "_blank" >
              <WhatsappIcon />
              <p>WhatsApp</p>
            </a>
        </div>
      <div className = {styles.contacts_address}>
        <Title className = {styles.title}>Address</Title>
        <p className = {styles.address}>Linkstrasse 2, 8 OG, 10785, Berlin, Deutschland</p>
      </div>

      <div className = {styles.working}>
        <Title className = {styles.title}>Working hours</Title>
        <p className = {styles.working_hours}>24 hours a day</p>
      </div>

    </footer>
  )
}
