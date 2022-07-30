export const CategoryCard = ({ name, id }) => {
  return (
    <div className="category__inner-container">
      <div className="category__color" id={`category${id}`}></div>
      <span className="category__name">{name}</span>
    </div>
  )
}
