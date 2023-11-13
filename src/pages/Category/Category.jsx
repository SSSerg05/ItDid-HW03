import { Link, useLocation } from "react-router-dom";


export const Category = ({cat}) => {

  const url = useLocation();

  return (
  <>
    <h1>Category</h1>
    
    <ul>
      {
        cat.map(item => (
          <li key={url}>
            <Link to={`${url.pathname}/${item.url}`}>{item.text}</Link>
          </li>
        ))
      }
    </ul>
  </>
  )
}

export default Category;