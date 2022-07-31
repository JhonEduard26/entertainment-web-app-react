import { Link } from "react-router-dom"
import logo from '../../assets/icons/movie.svg'
import home from '../../assets/icons/home.svg'
import movies from '../../assets/icons/film.svg'
import series from '../../assets/icons/tv.svg'
import account from '../../assets/icons/account.svg'

export const Header = () => {
  return (
    <header className='header'>
      <nav className='header__nav'>
        <img src={logo} alt="" />
        <ul className='header__ul'>
          <li>
            <Link to={'/'}>
              <img src={home} alt="home" />
            </Link>
          </li>
          <li>
            <Link to={'/movies'}>
              <img src={movies} alt="movies" />
            </Link>
          </li>
          <li>
            <Link to={'/series'}>
              <img src={series} alt="series" />
            </Link>
          </li>
        </ul>
        <img className='header__account' src={account} alt="" />
      </nav>
    </header >
  )
}
