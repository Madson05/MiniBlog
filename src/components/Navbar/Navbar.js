import styles from "./Navbar.module.css"

import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <div>
        <nav className = {styles.navbar}>
            <NavLink className = {styles.brand} to = "/">Mini <span>Blog</span></NavLink>
        
        <ul className={styles.links_list}>
            <li>
                <NavLink to = "/" className={({isActive}) => (isActive ? styles.active : "")}>Home</NavLink>
            </li>
            <li>
                <NavLink to = "/login" className={({isActive}) => (isActive ? styles.active : "")}>Entrar</NavLink>
            </li>
            <li>
                <NavLink to = "/register" className={({isActive}) => (isActive ? styles.active : "")}>Cadastrar</NavLink>
            </li>
            <li>
                <NavLink to = "/About" className={({isActive}) => (isActive ? styles.active : "")}>Sobre</NavLink>
            </li>
        </ul>
        </nav>
    </div>
  )
}

export default Navbar