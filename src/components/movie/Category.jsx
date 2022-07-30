import { useSelector } from 'react-redux'
import { CategoryCard } from './CategoryCard'

export const Category = () => {

  const { categories } = useSelector(state => state.movies)

  return (
    <section className="category">
      <h2 className="category__title">Categories</h2>
      <div className='category__container'>
        {
          categories.map(category => (
            <CategoryCard key={category.id} name={category.name} id={category.id} />
          ))
        }
      </div>
    </section>
  )
}
