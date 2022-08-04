import { useNavigate } from "react-router-dom"

export const CategoryCard = ({ name, id }) => {

  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/categories/${id}-${name}`)
  }

  return (
    <div className="category__item" onClick={handleClick}>
      <div className="category__color" id={`category${id}`}></div>
      <span className="category__name">{name}</span>
    </div>
  )
}
