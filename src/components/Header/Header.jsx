import { NavLink } from "react-router-dom";


export const Header = () => {

  return (
    <header>
      <nav>
        <ul>
          <li><NavLink to="/">Главная</NavLink></li>
          <li><NavLink to="/about">О сайте</NavLink></li>
          <li><NavLink to="/category">Категории</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;