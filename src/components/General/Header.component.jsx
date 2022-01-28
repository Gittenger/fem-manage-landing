import React from 'react'
import CIndex from '../components.index.js'
import images from '../../assets/img-index.js'
import styles from './styles/Header.module.css'
import gridStyles from './styles/Layout.module.css'

const HeaderStyles = 'relative grid w-full'

const {
  img: { LogoImg },
} = images

const Header = ({ className }) => {
  const { HamburgerMenu } = CIndex
  return (
    <header
      className={`HEADER ${HeaderStyles} ${gridStyles.gridSection} ${styles.header}`}
    >
      <HamburgerMenu className={`${styles.btn} z-50`} />
      <img className={`${styles.logo} z-50`} src={LogoImg} alt="" />
    </header>
  )
}

export default Header
