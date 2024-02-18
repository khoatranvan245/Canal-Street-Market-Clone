import { Link, useLocation } from 'react-router-dom'
import styles from './NavBar.module.css'
import { useLayoutEffect } from 'react'

const NavBar = ({ content }) => {
  const location = useLocation()
  useLayoutEffect(() => {
    document.querySelector(`.${styles.active}`).classList.remove(styles.active)
    document.querySelector(`a[href='${location.pathname}']`).classList.add(styles.active)
  }, [location.pathname])
  return (
    <nav className={styles.navBar}>
      <Link
        to="/"
        className={styles.active}
      >
        <span>Home</span>
        <div className={styles.content}>{content}</div>
      </Link>
      <Link to="/food">
        <p>餐饮</p>
        <span>Food</span>
        <div className={styles.content}>{content}</div>
      </Link>
      <Link to="/retail">
        <p>購物</p>
        <span>Retail</span>
        <div className={styles.content}>{content}</div>
      </Link>
      <Link to="/community">
        <p>文化</p>
        <span>Community</span>
        <div className={styles.content}>{content}</div>
      </Link>
    </nav>
  )
}

export default NavBar
