// import logo from './logo.svg';
import './sass/main.scss';
import logo from './img/logo.png';
import svg_sprite from './img/sprite.svg';

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
