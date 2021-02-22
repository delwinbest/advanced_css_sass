// import logo from './logo.svg';
import './sass/main.scss';
import logo from './img/logo.png';
import svg_sprite from './img/sprite.svg';
import user_img from './img/user.jpg';
import user_1 from './img/user-1.jpg';
import user_2 from './img/user-2.jpg';
import user_3 from './img/user-3.jpg';
import user_4 from './img/user-4.jpg';
import user_5 from './img/user-5.jpg';
import user_6 from './img/user-6.jpg';
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
              <div className="detail">
                <div className="description">
                  <p className="paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.
                  </p>
                  <p className="paragraph">
                    Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate delectus, inventore iure aliquid aliquam.
                  </p>
                  <ul className="list">
                    <li className="list__item">Close to the beach</li>
                    <li className="list__item">Breakfast included</li>
                    <li className="list__item">Free airport shuttle</li>
                    <li className="list__item">Free wifi in all rooms</li>
                    <li className="list__item">Air conditioning and heating</li>
                    <li className="list__item">Pets allowed</li>
                    <li className="list__item">We speak all languages</li>
                    <li className="list__item">Perfect for families</li>
                  </ul>
                  <div className="recommend">
                    <p className="recommend__count">
                      Lucy and 3 other friends recommend this hotel.
                    </p>
                    <div className="recommend__friends">
                      <img src={user_3} alt="Friend 1" className="recommend__photo"/>
                      <img src={user_4} alt="Friend 2" className="recommend__photo"/>
                      <img src={user_5} alt="Friend 3" className="recommend__photo"/>
                      <img src={user_6} alt="Friend 4" className="recommend__photo"/>
                    </div>
                  </div>
                </div>
                <div className="user-reviews">
                  <figure className="review">
                    <blockquote className="review__text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi, totam, itaque officia ex.
                    </blockquote>
                    <figcaption className="review__user">
                      <img src={user_1} alt="User 1" className="review__photo"/>
                      <div className="review__user-box">
                        <p className="review__user-name">Nick Smith</p>
                        <p className="review__user-date">Feb 23rd, 2017</p>
                        </div>
                        <div className="review__rating">7.8</div>
                    </figcaption>
                  </figure>

                  <figure className="review">
                    <blockquote className="review__text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi.                    </blockquote>
                    <figcaption className="review__user">
                      <img src={user_2} alt="User 1" className="review__photo"/>
                      <div className="review__user-box">
                        <p className="review__user-name">Mary Thomas</p>
                        <p className="review__user-date">Sep 13th, 2017</p>
                      </div>
                      <div className="review__rating">9.3</div>
                    </figcaption>
                  </figure>
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
