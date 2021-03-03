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

function App() {
  return (
    <div className="container">
        <div className="sidebar">
          Sidebar
        </div>

        <header className="header">
          Header
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
          Gallery
        </section>

        <footer className="footer">
          Footer
        </footer>
    </div>
  );
}

export default App;
