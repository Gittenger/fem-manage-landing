import React from 'react'
import CIndex from '../components.index.js'
import images from '../../assets/img-index.js'
import styles from './styles/Header.module.css'
import gridStyles from './styles/Layout.module.css'

const HeaderStyles = 'relative grid w-full bg-gray-300'

const {
  img: { LogoImg },
} = images

const Header = () => {
  const { HamburgerMenu } = CIndex
  return (
    <header
      className={`HEADER ${HeaderStyles} ${gridStyles.gridSection} ${styles.header}`}
    >
      <HamburgerMenu className={`${styles.btn}`} />
      <img className={`${styles.logo}`} src={LogoImg} alt="" />
    </header>
  )
}

export default Header
