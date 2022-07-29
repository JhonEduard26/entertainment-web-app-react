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
            <a href="#">
              <img src={home} alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={movies} alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={series} alt="" />
            </a>
          </li>
        </ul>
        <img className='header__account' src={account} alt="" />
      </nav>
    </header>
  )
}
