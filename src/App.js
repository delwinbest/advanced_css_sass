// import logo from './logo.svg';
import './sass/main.scss';
import logo from './img/logo.png';
import svg_sprite from './img/sprite.svg';
import user_img from './img/user.jpg';
import hotel_img_1 from './img/hotel-1.jpg';
import hotel_img_2 from './img/hotel-2.jpg';
import hotel_img_3 from './img/hotel-3.jpg';

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
                <span className="user-nav__notification">7</span>
              </div>
              <div className="user-nav__icon-box">
                <svg className="user-nav__icon">
                  <use href={`${svg_sprite}#icon-chat`}></use>
                </svg>
                <span className="user-nav__notification">13</span>
              </div>
              <div className="user-nav__user">
                <img src={user_img} alt="" className="user-nav__user-photo"/>
                <span className="user-nav__user_name">Delwin</span>
              </div>
            </nav>
          </header>
          <div className="content">
            <nav className="sidebar">
              <ul className="side-nav">
                <li className="side-nav__item side-nav__item--active">
                  <a href="/#" className="side-nav__link">
                    <svg className="side-nav__icon">
                      <use href={`${svg_sprite}#icon-home`}></use> 
                    </svg>
                    <span>Hotel</span>
                  </a>
                </li>
                <li className="side-nav__item">
                  <a href="/#" className="side-nav__link">
                    <svg className="side-nav__icon">
                      <use href={`${svg_sprite}#icon-aircraft-take-off`}></use> 
                    </svg>
                    <span>Flight</span>
                  </a>
                </li>
                <li className="side-nav__item">
                  <a href="/#" className="side-nav__link">
                    <svg className="side-nav__icon">
                      <use href={`${svg_sprite}#icon-key`}></use> 
                    </svg>
                    <span>Car Rental</span>
                  </a>
                </li>
                <li className="side-nav__item">
                  <a href="/#" className="side-nav__link">
                    <svg className="side-nav__icon">
                      <use href={`${svg_sprite}#icon-map`}></use> 
                    </svg>
                    <span>Tours</span>
                  </a>
                </li>
              </ul>

              <div className="legal">
                &copy; 2017 by trillo. All rights reserved.
              </div>

            </nav>
            <main className="hotel-view">
              <div className="gallery">
                <figure className="gallery__item">
                  <img src={hotel_img_1} alt="Hotel 1" className="gallery__photo"/>
                </figure>
                <figure className="gallery__item">
                  <img src={hotel_img_2} alt="Hotel 2" className="gallery__photo"/>
                </figure>
                <figure className="gallery__item">
                  <img src={hotel_img_3} alt="Hotel 3" className="gallery__photo"/>
                </figure>
              </div>
              <div className="overview">
                <h1 className="overview__heading">
                  Hotel Las Palmas
                </h1>
                <div className="overview__stars">
                    <svg className="overview__icon-star">
                      <use href={`${svg_sprite}#icon-star`}></use> 
                    </svg>
                    <svg className="overview__icon-star">
                      <use href={`${svg_sprite}#icon-star`}></use> 
                    </svg>
                    <svg className="overview__icon-star">
                      <use href={`${svg_sprite}#icon-star`}></use> 
                    </svg>
                    <svg className="overview__icon-star">
                      <use href={`${svg_sprite}#icon-star`}></use> 
                    </svg>
                    <svg className="overview__icon-star">
                      <use href={`${svg_sprite}#icon-star`}></use> 
                    </svg>
                </div>
                <div className="overview__location">
                  <svg className="overview__icon-location">
                      <use href={`${svg_sprite}#icon-location-pin`}></use> 
                  </svg>
                  <button className="btn-inline">Albufeira, Portugal</button>
                </div>

                <div className="overview__rating">
                  <div className="overview__rating-average">8.6</div>
                  <div className="overview__rating-count">429 votes</div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
