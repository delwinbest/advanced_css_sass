// import logo from './logo.svg';
import './sass/main.scss';
import logo from './img/logo.png';
import svg_sprite from './img/sprite.svg';
import user_img from './img/user.jpg';

function App() {
  return (
    <div>
      <body>
        <div className="container">
          <header className="header">
            <img src={logo} alt="" className="logo"/>
            <form action="" className="search">
              <input type="text" className="search__input" placeholder="Search hotels"/>
              <button className="search__button">
                <svg className="search__icon">
                  <use href={`${svg_sprite}#icon-magnifying-glass`}></use>
                </svg>
              </button>
            </form>
            <nav className="user-nav">
              <div className="user-nav__icon-box">
                <svg className="user-nav__icon">
                  <use href={`${svg_sprite}#icon-bookmark`}></use>
                </svg>
              </div>
              <div className="user-nav__icon-box">
                <svg className="user-nav__icon">
                  <use href={`${svg_sprite}#icon-chat`}></use>
                </svg>
                <span className="user-nav__notification">13</span>
              </div>
              <div className="user-nav__user">
                <img src={user_img} alt="" className="user-nav__user-photo"/>
                <span className="user-nav__user_name">Delwin Best</span>
              </div>
            </nav>
          </header>
          <div className="content">
            <nav className="sidebar">
              Navigation
            </nav>
            <main className="hotel-view">
              Hotel View
            </main>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
