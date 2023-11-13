import { useMatches } from "react-router-dom";


export const Category = () => {

  // const matches = useMatches();
  // console.log(matches);
  return (
  <>
    <h1>Category</h1>
    
    <a href="/">Назад</a>
    <ul>
      <li><a href="./cat/notebook">Ноутбуки</a></li>
      <li><a href="./cat/monitor">Мониторы</a></li>
      <li><a href="./cat/cellphone">Мобильные телефоны</a></li>
    </ul>
  </>
  )
}

export default Category;