import styles from "./Navbar.module.css"

import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <div>
        <nav>
            <NavLink to = "/">Mini <span>Blog</span></NavLink>
        </nav>
        <ul>
            <li>
                <NavLink to = "/About">Sobre</NavLink>
            </li>
        </ul>
    </div>
  )
}

export default Navbar