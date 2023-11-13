import { useLocation } from "react-router-dom";


export const Category = ({cat}) => {

  const url = useLocation();

  return (
  <>
    <h1>Category</h1>
    
    <ul>
      {
        cat.map(item => (
          <li key={url}>
            <a href={`${url.pathname}/${item.url}`}>{item.text}</a>
          </li>
        ))
      }
    </ul>
  </>
  )
}

export default Category;