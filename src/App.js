// import logo from './logo.svg';
import './sass/main.scss';
import imgSprite from './img/sprite.svg';
import imgStory1 from './img/story-1.jpeg';
import imgStory2 from './img/story-2.jpeg';
import imgHouse1 from './img/house-1.jpeg';
import imgHouse2 from './img/house-2.jpeg';
import imgHouse3 from './img/house-3.jpeg';
import imgHouse4 from './img/house-4.jpeg';
import imgHouse5 from './img/house-5.jpeg';
import imgHouse6 from './img/house-6.jpeg';

import imgGallery1 from './img/gal-1.jpeg';
import imgGallery2 from './img/gal-2.jpeg';
import imgGallery3 from './img/gal-3.jpeg';
import imgGallery4 from './img/gal-4.jpeg';
import imgGallery5 from './img/gal-5.jpeg';
import imgGallery6 from './img/gal-6.jpeg';
import imgGallery7 from './img/gal-7.jpeg';
import imgGallery8 from './img/gal-8.jpeg';
import imgGallery9 from './img/gal-9.jpeg';
import imgGallery10 from './img/gal-10.jpeg';
import imgGallery11 from './img/gal-11.jpeg';
import imgGallery12 from './img/gal-12.jpeg';
import imgGallery13 from './img/gal-13.jpeg';
import imgGallery14 from './img/gal-14.jpeg';

