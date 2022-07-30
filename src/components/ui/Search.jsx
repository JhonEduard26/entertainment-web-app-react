import search from '../../assets/icons/search.svg'

export const Search = () => {
  return (
    <div className="search">
      <img src={search} alt="" />
      <input className="search__input" type="text" placeholder="Search movies or tv series" />
    </div>
  )
}
