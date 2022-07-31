export const CategoryCard = ({ name, id }) => {
  return (
    <div className="category__item">
      <div className="category__color" id={`category${id}`}></div>
      <span className="category__name">{name}</span>
    </div>
  )
}
