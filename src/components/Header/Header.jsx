import { NavLink } from "react-router-dom";


export const Header = ({nav}) => {

  return (
    <header>
      <nav>
        <ul>
          {
            nav.map(item => (
              <li key={item.url}>
                <NavLink to={item.url}>{item.text}</NavLink>
              </li>
            ))
          }
        </ul>
      </nav>
    </header>
  )
}

export default Header;