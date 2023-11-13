import { Link, useLocation } from "react-router-dom";


export const Category = () => {

  const url = useLocation();

  return (
  <>
    <h1>Category</h1>
    
    <Link to={url.pathname}>Назад</Link>
    <ul>
      <li><Link to={`${url.pathname}/notebook`}>Ноутбуки</Link></li>
      <li><Link to={`${url.pathname}/monitor`}>Мониторы</Link></li>
      <li><Link to={`${url.pathname}/cellphone`}>Мобильные телефоны</Link></li>
    </ul>
  </>
  )
}

export default Category;