function App() {
  return (
    <div className="container">
        <div className="sidebar">
        <button className="nav-btn"></button>
        </div>

        <header className="header">
          
        </header>

        <div className="realtors">
          Top 3 Realtors
        </div>

        <section className="features">
          <div className="feature">
            <svg className="feature__icon">
              <use xlinkHref={imgSprite + '#icon-global'} />
            </svg>
            <h4 className="heading-4 heading-4--dark">World's best luxury homes</h4>
            <p className="feature__text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus.
            </p>
          </div>
          <div className="feature">
            <svg className="feature__icon">
              <use xlinkHref={imgSprite + '#icon-trophy'} />
            </svg>
            <h4 className="heading-4 heading-4--dark">Only the best properties</h4>
            <p className="feature__text">
              Voluptatum mollitia quae. Vero ipsum sapiente molestias accusamus rerum sed a eligendi aut quia.
            </p>
          </div>
          <div className="feature">
            <svg className="feature__icon">
              <use xlinkHref={imgSprite + '#icon-map-pin'} />
            </svg>
            <h4 className="heading-4 heading-4--dark">All homes in top locations</h4>
            <p className="feature__text">
              Tenetur distinctio necessitatibus pariatur voluptatibus quidem consequatur harum.
            </p>
          </div>
          <div className="feature">
            <svg className="feature__icon">
              <use xlinkHref={imgSprite + '#icon-key'} />
            </svg>
            <h4 className="heading-4 heading-4--dark">Your home in one week</h4>
            <p className="feature__text">
              Vero ipsum sapiente molestias accusamus rerum. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="feature">
            <svg className="feature__icon">
              <use xlinkHref={imgSprite + '#icon-presentation'} />
            </svg>
            <h4 className="heading-4 heading-4--dark">Top 1% realtors</h4>
            <p className="feature__text">
              Quidem consequatur harum, voluptatum mollitia quae. Tenetur distinctio necessitatibus pariatur voluptatibus.
            </p>
          </div>
          <div className="feature">
            <svg className="feature__icon">
              <use xlinkHref={imgSprite + '#icon-lock'} />
            </svg>
            <h4 className="heading-4 heading-4--dark">Secure payments on nexter</h4>
            <p className="feature__text">
              Pariatur voluptatibus quidem consequatur harum, voluptatum mollitia quae.
            </p>
          </div>
        </section>

        <div className="story__pictures">
          <img src={imgStory1} alt="Couple with new house" className="story__img--1"/>
          <img src={imgStory2} alt="New house" className="story__img--2"/>
        </div>

        <div className="story__content">
          <h3 className="heading-3 mb-sm">Happy Customers</h3>
          <h2 className="heading-2 heading-2--dark mb-md">&ldquo;The best decision of our lives&rdquo;</h2>
          <p className="story__text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus. Quidem consequatur harum volupta!
          </p>
          <button className="btn">Find your own home</button>
        </div>

        <section className="homes">

          <div className="home">
            <img src={imgHouse1} alt="House 1" className="home__img"/>
            <svg className="home__like">
              <use xlinkHref={imgSprite + '#icon-heart-full'} />
            </svg>
            <h5 className="home__name">Beautiful Family House</h5>
            <div className="home__location">
              <svg>
                <use xlinkHref={imgSprite + '#icon-map-pin'} />
              </svg>
              <p>USA</p>
            </div>
            <div className="home__rooms">
              <svg>
                <use xlinkHref={imgSprite + '#icon-profile-male'} />
              </svg>
              <p>5 Rooms</p>
            </div>
            <div className="home__area">
              <svg>
                <use xlinkHref={imgSprite + '#icon-expand'} />
              </svg>
              <p>325m<sup>2</sup></p>
            </div>
            <div className="home__price">
              <svg>
                <use xlinkHref={imgSprite + '#icon-key'} />
              </svg>
              <p>$1,200,000</p>
            </div>
            <button className="btn home__btn">Contact realtor</button>
          </div>

          <div className="home">
            <img src={imgHouse2} alt="House 1" className="home__img"/>
            <svg className="home__like">
              <use xlinkHref={imgSprite + '#icon-heart-full'} />
            </svg>
            <h5 className="home__name">Modern Glass Villa</h5>
            <div className="home__location">
              <svg>
                <use xlinkHref={imgSprite + '#icon-map-pin'} />
              </svg>
              <p>Canada</p>
            </div>
            <div className="home__rooms">
              <svg>
                <use xlinkHref={imgSprite + '#icon-profile-male'} />
              </svg>
              <p>6 Rooms</p>
            </div>
            <div className="home__area">
              <svg>
                <use xlinkHref={imgSprite + '#icon-expand'} />
              </svg>
              <p>450m<sup>2</sup></p>
            </div>
            <div className="home__price">
              <svg>
                <use xlinkHref={imgSprite + '#icon-key'} />
              </svg>
              <p>$2,750,000</p>
            </div>
            <button className="btn home__btn">Contact realtor</button>
          </div>
          
          <div className="home">
            <img src={imgHouse3} alt="House 1" className="home__img"/>
            <svg className="home__like">
              <use xlinkHref={imgSprite + '#icon-heart-full'} />
            </svg>
            <h5 className="home__name">Cozy Country House</h5>
            <div className="home__location">
              <svg>
                <use xlinkHref={imgSprite + '#icon-map-pin'} />
              </svg>
              <p>UK</p>
            </div>
            <div className="home__rooms">
              <svg>
                <use xlinkHref={imgSprite + '#icon-profile-male'} />
              </svg>
              <p>4 Rooms</p>
            </div>
            <div className="home__area">
              <svg>
                <use xlinkHref={imgSprite + '#icon-expand'} />
              </svg>
              <p>250m<sup>2</sup></p>
            </div>
            <div className="home__price">
              <svg>
                <use xlinkHref={imgSprite + '#icon-key'} />
              </svg>
              <p>$850,000</p>
            </div>
            <button className="btn home__btn">Contact realtor</button>
          </div>

          <div className="home">
            <img src={imgHouse4} alt="House 4" className="home__img"/>
            <svg className="home__like">
              <use xlinkHref={imgSprite + '#icon-heart-full'} />
            </svg>
            <h5 className="home__name">Large Rustic Villa</h5>
            <div className="home__location">
              <svg>
                <use xlinkHref={imgSprite + '#icon-map-pin'} />
              </svg>
              <p>Portugal</p>
            </div>
            <div className="home__rooms">
              <svg>
                <use xlinkHref={imgSprite + '#icon-profile-male'} />
              </svg>
              <p>6 Rooms</p>
            </div>
            <div className="home__area">
              <svg>
                <use xlinkHref={imgSprite + '#icon-expand'} />
              </svg>
              <p>480m<sup>2</sup></p>
            </div>
            <div className="home__price">
              <svg>
                <use xlinkHref={imgSprite + '#icon-key'} />
              </svg>
              <p>$1,950,000</p>
            </div>
            <button className="btn home__btn">Contact realtor</button>
          </div>

          <div className="home">
            <img src={imgHouse5} alt="House 5" className="home__img"/>
            <svg className="home__like">
              <use xlinkHref={imgSprite + '#icon-heart-full'} />
            </svg>
            <h5 className="home__name">Magestic Palace House</h5>
            <div className="home__location">
              <svg>
                <use xlinkHref={imgSprite + '#icon-map-pin'} />
              </svg>
              <p>Germany</p>
            </div>
            <div className="home__rooms">
              <svg>
                <use xlinkHref={imgSprite + '#icon-profile-male'} />
              </svg>
              <p>18 Rooms</p>
            </div>
            <div className="home__area">
              <svg>
                <use xlinkHref={imgSprite + '#icon-expand'} />
              </svg>
              <p>4230m<sup>2</sup></p>
            </div>
            <div className="home__price">
              <svg>
                <use xlinkHref={imgSprite + '#icon-key'} />
              </svg>
              <p>$9,500,000</p>
            </div>
            <button className="btn home__btn">Contact realtor</button>
          </div>

          <div className="home">
            <img src={imgHouse6} alt="House 6" className="home__img"/>
            <svg className="home__like">
              <use xlinkHref={imgSprite + '#icon-heart-full'} />
            </svg>
            <h5 className="home__name">Modern Family Apartment</h5>
            <div className="home__location">
              <svg>
                <use xlinkHref={imgSprite + '#icon-map-pin'} />
              </svg>
              <p>Italy</p>
            </div>
            <div className="home__rooms">
              <svg>
                <use xlinkHref={imgSprite + '#icon-profile-male'} />
              </svg>
              <p>3 Rooms</p>
            </div>
            <div className="home__area">
              <svg>
                <use xlinkHref={imgSprite + '#icon-expand'} />
              </svg>
              <p>180m<sup>2</sup></p>
            </div>
            <div className="home__price">
              <svg>
                <use xlinkHref={imgSprite + '#icon-key'} />
              </svg>
              <p>$600,000</p>
            </div>
            <button className="btn home__btn">Contact realtor</button>
          </div>

        </section>

        <section className="gallery">
          <figure className="gallery__item gallery__item--1">
            <img src={imgGallery1} alt="Gallery 1" className="gallery__img"/>
          </figure>
          <figure className="gallery__item gallery__item--2">
            <img src={imgGallery2} alt="Gallery 2" className="gallery__img"/>
          </figure>
          <figure className="gallery__item gallery__item--3">
            <img src={imgGallery3} alt="Gallery 2" className="gallery__img"/>
          </figure>
          <figure className="gallery__item gallery__item--4">
            <img src={imgGallery4} alt="Gallery 4" className="gallery__img"/>
          </figure>
          <figure className="gallery__item gallery__item--5">
            <img src={imgGallery5} alt="Gallery 5" className="gallery__img"/>
          </figure>
          <figure className="gallery__item gallery__item--6">
            <img src={imgGallery6} alt="Gallery 6" className="gallery__img"/>
          </figure>
          <figure className="gallery__item gallery__item--7">
            <img src={imgGallery7} alt="Gallery 7" className="gallery__img"/>
          </figure>
          <figure className="gallery__item gallery__item--8">
            <img src={imgGallery8} alt="Gallery 8" className="gallery__img"/>
          </figure>
          <figure className="gallery__item gallery__item--9">
            <img src={imgGallery9} alt="Gallery 9" className="gallery__img"/>
          </figure>
          <figure className="gallery__item gallery__item--10">
            <img src={imgGallery10} alt="Gallery 10" className="gallery__img"/>
          </figure>
          <figure className="gallery__item gallery__item--11">
            <img src={imgGallery11} alt="Gallery 11" className="gallery__img"/>
          </figure>
          <figure className="gallery__item gallery__item--12">
            <img src={imgGallery12} alt="Gallery 12" className="gallery__img"/>
          </figure>
          <figure className="gallery__item gallery__item--13">
            <img src={imgGallery13} alt="Gallery 13" className="gallery__img"/>
          </figure>
          <figure className="gallery__item gallery__item--14">
            <img src={imgGallery14} alt="Gallery 14" className="gallery__img"/>
          </figure>

 
        </section>

        <footer className="footer">
          <ul className="nav">
            <li className="nav__item"><a href="/#" className="nav__link">Find your dream home</a></li>
            <li className="nav__item"><a href="/#" className="nav__link">Request proposal</a></li>
            <li className="nav__item"><a href="/#" className="nav__link">Download home planner</a></li>
            <li className="nav__item"><a href="/#" className="nav__link">Contact Us</a></li>
            <li className="nav__item"><a href="/#" className="nav__link">Submit your property</a></li>
            <li className="nav__item"><a href="/#" className="nav__link">Come work with us</a></li>
          </ul>

          <p className="copyright">
            &copy; Copyright 2021 by Delwin Best. Feel free to use this project for your own purposes. This does not apply if you plan to produce your own course of tutorials.
          </p>
        </footer>
    </div>
  );
}

export default App;
