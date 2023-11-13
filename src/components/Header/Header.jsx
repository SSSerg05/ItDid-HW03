
export const Header = ({nav}) => {

  return (
    <header>
      <nav>
        <ul>
          {
            nav.map(item => (
              <li key={item.url}>
                <a href={item.url}>{item.text}</a>
              </li>
            ))
          }
        </ul>
      </nav>
    </header>
  )
}

export default Header;