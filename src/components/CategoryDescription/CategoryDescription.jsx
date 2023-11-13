import { useParams } from "react-router-dom";


export const CategoryDescription = () => {

  const categoryName = useParams();
  return (
  <>
    <h1>Category: {categoryName}</h1>
  </>
  )
}

export default CategoryDescription;